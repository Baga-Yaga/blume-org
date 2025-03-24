import React from 'react';
import cloud_image from '../assets/images/cloud-bg.jpg'
const Hero = () => {
    return (
        <div className="relative h-screen w-full bg-black text-white flex items-center justify-center overflow-hidden">
            {/* Animated Background Grid */}
            <div className="absolute inset-0 bg-grid opacity-20"></div>

            {/* Outer Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-90"></div>

            {/* Floating Elements */}
            {/* <div className="absolute top-10 left-10 w-24 h-24 border border-gray-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-16 h-16 border border-gray-500 rounded-full animate-ping"></div> */}

            {/* Hero Content */}
            <div className="relative z-10 text-center px-6">
                <h1 className="text-6xl md:text-7xl font-extrabold tracking-wider font-sci uppercase neon-text geist-mono-bold">
                    Blume Org
                </h1>
                <p className="mt-4 text-lg md:text-2xl max-w-3xl mx-auto font-light text-gray-300 geist-mono-mid">
                    "Defending the Digital Realm, One Cipher at a Time"
                </p>

                {/* Glowing Buttons */}
                <div className="mt-6 flex gap-4 justify-center">
                    <button className="px-6 py-3 text-lg font-semibold border border-gray-500 bg-black text-gray-300 rounded-lg hover:bg-gray-800 hover:text-white transition-all duration-300 shadow-lg">
                        Join the Network
                    </button>
                    <button className="px-6 py-3 text-lg font-semibold border border-cyan-400 bg-transparent text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 shadow-lg">
                        Explore Security
                    </button>
                </div>
            </div>

            {/* Floating Lines */}
            <div className="absolute bottom-0 w-full h-1 bg-cyan-400 animate-pulse"></div>
            <div className="absolute top-0 w-full h-1 bg-gray-600"></div>
        </div>
    );
}

export default Hero;
