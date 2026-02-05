import React, { useState, useMemo } from 'react';
import { projects } from '../data/portfolio';
import GlassCard from '../components/GlassCard';
import { FaSearch } from 'react-icons/fa';
import { getTechIcon } from '../utils/icons';

const Archive = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', ...new Set(projects.map(p => p.category))];

    const filteredProjects = useMemo(() => {
        return projects.filter(project => {
            // Safe checks for existing fields
            const nameMatch = (project.title || '').toLowerCase().includes(searchTerm.toLowerCase());
            const descMatch = (project.description || '').toLowerCase().includes(searchTerm.toLowerCase());
            const techMatch = project.tech.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));

            const matchesSearch = nameMatch || descMatch || techMatch;
            const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [searchTerm, selectedCategory]);

    return (
        <div className="container mx-auto px-4 py-20 min-h-screen">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl font-bold mb-2">Project Vault</h1>
                <p className="text-gray-400 mb-8">The complete archive of all works.</p>

                {/* Controls */}
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                    <div className="relative flex-grow">
                        <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search projects, stack, or keywords..."
                            className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-neonGreen transition-colors text-white placeholder-gray-500"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <div className="flex overflow-x-auto gap-2 pb-2 md:pb-0 no-scrollbar">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${selectedCategory === cat
                                        ? 'bg-neonGreen text-black'
                                        : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* List View */}
                <div className="space-y-4">
                    <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-2 text-sm font-medium text-gray-500">
                        <div className="col-span-1">Status</div>
                        <div className="col-span-4">Project</div>
                        <div className="col-span-3">Category</div>
                        <div className="col-span-4">Tech Stack</div>
                    </div>

                    {filteredProjects.map((project, idx) => (
                        <GlassCard key={idx} className="group flex flex-col md:grid md:grid-cols-12 gap-4 items-start md:items-center hover:bg-white/5 transition-colors">
                            <div className="col-span-1">
                                <div className={`w-2 h-2 rounded-full ${project.featured ? 'bg-electricPurple' : 'bg-gray-600'}`} title={project.status}></div>
                            </div>

                            <div className="col-span-4">
                                <h3 className="font-bold text-lg md:text-base group-hover:text-neonGreen transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-xs text-gray-500 line-clamp-1">{project.description}</p>
                            </div>

                            <div className="col-span-3">
                                <span className="px-2 py-1 rounded-full text-xs border border-white/10 text-gray-300">
                                    {project.category}
                                </span>
                            </div>

                            <div className="col-span-4 flex items-center flex-wrap gap-2 text-sm text-gray-400">
                                {project.tech.slice(0, 3).map(t => (
                                    <div key={t} className="flex items-center gap-1 bg-white/5 px-2 py-0.5 rounded text-xs">
                                        {getTechIcon(t)} <span>{t}</span>
                                    </div>
                                ))}
                                {project.tech.length > 3 && <span>+{project.tech.length - 3}</span>}
                            </div>

                        </GlassCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Archive;
