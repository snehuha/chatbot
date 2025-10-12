import React from "react";
import Header from "./Header";

const Layout = ({children, showHeader = true}) => {
    return (
        <div className="min-h-screen bg-sky-200 w-full">
            {showHeader && <Header/>}

            {/* main content section */}
            <main className="flex-1 flex flex-col items-center justify-center px-4 gap-12 text-center">
                {children}
            </main>
        </div>
    );
};

export default Layout;