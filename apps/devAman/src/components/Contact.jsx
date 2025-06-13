import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';

const tabs = ['Mail Me', 'Hire Me', 'ChatBot'];

const Contact = () => {
  const [selectedTab, setSelectedTab] = useState('Hire Me');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [showToast, setShowToast] = useState(false);
  const formRef = useRef(null);
  const isFormValid = formData.name && formData.email && formData.message;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setShowToast(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setShowToast(false), 3000);
      })
      .catch((err) => {
        console.error('Email error:', err.text);
      });
  };

  const openChatbot = () => {
    window.open('https://your-chatbot-url.com', '_blank', 'width=400,height=600');
  };

  const openCV = () => {
    window.open('/static/cv.pdf', '_blank');
  };

  return (
    <section id="contact" className="max-w-3xl sm:max-w-4xl mx-auto px-4 py-16 sm:py-20 text-white">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-bold mb-10 text-center">
        Contact
      </h2>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-6 mb-10 text-center">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`relative active:scale-[0.95] cursor-pointer px-4 sm:px-6 py-2 sm:py-3 rounded-md font-bold text-sm sm:text-base transition-colors ${selectedTab === tab ? 'text-red-500' : 'text-white'
              }`}
            onClick={() => setSelectedTab(tab)}
            aria-pressed={selectedTab === tab}
            role="tab"
          >
            {tab}
            {selectedTab === tab && (
              <motion.div
                layoutId="underline"
                className="absolute bottom-0 left-0 right-0 h-[3px] bg-red-600 rounded-full"
              />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-black p-6 sm:p-8 shadow-xl rounded-xl min-h-[300px]">
        <AnimatePresence mode="wait">
          {selectedTab === 'Mail Me' && (
            <motion.div
              key="mail"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              role="tabpanel"
            >
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-2 sm:p-3 rounded-md text-sm sm:text-base bg-gradient-to-br from-[#1f1f1f] to-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-2 sm:p-3 rounded-md text-sm sm:text-base bg-gradient-to-br from-[#1f1f1f] to-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                  className="w-full p-2 sm:p-3 rounded-md text-sm sm:text-base bg-gradient-to-br from-[#1f1f1f] to-black text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <button
                  type="submit"
                  disabled={!isFormValid}
                  className={`${isFormValid ? 'cursor-pointer text-white bg-red-700 hover:bg-red-800' : 'bg-red-400 text-red-100 cursor-not-allowed'
                    } transition  font-semibold py-3 px-6 rounded-md block mx-auto text-sm sm:text-base`}
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          )}

          {selectedTab === 'Hire Me' && (
            <motion.div
              key="hire"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              role="tabpanel"
            >
              <div className="text-center">
                <p className="text-sm sm:text-base mb-6">Want my resume? Just click below!</p>
                <button
                  onClick={openCV}
                  className="active:scale-[0.95] cursor-pointer bg-red-700 hover:bg-red-800 transition text-white font-semibold py-3 px-6 rounded-md text-sm sm:text-base"
                >
                  View Resume (PDF)
                </button>
              </div>
            </motion.div>
          )}

          {selectedTab === 'ChatBot' && (
            <motion.div
              key="chat"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              role="tabpanel"
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src="/static/chibi-mikasa.png"
                  alt="Mikasa"
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-red-600 mb-4"
                />
                <h3 className="text-xl sm:text-2xl font-bold mb-1">Mikasa</h3>
                <p className="text-green-400 text-xs sm:text-sm mb-4">● Online</p>
                <p className="text-gray-300 text-sm sm:text-base max-w-md mb-6">
                  Ask me anything about my work, skills, or projects!
                </p>
                <button
                  onClick={openChatbot}
                  className="active:scale-[0.95] cursor-pointer bg-red-700 hover:bg-red-800 transition text-white font-semibold py-3 px-6 rounded-md shadow-lg text-sm sm:text-base"
                >
                  Open Chat
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Toast */}
      {
        showToast && (
          <div
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-red-900 text-white px-6 py-4 rounded-lg shadow-lg font-orbitron text-sm sm:text-base z-50 flex items-center space-x-4 animate-pulse"
            role="alert"
            aria-live="assertive"
          >
            <img
              src="/static/levi.png"
              alt="Levi"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white"
            />
            <span>huhh done.</span>
          </div>
        )
      }
    </section >
  );
};

export default Contact;
