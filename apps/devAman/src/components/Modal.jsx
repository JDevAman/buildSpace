import React from "react";

const Modal = ({ isOpen, onClose, title, children }) => {

    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
            <div className="bg-gradient-to-br from-[#1f1f1f] to-black text-white p-6 rounded-xl w-[90%] max-w-md">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-bold">{title}</h3>
                    <button onClick={onClose} className="text-red-500 hover:text-red-700 cursor-pointer">X</button>
                </div>
                {children}
            </div>
        </div>
    );
};

export default Modal;
