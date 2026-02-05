import React from 'react';
import { SiNextdotjs, SiNodedotjs, SiPrisma, SiFastapi, SiGreensock, SiReact, SiTailwindcss, SiTypescript, SiMongodb, SiPython, SiDocker, SiGit } from 'react-icons/si';
import { FaRobot, FaDatabase, FaCode } from 'react-icons/fa';

export const getTechIcon = (techName) => {
    const normalized = techName.toLowerCase();

    if (normalized.includes('next')) return <SiNextdotjs className="text-white" />;
    if (normalized.includes('react')) return <SiReact className="text-cyan-400" />;
    if (normalized.includes('node')) return <SiNodedotjs className="text-green-500" />;
    if (normalized.includes('prisma')) return <SiPrisma className="text-white" />;
    if (normalized.includes('fastapi')) return <SiFastapi className="text-teal-400" />;
    if (normalized.includes('gsap')) return <SiGreensock className="text-green-400" />;
    if (normalized.includes('tailwind')) return <SiTailwindcss className="text-cyan-300" />;
    if (normalized.includes('python')) return <SiPython className="text-yellow-300" />;
    if (normalized.includes('mongo')) return <SiMongodb className="text-green-400" />;
    if (normalized.includes('crewai')) return <FaRobot className="text-orange-400" />; // Fallback/Custom
    if (normalized.includes('ai')) return <FaRobot className="text-purple-400" />;
    if (normalized.includes('database')) return <FaDatabase className="text-gray-400" />;

    return <FaCode className="text-gray-500" />;
};
