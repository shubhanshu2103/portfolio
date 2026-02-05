import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FaReact, FaNodeJs, FaJs } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';

const TechOrbit = () => {
    const containerRef = useRef(null);
    const orbitRef = useRef(null);
    const iconsRef = useRef([]);

    useEffect(() => {
        // Rotation animation for the entire orbit circle
        gsap.to(orbitRef.current, {
            rotation: 360,
            duration: 20,
            repeat: -1,
            ease: "none",
        });

        // Counter-rotation for icons so they stay upright
        iconsRef.current.forEach((icon) => {
            gsap.to(icon, {
                rotation: -360,
                duration: 20,
                repeat: -1,
                ease: "none",
            });
        });
    }, []);

    const techs = [
        { icon: <FaReact size={40} className="text-blue-400" />, name: 'React' },
        { icon: <FaNodeJs size={40} className="text-green-500" />, name: 'Node.js' },
        { icon: <SiMongodb size={40} className="text-green-400" />, name: 'MongoDB' },
        { icon: <FaJs size={40} className="text-yellow-400" />, name: 'JavaScript' },
    ];

    return (
        <div className="relative w-80 h-80 flex items-center justify-center" ref={containerRef}>
            {/* Central Planet or Core */}
            <div className="absolute w-24 h-24 bg-gradient-to-br from-neonGreen to-electricPurple rounded-full blur-xl opacity-50 animate-pulse"></div>
            <div className="absolute w-20 h-20 bg-black rounded-full border border-white/20 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(57,255,20,0.5)]">
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neonGreen to-electricPurple">Dev</span>
            </div>

            {/* Orbit Ring */}
            <div className="absolute w-full h-full rounded-full border border-white/10" />

            {/* Rotating Container */}
            <div ref={orbitRef} className="absolute w-full h-full">
                {techs.map((tech, index) => {
                    // Calculate position on the circle
                    const angle = (index / techs.length) * 2 * Math.PI;
                    const radius = 160; // Half of w-80 (320px)
                    const x = Math.cos(angle) * radius; // This will place them relative to center if we were using absolute positioning from center
                    // Actually, let's use standard CSS positioning for circle items
                    // Or just predefined classes since it's only 4 items.
                    // Better: Absolute positioning with top/left percentages.

                    const style = {
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: `translate(-50%, -50%) rotate(${index * 90}deg) translate(160px) rotate(-${index * 90}deg)` // Initial static position
                        // But we want dynamic rotation. 
                        // The container `orbitRef` rotates. The items just need to be placed on the edge.
                    };

                    // Simplified approach: Place them on the ring visually using standard CSS transforms
                    // 0deg, 90deg, 180deg, 270deg positions

                    const positions = [
                        'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2',
                        'top-1/2 right-0 translate-x-1/2 -translate-y-1/2',
                        'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2',
                        'top-1/2 left-0 -translate-x-1/2 -translate-y-1/2',
                    ];

                    return (
                        <div
                            key={tech.name}
                            ref={el => iconsRef.current[index] = el}
                            className={`absolute ${positions[index]} glass-card p-3 rounded-full hover:scale-110 transition-transform cursor-pointer`}
                            title={tech.name}
                        >
                            {tech.icon}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TechOrbit;
