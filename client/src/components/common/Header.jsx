import React from "react";

const Header = () => {
    return(
    <header className="header-root">
            <div className="container mx-auto px-6 py-6 flex justify-between items-center relative z-10"></div>
            <div className="flex items-center gap-2">

                    <div className="w-8 h-8 bg-gradient-to-br from-avocado to-[#7a9455] rounded-full flex items-center justify-center text-2xl">🥑</div>
                    <span className="text-xl font-bold text-gray-800 tracking-tight">Luna</span>
                </div>
    
        <div className="header-underline"></div>
    </header>);
};

export default Header;