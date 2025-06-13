import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-black text-gray-400 py-6 px-4 text-center border-t border-gray-800 select-none">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6 max-w-4xl mx-auto">
                <p className="font-orbitron text-sm text-center sm:text-left">
                    &copy; {new Date().getFullYear()} devAman.space &mdash; Made with ❤️
                </p>

                <div className="flex gap-5 text-xl justify-center">
                    <a
                        href="https://github.com/JdevAman"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="hover:text-white transition-colors"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://linkedin.com/in/jdevAman"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="hover:text-white transition-colors"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://x.com/JDevAman"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="x"
                        className="hover:text-white transition-colors"
                    >
                        <FaTwitter />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
