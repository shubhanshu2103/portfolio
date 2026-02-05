import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import GlassCard from './GlassCard';
import { getTechIcon } from '../utils/icons';

const ProjectCard = ({ project, className = '', large = false }) => {
    return (
        <GlassCard className={`relative group overflow-hidden transition-all duration-300 hover:border-white/30 hover:scale-[1.02] ${className}`}>
            {/* status badge */}
            <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold border z-20 ${project.status === 'Active'
                    ? 'bg-neonGreen/10 text-neonGreen border-neonGreen/20'
                    : 'bg-electricPurple/10 text-electricPurple border-electricPurple/20'
                }`}>
                {project.status}
            </div>

            <div className="flex flex-col h-full justify-between z-10 relative">
                <div>
                    <div className="flex flex-wrap gap-3 mb-4">
                        {project.tech.map(t => (
                            <div key={t} className="flex items-center gap-1 text-xs text-gray-400 bg-white/5 px-2 py-1 rounded-md" title={t}>
                                {getTechIcon(t)}
                                <span>{t}</span>
                            </div>
                        ))}
                    </div>

                    <h3 className={`font-bold mb-2 group-hover:text-neonGreen transition-colors ${large ? 'text-3xl' : 'text-xl'}`}>
                        {project.title}
                    </h3>

                    <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                        {project.description}
                    </p>
                </div>

                <div className="flex space-x-4 mt-auto">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-sm font-medium text-white hover:text-neonGreen transition-colors border border-white/10 px-4 py-2 rounded-lg hover:border-neonGreen/50 bg-black/50"
                        >
                            <FaGithub /> <span>View Code</span>
                        </a>
                    )}
                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-sm font-medium text-white hover:text-electricPurple transition-colors border border-white/10 px-4 py-2 rounded-lg hover:border-electricPurple/50 bg-black/50"
                        >
                            <FaExternalLinkAlt /> <span>Demo</span>
                        </a>
                    )}
                </div>
            </div>

            {/* Midnight Neon Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-neonGreen to-electricPurple opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 pointer-events-none" />
        </GlassCard>
    );
};

export default ProjectCard;
