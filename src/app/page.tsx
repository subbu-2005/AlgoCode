"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const titleRef = useRef(null);
  const gradientRef = useRef(null);

  useEffect(() => {
    // Glitch effect for text
    gsap.fromTo(
      titleRef.current,
      { textShadow: "0px 0px 10px rgba(0, 255, 255, 0.8)" },
      {
        textShadow: "0px 0px 30px rgba(0, 255, 255, 1)",
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      }
    );

    // Background gradient animation
    gsap.to(gradientRef.current, {
      backgroundPosition: "200% center",
      duration: 8,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  return (
    <main
      ref={gradientRef}
      className="relative flex min-h-screen flex-col items-center justify-center text-white bg-gradient-to-r from-blue-900 via-purple-800 to-black bg-[length:300%_300%] overflow-hidden"
    >
      {/* SVG Animated Background */}
      <svg
        className="absolute top-0 left-0 w-full h-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 600"
      >
        <g stroke="#0ff" strokeWidth="2" fill="none">
          <circle cx="400" cy="300" r="280" opacity="0.3" />
          <circle cx="400" cy="300" r="250" opacity="0.5" />
          <circle cx="400" cy="300" r="220" opacity="0.7" />
          <circle cx="400" cy="300" r="190" opacity="1" />
          <path d="M100 200 Q300 50 500 200 T800 200" stroke="#00ffcc" fill="none" strokeWidth="3"/>
        </g>
      </svg>

      {/* Cyberpunk Title */}
      <h1
        ref={titleRef}
        className="text-6xl font-extrabold mb-6 text-center tracking-wide drop-shadow-lg neon-text"
      >
        Welcome to Tech Fest 🚀
      </h1>

      {/* Animated Cyberpunk Button */}
      <motion.button
        className="relative px-10 py-4 text-lg font-bold text-black bg-cyan-400 rounded-lg shadow-lg transition-all hover:bg-cyan-500 neon-glow"
        whileHover={{ scale: 1.2, rotate: 2 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => router.push("/core")}
      >
        Enter
        <span className="absolute inset-0 bg-cyan-300 blur-md opacity-50"></span>
      </motion.button>

      {/* Cyberpunk Style Glow Effect */}
      <style jsx>{`
        .neon-text {
          text-shadow: 0 0 5px #0ff, 0 0 10px #0ff, 0 0 15px #0ff, 0 0 20px #00ffff;
        }

        .neon-glow {
          position: relative;
          overflow: hidden;
          box-shadow: 0 0 15px rgba(0, 255, 255, 0.5);
        }

        .neon-glow:hover {
          box-shadow: 0 0 25px rgba(0, 255, 255, 1);
        }
      `}</style>
    </main>
  );
}
