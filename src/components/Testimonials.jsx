import React from 'react';
import client1 from "../assets/images/alex.jpeg";
import client2 from "../assets/images/david.jpg";
import client3 from "../assets/images/jane.jpeg";


const Testimonials = () => {
    return (
        <div className='bg-[#121212] py-12 geist-mono-mid'>
            <h2 className="text-3xl font-bold text-center text-white mb-8">What Our Clients Say</h2>
            <section className="bg-[#1a1a1a] text-gray-300 py-16 px-4 rounded-lg shadow-lg">
                <div className="container mx-auto">
                    <div className="flex flex-wrap justify-center">
                        <div className="lg:w-1/3 md:w-1/2 p-4">
                            <div className="bg-[#242424] p-6 rounded-lg shadow-lg">
                                <img className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-[#333]" src={client1} alt="Client 1" />
                                <h3 className="text-lg font-semibold text-white text-center mb-2">Melon Eusk</h3>
                                <p className="text-center text-sm text-gray-500 mb-4">"This service is exceptional. The team provides top-notch security solutions for all our needs."</p>
                                <div className="flex justify-center">
                                    <a href="#" className="text-blue-500 hover:underline">LinkedIn</a>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 md:w-1/2 p-4">
                            <div className="bg-[#242424] p-6 rounded-lg shadow-lg">
                                <img className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-[#333]" src={client2} alt="Client 2" />
                                <h3 className="text-lg font-semibold text-white text-center mb-2">Jark Mukerburg</h3>
                                <p className="text-center text-sm text-gray-500 mb-4">"Amazing support! They ensured our infrastructure was rock-solid and hack-proof."</p>
                                <div className="flex justify-center">
                                    <a href="#" className="text-blue-500 hover:underline">LinkedIn</a>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 md:w-1/2 p-4">
                            <div className="bg-[#242424] p-6 rounded-lg shadow-lg">
                                <img className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-[#333]" src={client3} alt="Client 3" />
                                <h3 className="text-lg font-semibold text-white text-center mb-2">Gill Bates</h3>
                                <p className="text-center text-sm text-gray-500 mb-4">"The level of security they provided is unparalleled. We trust them for our most critical data."</p>
                                <div className="flex justify-center">
                                    <a href="#" className="text-blue-500 hover:underline">LinkedIn</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Testimonials;
