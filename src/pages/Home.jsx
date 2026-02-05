import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useTextScramble } from '../hooks/useTextScramble';
import TechOrbit from '../components/TechOrbit';
import GlassCard from '../components/GlassCard';
import { FaTrophy } from 'react-icons/fa';

const Home = () => {
    const headlineRef = useTextScramble('Architecting Intelligent Web Systems');
    const summaryRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(summaryRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, delay: 1, ease: 'power3.out' }
        );
    }, []);

    return (
        <div className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center px-4 relative overflow-hidden">

            {/* Background Decorative Elements */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neonGreen/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-electricPurple/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl items-center z-10">

                {/* Hero Text */}
                <div className="space-y-6 text-center md:text-left">
                    <h2 className="text-xl md:text-2xl text-gray-400 font-medium">Hello, I'm Shubhanshu</h2>
                    <h1
                        ref={headlineRef}
                        className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 min-h-[1.2em]"
                    >
                        Architecting Intelligent Web Systems
                    </h1>
                    <p className="text-gray-400 text-lg max-w-lg mx-auto md:mx-0">
                        Building rigorous, high-performance web applications with a focus on AI integration and fluid user experiences.
                    </p>

                    <div ref={summaryRef} className="pt-8">
                        <GlassCard className="inline-flex items-center space-x-4 border-neonGreen/30 hover:border-neonGreen/60 transition-colors">
                            <div className="p-3 bg-neonGreen/10 rounded-full text-neonGreen">
                                <FaTrophy size={20} />
                            </div>
                            <div className="text-left">
                                <p className="text-sm text-gray-400">Latest Achievement</p>
                                <p className="font-bold text-white">SIH 2025 National Waitlist</p>
                            </div>
                        </GlassCard>

                        <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
                            <a href="/projects" className="bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors">
                                View Projects
                            </a>
                            <a href="/contact" className="border border-white/20 text-white px-6 py-3 rounded-full font-bold hover:bg-white/10 transition-colors">
                                Contact Me
                            </a>
                        </div>
                    </div>
                </div>

                {/* Tech Orbit Animation */}
                <div className="flex justify-center md:justify-end">
                    <TechOrbit />
                </div>
            </div>
        </div>
    );
};

export default Home;
