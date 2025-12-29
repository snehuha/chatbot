import React from "react";
import { useNavigate } from "react-router-dom";
import { PauseCircle, MessageCircle, ArrowRight, Heart } from "lucide-react";
import { motion } from "framer-motion";
import Header from "../components/common/Header";
import Layout from "../components/common/Layout";
const Home = () => {
  const navigate = useNavigate();

  return (
    <Layout>
    <div className="bg-cream-200 w-full">

      <section className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Hi, I am Luna and this is your safe space.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

          <motion.div whileHover={{ y: -10 }} className="bg-green/60 p-10 rounded-[2rem] shadow-xl">
            <div className="w-8 h-8 text-blue-500 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Pause</h3>
            <p className="mb-6 text-gray-600">Breathe with me</p>
            <button onClick={() => navigate("/pause")} className="text-avocado font-bold flex gap-1">
              Try it now <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          <motion.div whileHover={{ y: -10 }} className="bg-white/60 p-10 rounded-[2rem] shadow-xl">
         <div className="w-8 h-8 text-avocado mb-6" />
            <h3 className="text-2xl font-bold mb-4">Talk</h3>
            <p className="mb-6 text-gray-600">
              Something in your mind? Feel free to chat with me.
            </p>
            <button onClick={() => navigate("/talk")} className="text-avocado font-bold flex gap-1">
              Start chatting <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          <motion.div whileHover={{ y: -10 }} className="bg-white/60 p-10 rounded-[2rem] shadow-xl">
            <div className="w-8 h-8 text-red-400 mb-6" />
            <h3 className="text-2xl font-bold mb-4">The Journal</h3>
            <p className="mb-6 text-gray-600">
              Write whatever is on your mind. No judgements here.
            </p>
            <button onClick={() => navigate("/journal")} className="text-avocado font-bold flex gap-1">
              Start journaling <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

        </div>
      </section>
    </div>
    </Layout>
  );
};

export default Home;
