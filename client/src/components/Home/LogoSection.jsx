import React from 'react';
import Main from "./../../Assets/Home/Main.png";

const LogoSection = () => {
    return (
        <>
            <nav className="flex items-center justify-between p-4">
                <div className="flex items-center">
                    <img
                        src="https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297_640.png"
                        alt="Logo"
                        className="h-6 sm:h-8 md:h-8 lg:h-12"
                    />
                </div>
                <div className="flex items-center">
                    <a href="/login">
                        <button className="bg-red-500 text-white px-4 py-2 rounded">
                            Login
                        </button>
                    </a>
                </div>

            </nav>
            <div className="w-full h-px bg-gray-400"></div>
        </>
    );
};

export default LogoSection;
