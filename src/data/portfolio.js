export const projects = [
    // [AI & Agentic]
    {
        id: 'nexus-ai',
        title: 'Nexus-AI',
        description: 'Autonomous research hub orchestrating CrewAI agents for web-scale synthesis. Optimized Groq LPU inference to reduce latency and costs.',
        tech: ['React', 'FastAPI', 'CrewAI', 'Groq LPU'],
        category: 'AI & Agentic',
        status: 'Active',
        featured: true,
        github: 'https://github.com/shubhanshu2103/Nexus-AI',
        demo: null,
    },
    {
        id: 'sih-offline-ai',
        title: 'Offline AI Tutor',
        description: 'Offline AI ecosystem for rural education using 1.5B Qwen model via RAG on 4GB RAM devices. SIH 2025 National Waitlist.',
        tech: ['Python', 'RAG', 'Qwen 1.5B', 'Edge Computing'],
        category: 'AI & Agentic',
        status: 'Research',
        featured: true,
        github: 'https://github.com/shubhanshu2103', // Needs specific link
        demo: null, // Add demo link if available
    },
    {
        id: 'multi-agent-research',
        title: 'Multi-Agent Research Platform',
        description: 'Experimental platform for testing multi-agent collaboration patterns.',
        tech: ['Python', 'CrewAI', 'FastAPI'],
        category: 'AI & Agentic',
        status: 'Research',
        featured: false,
        github: 'https://github.com/shubhanshu2103/Multi-Agent-Research-Platform',
        demo: null,
    },
    {
        id: 'vibe-coding-2025',
        title: 'Vibe-Coding-2025',
        description: 'PromptPandemic hackathon project focusing on AI-driven coding assistants.',
        tech: ['Python', 'AI'],
        category: 'AI & Agentic',
        status: 'Archive',
        featured: false,
        github: 'https://github.com/shubhanshu2103/Vibe-Coding-2025',
        demo: null,
    },
    {
        id: 'fittrack-ai',
        title: 'FitTrack-AI',
        description: 'AI-powered fitness tracking application using computer vision for posture correction.',
        tech: ['Python', 'CV', 'TensorFlow'],
        category: 'AI & Agentic',
        status: 'Alpha',
        featured: false,
        github: 'https://github.com/shubhanshu2103/FitTrack-AI',
        demo: null,
    },


    // [Web Architecture]
    {
        id: 'metapulse',
        title: 'MetaPulse',
        description: 'High-performance "AAA" gaming showcase using Next.js & GSAP. 60FPS scroll-triggered motion and parallax effects.',
        tech: ['Next.js', 'Tailwind CSS', 'GSAP', 'Shadcn UI'],
        category: 'Web Architecture',
        status: 'Active',
        featured: true,
        github: 'https://github.com/shubhanshu2103/MetaPulse',
        demo: null,
    },
    {
        id: 'campus-event-booker',
        title: 'Campus-Event-Booker',
        description: 'Scalable backend for campus event management using Prisma & Postgres.',
        tech: ['Node.js', 'Express', 'Prisma', 'PostgreSQL'],
        category: 'Web Architecture',
        status: 'Completed',
        featured: false,
        github: 'https://github.com/shubhanshu2103/Campus-Event-Booker',
        demo: null,
    },
    {
        id: 'referral-system',
        title: 'Referral-System',
        description: 'Full-stack referral tracking system with Redux and JWT auth.',
        tech: ['MERN', 'Redux', 'JWT'],
        category: 'Web Architecture',
        status: 'Completed',
        featured: false,
        github: 'https://github.com/shubhanshu2103/Referral-System',
        demo: null,
    },
    {
        id: 'alquran-app',
        title: 'AlQuran-App',
        description: 'Digital Quran reading application with audio features.',
        tech: ['React', 'API Integration'],
        category: 'Web Architecture',
        status: 'Completed',
        featured: false,
        github: 'https://github.com/shubhanshu2103/AlQuran-App',
        demo: null,
    },

    // [Core/DSA]
    {
        id: 'node-mysql2',
        title: 'node-mysql2',
        description: 'Contributions to the core MySQL driver for Node.js (Pool events).',
        tech: ['JavaScript', 'Open Source'],
        category: 'Core/DSA',
        status: 'Contribution',
        featured: false,
        github: 'https://github.com/sidorares/node-mysql2', // Upstream repo or user fork
        demo: null,
    },
    {
        id: 'turborepo',
        title: 'Turborepo',
        description: 'Open source contributions to the high-performance build system.',
        tech: ['Go', 'Rust', 'Open Source'],
        category: 'Core/DSA',
        status: 'Contribution',
        featured: false,
        github: 'https://github.com/vercel/turborepo', // Upstream repo
        demo: null,
    },
    {
        id: 'algo-vault',
        title: 'Algo-Vault',
        description: 'Comprehensive collection of Data Structures and Algorithms.',
        tech: ['JavaScript', 'C++', 'Java'],
        category: 'Core/DSA',
        status: 'Archive',
        featured: false,
        github: 'https://github.com/shubhanshu2103/Algo-Vault',
        demo: null,
    },
];

