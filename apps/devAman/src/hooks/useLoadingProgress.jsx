import { useProgress } from '@react-three/drei';
import { useEffect, useState } from 'react';

const MINIMUM_LOAD_TIME = 1500; // ms

export const useLoadingProgress = () => {
  const { progress } = useProgress();
  const [hasLoadedModel, setHasLoadedModel] = useState(false);

  const [smoothProgress, setSmoothProgress] = useState(0);
  const [displayProgress, setDisplayProgress] = useState(0);

  const [assetsFullyLoaded, setAssetsFullyLoaded] = useState(false);
  const [isEverythingLoaded, setIsEverythingLoaded] = useState(false);
  const [startTime] = useState(Date.now());

  // Callback to trigger when 3D model is ready
  const onModelReady = () => setHasLoadedModel(true);

  useEffect(() => {
    setSmoothProgress(prev => Math.max(prev, progress));
  }, [progress]);

  useEffect(() => {
    if (smoothProgress >= 100 && hasLoadedModel) {
      setAssetsFullyLoaded(true);
    }
  }, [smoothProgress, hasLoadedModel]);

  useEffect(() => {
    if (assetsFullyLoaded) {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, MINIMUM_LOAD_TIME - elapsed);

      if (remaining > 0) {
        const start = displayProgress;
        const delta = 100 - start;
        const increment = delta / (remaining / 16);

        const interval = setInterval(() => {
          setDisplayProgress(prev => {
            const next = prev + increment;
            if (next >= 100) {
              clearInterval(interval);
              return 100;
            }
            return next;
          });
        }, 16);

        return () => clearInterval(interval);
      } else {
        setDisplayProgress(100);
      }
    } else {
      setDisplayProgress(smoothProgress);
    }
  }, [assetsFullyLoaded, smoothProgress, startTime, displayProgress]);

  useEffect(() => {
    if (assetsFullyLoaded) {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, MINIMUM_LOAD_TIME - elapsed);

      const timeout = setTimeout(() => setIsEverythingLoaded(true), remaining + 100);
      return () => clearTimeout(timeout);
    }
  }, [assetsFullyLoaded, startTime]);

  return {
    progress: displayProgress,
    isLoaded: isEverythingLoaded,
    onModelReady,
  };
};
