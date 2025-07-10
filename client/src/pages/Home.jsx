import React from "react";
import Header from "../components/common/Header";
import ButtonFunc from "../components/common/Button";
import Layout from "../components/common/Layout";

const Home = () =>{
    return (
        <Layout>
            <div className="max-w-xl">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
                    Hi, I am Luna, and this is your safespace
                </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
                <button size="large" variant="primary" onClick={()=>handleClick("Pause")}>
                    Breathe with me
                </button>
                <button size="large" variant="primary" onClick={()=>handleClick("Talk")}>
                    Something in your mind?
                </button>
                <button size="large" variant="primary" onClick={()=>handleClick("Journal")}>
                    Write whatever, no judgements
                </button>
            </div>
        </Layout>        
    )
}

