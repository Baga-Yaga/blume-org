import React from 'react';
import man from "../assets/images/man.jpg"
import man1 from "../assets/images/personx1.png"
import man2 from "../assets/images/personx2.png"
import man4 from "../assets/images/personx3.png"
import man3 from "../assets/images/image.png"
import female from "../assets/images/female.png"


const Developers = () => {
    return (
        <div className='bg-[#121212] py-4'>
            <h2 className="text-3xl font-bold my-10  text-center text-white">Our Developers</h2>
            <section className="bg-[#1f1f1f] text-gray-300 font-medium body-font w-[90%] mx-auto p-10 rounded-lg shadow-lg">
                <div className="container px-5 py-16 mx-auto geist-mono-mid">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="text-3xl font-bold text-white mb-4">Meet Our Team</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-400">
                            Our expert developers who make everything possible.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
                        <div className="bg-[#2c2c2c] p-6 rounded-lg shadow-md hover:shadow-lg transition">
                            <img className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" src={man1} alt="John Doe" />
                            <h2 className="text-lg font-semibold text-white text-center">John Doe</h2>
                            <p className="text-sm text-gray-400 font-medium text-center">Lead Designer</p>
                            <p className="text-xs text-gray-500 font-medium text-center">john.doe@webcraft.dev</p>
                            <div className="flex justify-center mt-3 space-x-4">
                                <a href="" className="text-blue-400 hover:underline">Facebook</a>
                                <a href="" className="text-pink-400 hover:underline">Instagram</a>
                            </div>
                        </div>

                        <div className="bg-[#2c2c2c] p-6 rounded-lg shadow-md hover:shadow-lg transition">
                            <img className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" src={man} alt="Jane Smith" />
                            <h2 className="text-lg font-semibold text-white text-center">Jane Smith</h2>
                            <p className="text-sm text-gray-400 font-medium text-center">UI/UX Expert</p>
                            <p className="text-xs text-gray-500 font-medium text-center">jane.smith@webcraft.dev</p>
                            <div className="flex justify-center mt-3 space-x-4">
                                <a href="https://m.facebook.com/profile.php?id=61574695136816" className="text-blue-400 hover:underline">Facebook</a>
                                <a href="https://www.instagram.com/jane.smith.official/profilecard/?igsh=MXQzZGRuMHVrOHBnNA==" className="text-pink-400 hover:underline">Instagram</a>
                            </div>
                        </div>

                        <div className="bg-[#2c2c2c] p-6 rounded-lg shadow-md hover:shadow-lg transition">
                            <img className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" src={man2} alt="Alex Johnson" />
                            <h2 className="text-lg font-semibold text-white text-center">Alex Johnson</h2>
                            <p className="text-sm text-gray-400 font-medium text-center">Backend Developer</p>
                            <p className="text-xs text-gray-500 font-medium text-center">alex.johnson@webcraft.dev</p>
                            <div className="flex justify-center mt-3 space-x-4">
                                <a href="" className="text-blue-400 hover:underline">Facebook</a>
                                <a href="" className="text-pink-400 hover:underline">Instagram</a>
                            </div>
                        </div>

                        <div className="bg-[#2c2c2c] p-6 rounded-lg shadow-md hover:shadow-lg transition">
                            <img className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" src={female} alt="Emily Davis" />
                            <h2 className="text-lg font-semibold text-white text-center">Emily Davis</h2>
                            <p className="text-sm text-gray-400 font-medium text-center">Frontend Developer</p>
                            <p className="text-xs text-gray-500 font-medium text-center">emily.davis@webcraft.dev</p>
                            <div className="flex justify-center mt-3 space-x-4">
                                <a href="" className="text-blue-400 hover:underline">Facebook</a>
                                <a href="" className="text-pink-400 hover:underline">Instagram</a>
                            </div>
                        </div>

                        <div className="bg-[#2c2c2c] p-6 rounded-lg shadow-md hover:shadow-lg transition">
                            <img className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" src={man3} alt="Michael Brown" />
                            <h2 className="text-lg font-semibold text-white text-center">Michael Brown</h2>
                            <p className="text-sm text-gray-400 font-medium text-center">Full Stack Developer</p>
                            <p className="text-xs text-gray-500 font-medium text-center">michael.brown@webcraft.dev</p>
                            <div className="flex justify-center mt-3 space-x-4">
                                <a href="" className="text-blue-400 hover:underline">Facebook</a>
                                <a href="" className="text-pink-400 hover:underline">Instagram</a>
                            </div>
                        </div>

                        <div className="bg-[#2c2c2c] p-6 rounded-lg shadow-md hover:shadow-lg transition">
                            <img className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" src={man4} alt="David Wilson" />
                            <h2 className="text-lg font-semibold text-white text-center">David Wilson</h2>
                            <p className="text-sm text-gray-400 font-medium text-center">Cybersecurity Specialist</p>
                            <p className="text-xs text-gray-500 font-medium text-center">david.wilson@webcraft.dev</p>
                            <div className="flex justify-center mt-3 space-x-4">
                                <a href="" className="text-blue-400 hover:underline">Facebook</a>
                                <a href="" className="text-pink-400 hover:underline">Instagram</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Developers;
