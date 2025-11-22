import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageCircle, PauseCircle, ArrowRight, Wind, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-cream text-gray-800 font-sans selection:bg-avocado selection:text-white overflow-hidden relative">

            {/* Background Elements - Soft Blobs */}
            <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-sage/30 rounded-full blur-[100px] opacity-70 animate-pulse-slow"></div>
            <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-avocado/20 rounded-full blur-[120px] opacity-60"></div>

            {/* Navbar */}
            <nav className="container mx-auto px-6 py-6 flex justify-between items-center relative z-10">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-avocado to-[#7a9455] rounded-full flex items-center justify-center text-2xl">🥑</div>
                    <span className="text-xl font-bold text-gray-800 tracking-tight">Luna</span>
                </div>
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => navigate('/app')}
                        className="text-gray-600 hover:text-avocado font-medium transition-colors"
                    >
                        Login
                    </button>
                    <button
                        onClick={() => navigate('/app')}
                        className="bg-avocado hover:bg-[#87a35e] text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                        Sign Up
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="container mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row items-center relative z-10">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="md:w-1/2 text-center md:text-left mb-12 md:mb-0"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-md border border-white/40 rounded-full text-avocado font-semibold text-sm mb-6 shadow-sm">
                        <span className="animate-pulse">●</span> Online & Ready to Listen
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-gray-900 leading-[1.1] tracking-tight">
                        Your Safe Space <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-avocado to-[#7a9455]">
                            In a Noisy World.
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-600 max-w-lg mb-10 leading-relaxed mx-auto md:mx-0">
                        Meet Luna. The anti-anxiety companion that helps you pause, breathe, and talk it out. No judgment, just peace.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <button
                            onClick={() => navigate('/app')}
                            className="group bg-avocado hover:bg-[#87a35e] text-white text-lg font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-[0_10px_20px_-10px_rgba(152,180,109,0.5)] hover:shadow-[0_15px_25px_-10px_rgba(152,180,109,0.6)] flex items-center justify-center gap-2 transform hover:-translate-y-1"
                        >
                            Get Started
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={() => navigate('/app')}
                            className="group bg-white hover:bg-gray-50 text-gray-700 text-lg font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-sm hover:shadow-md border border-gray-100 flex items-center justify-center gap-2"
                        >
                            <PauseCircle className="w-5 h-5 text-avocado" />
                            Try The Pause
                        </button>
                    </div>
                </motion.div>

                {/* Right Image (Mascot) */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="md:w-1/2 flex justify-center relative"
                >
                    {/* Decorative circle behind mascot */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-white/40 backdrop-blur-xl rounded-full border border-white/50 shadow-2xl z-0"></div>

                    {/* Mascot Image */}
                    <motion.img
                        src="/luna_mascot.jpg"
                        alt="Luna Mascot"
                        className="relative z-10 w-[400px] md:w-[500px] drop-shadow-2xl"
                        animate={{ y: [0, -20, 0] }}
                        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                    />

                    {/* Floating Elements */}
                    <motion.div
                        animate={{ y: [0, 15, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                        className="absolute top-20 right-10 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50 z-20 max-w-[150px]"
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <Heart className="w-5 h-5 text-red-400 fill-current" />
                            <span className="text-xs font-bold text-gray-600">Daily Check-in</span>
                        </div>
                        <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full w-[80%] bg-avocado rounded-full"></div>
                        </div>
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
                        className="absolute bottom-20 left-0 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50 z-20 flex items-center gap-3"
                    >
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <Wind className="w-5 h-5 text-blue-500" />
                        </div>
                        <div>
                            <div className="text-sm font-bold text-gray-800">Breathe</div>
                            <div className="text-xs text-gray-500">2 min session</div>
                        </div>
                    </motion.div>

                </motion.div>
            </header>

            {/* Features Section */}
            <section className="container mx-auto px-6 py-20 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How Luna Helps You</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Scientifically backed tools to help you navigate anxiety and stress.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

                    {/* Feature 1: The Pause */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="bg-white/60 backdrop-blur-xl p-10 rounded-[2rem] shadow-xl border border-white/50 hover:border-avocado/30 transition-all duration-300"
                    >
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center mb-8 shadow-inner">
                            <PauseCircle className="w-8 h-8 text-blue-500" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-gray-800">The Pause</h3>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            An immersive <b>anti-anxiety simulator</b> designed to ground you instantly. When the world gets too loud, step into The Pause to regain your center through guided breathing and visual calm.
                        </p>
                        <button onClick={() => navigate('/pause')} className="text-avocado font-bold hover:underline flex items-center gap-1">
                            Try it now <ArrowRight className="w-4 h-4" />
                        </button>
                    </motion.div>

                    {/* Feature 2: The Chatbot */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="bg-white/60 backdrop-blur-xl p-10 rounded-[2rem] shadow-xl border border-white/50 hover:border-avocado/30 transition-all duration-300"
                    >
                        <div className="w-16 h-16 bg-gradient-to-br from-avocado/20 to-sage/20 rounded-2xl flex items-center justify-center mb-8 shadow-inner">
                            <MessageCircle className="w-8 h-8 text-avocado" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-gray-800">Luna Chat</h3>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            A truly <b>non-judgmental friend</b> who is always here to listen. Whether you need to vent, reflect, or just chat, Luna provides a safe, private environment to express yourself freely.
                        </p>
                        <button onClick={() => navigate('/talk')} className="text-avocado font-bold hover:underline flex items-center gap-1">
                            Start chatting <ArrowRight className="w-4 h-4" />
                        </button>
                    </motion.div>

                </div>
            </section>

            {/* Footer */}
            <footer className="text-center py-12 text-gray-500 text-sm relative z-10">
                <p>© {new Date().getFullYear()} Luna. Made with 💚 for your mind.</p>
            </footer>
        </div>
    );
};

export default LandingPage;
