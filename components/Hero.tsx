import React from 'react';
import CtaButton from './CtaButton'; // Assuming CtaButton is in the same directory
import SkillCard from './SkillCard'; // Assuming SkillCard is in the same directory

export default function Hero() {
    return (
        <section className="py-16 px-4 md:py-24 lg:py-32 bg-gradient-to-b from-backgroundLight to-gray-100 dark:from-backgroundDark dark:to-gray-800">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-dark to-secondary-dark">
                        Luis Ruiz
                    </h1>
                    <h2 className="text-xl md:text-2xl font-medium text-textDark dark:text-textLight">
                        Full-Stack Developer, AI Enthusiast, & Tech-Enthusiast
                    </h2>
                    <div className="h-1 w-24 bg-primary mx-auto mt-6 mb-8"></div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
                    <p className="text-lg md:text-xl text-textDark dark:text-textLight leading-relaxed max-w-2xl text-center md:text-left">
                        Building modern web applications and exploring the frontiers of artificial intelligence.
                        Passionate about creating intuitive user experiences and leveraging cutting-edge technologies
                        to solve complex problems.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <CtaButton text="View My Work" variant="primary" />
                        <CtaButton text="Contact Me" variant="outline" />
                    </div>
                </div>
                
                <div className="flex flex-wrap justify-center gap-6 mt-8">
                    <SkillCard title="Frontend" description="React, Next.js, Tailwind" />
                    <SkillCard title="Backend" description="Node.js, Express, Python" />
                    <SkillCard title="AI/ML" description="TensorFlow, PyTorch, LLMs" />
                </div>
            </div>
        </section>
    );
}
