import React from 'react';

export default function Hero() {
    return (
        <section className="py-16 px-4 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                        Luis Ruiz
                    </h1>
                    <h2 className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300">
                        Full-Stack Developer, AI Enthusiast, & Tech-Enthusiast
                    </h2>
                    <div className="h-1 w-24 bg-blue-500 mx-auto mt-6 mb-8"></div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl text-center md:text-left">
                        Building modern web applications and exploring the frontiers of artificial intelligence.
                        Passionate about creating intuitive user experiences and leveraging cutting-edge technologies
                        to solve complex problems.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors shadow-md hover:shadow-lg">
                            View My Work
                        </button>
                        <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800 px-6 py-3 rounded-md font-medium transition-colors">
                            Contact Me
                        </button>
                    </div>
                </div>
                
                <div className="flex flex-wrap justify-center gap-6 mt-8">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                        <span className="text-blue-600 font-semibold">Frontend</span>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">React, Next.js, Tailwind</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                        <span className="text-blue-600 font-semibold">Backend</span>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">Node.js, Express, Python</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                        <span className="text-blue-600 font-semibold">AI/ML</span>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">TensorFlow, PyTorch, LLMs</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
