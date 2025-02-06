// Footer.jsx
import React from "react";

const Footer = () => {
    return (
        <footer className="w-full bg-white text-black py-8 px-4">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between">
                {/* Левый блок */}
                <div className="mb-6 md:mb-0">
                    <h2 className="text-2xl font-bold">SaleScout</h2>
                    <p className="mt-2">
                        Empowering noon marketplace sellers with AI-driven insights and optimization tools.
                    </p>
                </div>
                {/* Правый блок */}
                <div className="text-left md:text-right">
                    <h2 className="text-2xl font-bold">Contact</h2>
                    <p className="mt-2">Dubai, UAE</p>
                    <p>+971 58 566 1204</p>
                </div>
            </div>
        </footer>


    );
};

export default Footer;
