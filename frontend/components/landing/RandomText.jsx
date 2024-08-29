// components/landing/RandomText.jsx
"use client"
// components/landing/RandomText.jsx
import React, { useEffect, useRef } from 'react';

const RandomText = () => {
    // Fixed set of words
    const words = ["Thriller", "Romance", "Comedy", "Horror", "Action", "Drama", "Rom-com"];
    const totalTexts = 70; // Total number of text elements
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            // Clear previous text elements to avoid duplications on re-renders
            container.innerHTML = '';

            for (let i = 0; i < totalTexts; i++) {
                const text = words[Math.floor(Math.random() * words.length)];
                const span = document.createElement('span');
                span.className = 'randomText';
                span.innerText = text;

                // Generate random positions within the container
                const x = Math.random() * (container.clientWidth - 100); // Adjust 100 based on font size
                const y = Math.random() * (container.clientHeight - 20); // Adjust 20 based on font size

                span.style.left = `${x}px`;
                span.style.top = `${y}px`;

                container.appendChild(span);
            }
        }
    }, []);

    return <div ref={containerRef} className="randomTextContainer"></div>;
};

export default RandomText;
