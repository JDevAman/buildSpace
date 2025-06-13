import React, { useState, useEffect } from 'react';

const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`
     fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 
    ${isSticky ? 'bg-black bg-opacity-80 backdrop-blur-md shadow-md' : 'mt-4 bg-transparent'}
  `}
        >
            <div className={`max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 h-16  bg-transparent`}>
                <a href="#" className="text-[var(--color-text-heading)] text-xl font-bold font-orbitron select-none">
                    <div className="flex items-center space-x-2">
                        <img
                            src="static/logo.png"
                            alt="Logo"
                            className="w-8 h-8 border-2 border-gray-600 md:hidden rounded-full"
                        />
                        <div className='hidden md:flex items-center space-x-1'>
                            <span>dev</span>
                            <span className='text-red-700'>Aman</span>
                        </div>
                    </div>
                </a>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-8 text-[var(--color-text-heading)] text-xl font-[var(--font-header-bebas)] font-semibold">
                    {navLinks.map(({ name, href }) => (
                        <li key={name}>
                            <a
                                href={href}
                                className="hover:text-[var(--color-accent-red)] transition-colors duration-300"
                            >
                                {name}
                            </a>
                        </li>
                    ))}
                </ul>

                <button
                    className="md:hidden text-[var(--color-text-heading)] focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                    aria-expanded={isOpen}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        {isOpen ? (
                            <path d="M6 18L18 6M6 6l12 12" /> // X icon
                        ) : (
                            <path d="M3 12h18M3 6h18M3 18h18" /> // Hamburger icon
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-black bg-opacity-90 backdrop-blur-md px-4 py-4 space-y-4">
                    {navLinks.map(({ name, href }) => (
                        <a
                            key={name}
                            href={href}
                            onClick={() => setIsOpen(false)}
                            className="block text-[var(--color-text-heading)] text-lg font-semibold hover:text-[var(--color-accent-red)] transition-colors duration-300"
                        >
                            {name}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
}
