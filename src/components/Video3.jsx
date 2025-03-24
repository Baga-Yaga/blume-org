import React from "react";

const VideoWithStatsSection = () => {
  return (
    <section className="text-white body-font bg-[#1a1a1a]">
      <div className="container px-5 py-24 mx-auto flex flex-wrap geist-mono-mid">
        <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
          <div className="w-full sm:p-4 px-4 mb-6">
            <h1 className="title-font font-medium text-xl mb-2 text-white">
              CT OS: Global Surveillance in Action
            </h1>
            <div className="leading-relaxed text-gray-300">
              Experience **CT OS**, the ultimate security and monitoring system. With real-time analytics and machine learning capabilities, we ensure the world stays under control, from monitoring digital footprints to advanced threat predictions.
            </div>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-medium text-3xl text-white">2.7K</h2>
            <p className="leading-relaxed text-gray-400">Active Monitoring Nodes</p>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-medium text-3xl text-white">1.8K</h2>
            <p className="leading-relaxed text-gray-400">Users Under Surveillance</p>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-medium text-3xl text-white">35</h2>
            <p className="leading-relaxed text-gray-400">Security Threats Detected</p>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-medium text-3xl text-white">4</h2>
            <p className="leading-relaxed text-gray-400">OS Versions Deployed</p>
          </div>
        </div>
        <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
          {/* <video className="object-cover object-center w-full h-full rounded-lg shadow-lg" controls>
            <source src="src/assets/videos/intro 3.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
          <iframe width="560" height="315" src="https://www.youtube.com/embed/J1TU86aGrcg?si=iOLP7SCbMhIAohX1&amp;start=31" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </section>
  );
};

export default VideoWithStatsSection;
