import React from "react";
import { ArrowRight } from "lucide-react";

const CompanyUpdates = () => {
  return (
    <section className="text-white body-font overflow-hidden bg-[#080808]">
      <div className="container px-5 py-24 mx-auto geist-mono-mid">
        <div className="-my-8 divide-y-2 divide-gray-700/50 flex flex-col gap-5">
          {/* Update 1 */}
          <div className="py-8 flex flex-wrap md:flex-nowrap hover:bg-[#121212] transition-all rounded-lg p-4 shadow-md shadow-cyan-500/30">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold text-cyan-400 tracking-wider">GLOBAL DEPLOYMENT</span>
              <span className="mt-1 text-gray-400 text-sm">03 March 2031</span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-semibold text-white title-font mb-2">
                SENTINEL OS Now Operational Worldwide
              </h2>
              <p className="leading-relaxed text-gray-300">
                Our latest **AI-driven surveillance system** has been seamlessly integrated across global networks, ensuring total visibility over digital ecosystems.
              </p>
              <a className="text-cyan-400 inline-flex items-center mt-4 hover:text-cyan-300">
                Access Report
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>

          {/* Update 2 */}
          <div className="py-8 flex flex-wrap md:flex-nowrap hover:bg-[#121212] transition-all rounded-lg p-4 shadow-md shadow-cyan-500/30">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold text-cyan-400 tracking-wider">REAL-TIME INTELLIGENCE</span>
              <span className="mt-1 text-gray-400 text-sm">07 April 2031</span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-semibold text-white title-font mb-2">
                NeuralSync AI Enhances Predictive Surveillance
              </h2>
              <p className="leading-relaxed text-gray-300">
                Our deep-learning AI can now analyze behavioral patterns in **real-time**, optimizing efficiency across 300+ global networks.
              </p>
              <a className="text-cyan-400 inline-flex items-center mt-4 hover:text-cyan-300">
                View Intelligence Logs
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>

          {/* Update 3 */}
          <div className="py-8 flex flex-wrap md:flex-nowrap hover:bg-[#121212] transition-all rounded-lg p-4 shadow-md shadow-cyan-500/30">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold text-cyan-400 tracking-wider">INFRASTRUCTURE CONTROL</span>
              <span className="mt-1 text-gray-400 text-sm">15 May 2031</span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-semibold text-white title-font mb-2">
                The GridOS Network Now Self-Sustaining
              </h2>
              <p className="leading-relaxed text-gray-300">
                Our **autonomous infrastructure system** now synchronizes across all connected nodes, maintaining control with zero human intervention.
              </p>
              <a className="text-cyan-400 inline-flex items-center mt-4 hover:text-cyan-300">
                Explore Network Map
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyUpdates;
