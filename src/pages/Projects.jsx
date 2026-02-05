import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../data/portfolio';
import ProjectCard from '../components/ProjectCard';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {

    const categories = [
        { id: 'AI & Agentic', title: 'AI & Agentic Systems', color: 'text-neonGreen' },
        { id: 'Web Architecture', title: 'Web Architecture & Full-Stack', color: 'text-electricPurple' },
        { id: 'Core/DSA', title: 'Core Engineering & DSA', color: 'text-blue-400' },
    ];

    return (
        <div className="min-h-screen py-20">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-16 text-center">
                    <span className="text-gradient">Project Portfolio</span>
                </h1>

                <div className="space-y-24">
                    {categories.map((cat) => {
                        const catProjects = projects.filter(p => p.category === cat.id);
                        if (catProjects.length === 0) return null;

                        return (
                            <div key={cat.id}>
                                <h2 className={`text-3xl font-bold mb-8 flex items-center ${cat.color} opacity-90`}>
                                    <span className="mr-4 text-glow">{cat.title}</span>
                                    <div className="h-[1px] bg-white/10 flex-grow"></div>
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {catProjects.map(project => (
                                        <ProjectCard key={project.id} project={project} className="h-full" />
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-20 text-center">
                    <a href="/archive" className="inline-block border border-white/20 px-8 py-3 rounded-full hover:bg-white/5 transition-colors text-gray-300 hover:text-white">
                        View Searchable Archive &rarr;
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Projects;
