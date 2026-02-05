import { useEffect, useRef } from 'react';

const chars = '!<>-_\\/[]{}—=+*^?#________';

export const useTextScramble = (text) => {
    const elementRef = useRef(null);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        let frame = 0;
        const queue = [];
        const resolveDelay = 5; // Frames to wait before resolving a character

        // Initialize queue
        for (let i = 0; i < text.length; i++) {
            const from = element.innerText[i] || '';
            const to = text[i];
            const start = Math.floor(Math.random() * 40);
            const end = start + Math.floor(Math.random() * 40);
            queue.push({ from, to, start, end });
        }

        let frameId;

        const update = () => {
            let output = '';
            let complete = 0;

            for (let i = 0; i < queue.length; i++) {
                let { from, to, start, end, char } = queue[i];

                if (frame >= end) {
                    complete++;
                    output += to;
                } else if (frame >= start) {
                    if (!char || Math.random() < 0.28) {
                        char = chars[Math.floor(Math.random() * chars.length)];
                        queue[i].char = char;
                    }
                    output += `<span class="text-neonGreen">${char}</span>`;
                } else {
                    output += from;
                }
            }

            element.innerHTML = output;

            if (complete === queue.length) {
                cancelAnimationFrame(frameId);
            } else {
                frame++;
                frameId = requestAnimationFrame(update);
            }
        };

        update();

        return () => cancelAnimationFrame(frameId);
    }, [text]);

    return elementRef;
};
