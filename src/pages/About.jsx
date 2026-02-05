import React from 'react';
import { experience, education, certifications, professionalSummary } from '../data/portfolio';
import GlassCard from '../components/GlassCard';
import { FaGraduationCap, FaCertificate, FaTrophy } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiMongodb, SiPython, SiGit } from 'react-icons/si';
import { FaReact, FaNodeJs } from 'react-icons/fa';

const About = () => {
    console.log("About Page Mounted");
    console.log("Data:", { experience, education, certifications });

    return (
        <div className="container mx-auto px-4 py-20 min-h-screen">
            <div className="max-w-4xl mx-auto">

                {/* Intro */}
                <section className="mb-20">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="text-gradient">About Me</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                        {professionalSummary}
                    </p>
                </section>

                {/* Education Section - NEW */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold mb-8 flex items-center">
                        <FaGraduationCap className="mr-3 text-electricPurple" />
                        Education
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {education.map((edu, idx) => (
                            <GlassCard key={idx} className="hover:bg-white/5 transition-colors">
                                <span className="text-xs font-mono text-neonGreen block mb-2">{edu.period}</span>
                                <h3 className="text-lg font-bold text-white mb-1">{edu.institution}</h3>
                                <p className="text-gray-300 mb-2">{edu.degree}</p>
                                <p className="text-sm text-gray-500">Grade: {edu.grade}</p>
                            </GlassCard>
                        ))}
                    </div>
                </section>

                {/* Experience Timeline */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold mb-8 flex items-center">
                        <span className="w-8 h-1 bg-neonGreen mr-4 inline-block rounded-full"></span>
                        Professional Experience
                    </h2>

                    <div className="relative border-l-2 border-white/10 ml-4 md:ml-6 space-y-12">
                        {experience.map((item, idx) => (
                            <div key={idx} className="relative pl-8 md:pl-12">
                                {/* Dot */}
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-black border-2 border-electricPurple ring-4 ring-black"></div>

                                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                                    <span className="text-sm font-mono text-neonGreen mt-1 sm:mt-0">{item.year}</span>
                                </div>
                                <p className="text-gray-400 max-w-2xl leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Certifications - NEW */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold mb-8 flex items-center">
                        <FaTrophy className="mr-3 text-yellow-400" />
                        Certifications & Awards
                    </h2>
                    <div className="space-y-4">
                        {certifications.map((cert, idx) => (
                            <GlassCard key={idx} className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 hover:bg-white/5 disabled-link">
                                <div>
                                    <h3 className="font-bold text-white flex items-center gap-2">
                                        {cert.title} <span className="text-xs font-normal text-gray-500">• {cert.issuer}</span>
                                    </h3>
                                    <p className="text-sm text-gray-400 mt-1">{cert.description}</p>
                                </div>
                                <div className="text-sm font-mono text-gray-500 whitespace-nowrap">
                                    {cert.date}
                                </div>
                            </GlassCard>
                        ))}
                    </div>
                </section>

                {/* Tech Stack */}
                <section>
                    <h2 className="text-2xl font-bold mb-8 flex items-center">
                        <span className="w-8 h-1 bg-electricPurple mr-4 inline-block rounded-full"></span>
                        Technical Arsenal
                    </h2>

                    <GlassCard className="p-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {/* Tech Item */}
                            <div className="flex flex-col items-center gap-3 hover:text-neonGreen transition-colors group">
                                <SiNextdotjs size={40} className="group-hover:scale-110 transition-transform" />
                                <span className="font-medium">Next.js</span>
                            </div>
                            <div className="flex flex-col items-center gap-3 hover:text-blue-400 transition-colors group">
                                <FaReact size={40} className="group-hover:scale-110 transition-transform" />
                                <span className="font-medium">React</span>
                            </div>
                            <div className="flex flex-col items-center gap-3 hover:text-green-500 transition-colors group">
                                <FaNodeJs size={40} className="group-hover:scale-110 transition-transform" />
                                <span className="font-medium">Node.js</span>
                            </div>
                            <div className="flex flex-col items-center gap-3 hover:text-green-400 transition-colors group">
                                <SiMongodb size={40} className="group-hover:scale-110 transition-transform" />
                                <span className="font-medium">MongoDB</span>
                            </div>

                            <div className="flex flex-col items-center gap-3 hover:text-cyan-400 transition-colors group">
                                <SiTailwindcss size={40} className="group-hover:scale-110 transition-transform" />
                                <span className="font-medium">Tailwind</span>
                            </div>
                            <div className="flex flex-col items-center gap-3 hover:text-yellow-400 transition-colors group">
                                <SiPython size={40} className="group-hover:scale-110 transition-transform" />
                                <span className="font-medium">Python</span>
                            </div>
                            <div className="flex flex-col items-center gap-3 hover:text-blue-600 transition-colors group">
                                <SiTypescript size={40} className="group-hover:scale-110 transition-transform" />
                                <span className="font-medium">TypeScript</span>
                            </div>
                            <div className="flex flex-col items-center gap-3 hover:text-orange-500 transition-colors group">
                                <SiGit size={40} className="group-hover:scale-110 transition-transform" />
                                <span className="font-medium">Git</span>
                            </div>
                        </div>
                    </GlassCard>
                </section>

            </div>
        </div>
    );
};

export default About;