export const experience = [
    {
        year: '2026',
        title: 'Nexus-AI: Lead Engineer',
        description: 'Architected autonomous multi-agent systems using CrewAI. Optimized inference for Llama-3.3-70B on Groq LPU.',
    },
    {
        year: '2025',
        title: 'SIH National Waitlist',
        description: 'Led team to build Offline AI Tutor for rural education. Engineered edge-computing protocols for 4GB RAM devices.',
    },
    {
        year: '2024',
        title: 'Open Source Contributor',
        description: 'Contributed to node-mysql2 and other core libraries. Hacktoberfest participant.',
    },
];

export const education = [
    {
        period: '2024 - 2028',
        institution: 'Newton School Of Technology (ADYPU), Pune',
        degree: 'Bachelor of Engineering (AI & ML)',
        grade: '8.5/10.0',
    },
    {
        period: '2023 - 2027',
        institution: 'Indian Institute of Technology Madras',
        degree: 'Bachelor of Applied Science (Data Science)',
        grade: '8.91/10.0',
    },
    {
        period: '2022 - 2023',
        institution: 'Ma Durga Ji Vidyalaya, Jaunpur',
        degree: 'Intermediate (Class XII)',
        grade: '90.0%',
    },
];

export const certifications = [
    {
        title: 'AI Agent Intensive Course',
        issuer: 'Google',
        date: 'Nov 2025',
        description: '5-Day AI Agents Intensive via United Latino Students Association.',
        link: '#',
    },
    {
        title: 'Badge of Excellence - Python',
        issuer: 'IIT Madras',
        date: 'Dec 2024',
        description: 'Topper with perfect score 100/100.',
        link: '#',
    },
    {
        title: 'Certificate of Appreciation',
        issuer: 'IIT Madras',
        date: 'July 2024',
        description: 'Leadership as Regional Coordinator (Mumbai).',
        link: '#',
    },
];

export const professionalSummary = "Forward-thinking AI & Full-Stack Engineer with a specialized focus on Agentic Orchestration and Edge LLM Optimization. Proven track record in architecting autonomous multi-agent systems and deploying high-accuracy RAG pipelines for hardware-constrained environments. Recognized as a National-level leader (SIH 2025) and top-tier Python programmer, dedicated to bridging the gap between cutting-edge AI research and production-ready applications.";

export const contactInfo = {
    email: 'shubhanshu.dubey@adypu.edu.in',
    phone: '+91 6390458930',
    linkedin: 'https://linkedin.com/in/shubhanshu-dubey', // Placeholder, update if user provides URL
    github: 'https://github.com/shubhanshu2103',
};
