import React from "react";
import Layout from "../components/common/Layout";
import ChatSidebar from "../components/Chatbot/ChatSidebar";
import ChatArea from "../components/Chatbot/ChatArea";

const Talk = () => {
    <Layout showHeader = {false}>
        <div className="w-full min-h-screen flex bg-sky-200">

            {/* Left sidebar*/}
            <aside className="w-1/3 max-w-sm bg-[#92d4dc] p-4 border-r border-gray-300 ">
                {/* placeholder for chatsidebar*/}
                <div className="text-lg font-semibold text-gray-800"><ChatSidebar/></div>
            </aside>

            {/*right chat area*/}
            <section className="flex-1 p-4 relative">
                {/*area for chatarea component*/}

                <div className="text-xl font-semibold text-gray-800">
                    <ChatArea/>
                </div>
            </section>
        </div>
    </Layout>
}