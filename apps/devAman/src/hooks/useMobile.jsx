import { useState, useEffect } from 'react';

export default function useMobile() {
    const isMobile = () => {
        return window.innerWidth <= 768;
    };

    const [isMobileView, setIsMobileView] = useState(isMobile());

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(isMobile());
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return isMobileView;
}