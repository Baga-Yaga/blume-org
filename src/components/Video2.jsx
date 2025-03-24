import React from "react";

const VideoSection2 = () => {
  return (
    <section className="text-white body-font bg-[#121212]">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div className="lg:w-2/3 md:w-3/4 w-full mb-10">
          {/* <video className="w-full object-cover rounded-lg shadow-lg" controls autoPlay>
            <source src={intro2} type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
          <iframe className="w-full object-cover rounded-lg shadow-lg" width="560" height="315" src="https://www.youtube.com/embed/scyA9cnbja4?si=K39c-EtME6o2hB5v" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Global Surveillance Network in Action
          </h1>
          <p className="mb-8 leading-relaxed text-gray-300">
            Watch as our **CT OS** continuously monitors, predicts, and adapts to every digital footprint worldwide. A look into the future of security.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-cyan-500 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-600 rounded text-lg">
              Join the System
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection2;
