import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import { contactInfo } from '../data/portfolio';

const Footer = () => {
    return (
        <footer className="w-full bg-black py-8 border-t border-white/10 mt-auto">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-gray-400 text-sm">
                    © {new Date().getFullYear()} Shubhanshu Dubey. All rights reserved.
                </div>

                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                    <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
                        <FaEnvelope /> {contactInfo.email}
                    </a>
                    <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
                        <FaPhone /> {contactInfo.phone}
                    </a>
                </div>

                <div className="flex space-x-6">
                    <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neonGreen transition-colors text-xl">
                        <FaGithub />
                    </a>
                    <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-electricPurple transition-colors text-xl">
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
