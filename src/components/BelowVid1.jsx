import React from 'react';
import { ShieldAlert, Cpu, Globe } from 'lucide-react'; // Lucide icons for hacker vibes

const CompanyInfo = () => {
    return (
        <div className="w-full bg-gradient-to-b from-[#1c212e] to-black text-gray-300 py-16 px-6 md:px-12 geist-mono-mid">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 uppercase tracking-wider geist-mono-mid">
                    Who We Are
                </h2>
                <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto ">
                    "We are the architects of digital security, controlling data streams, 
                    fortifying networks, and redefining the future of cyber intelligence."
                </p>
            </div>

            {/* Info Grid */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {/* Card 1 */}
                <div className="p-6 bg-[#111] border border-cyan-400/30 rounded-xl shadow-md hover:shadow-cyan-400/50 transition-all">
                    <ShieldAlert className="mx-auto text-cyan-400" size={48} />
                    <h3 className="mt-4 text-xl font-semibold text-cyan-300">Cyber Defense</h3>
                    <p className="mt-2 text-gray-400 geist-mono-light">
                        Protecting systems from unseen threats, 24/7 surveillance, 
                        and zero-trust security.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="p-6 bg-[#111] border border-cyan-400/30 rounded-xl shadow-md hover:shadow-cyan-400/50 transition-all">
                    <Cpu className="mx-auto text-cyan-400" size={48} />
                    <h3 className="mt-4 text-xl font-semibold text-cyan-300">AI & Automation</h3>
                    <p className="mt-2 text-gray-400">
                        Cutting-edge algorithms ensuring real-time threat detection 
                        and self-healing networks.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="p-6 bg-[#111] border border-cyan-400/30 rounded-xl shadow-md hover:shadow-cyan-400/50 transition-all">
                    <Globe className="mx-auto text-cyan-400" size={48} />
                    <h3 className="mt-4 text-xl font-semibold text-cyan-300">Global Reach</h3>
                    <p className="mt-2 text-gray-400">
                        Monitoring, securing, and managing data flows worldwide with 
                        encrypted networks.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CompanyInfo;
