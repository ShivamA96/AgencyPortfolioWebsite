// Removed the commented import as it's unnecessary with the new JSX transform
import { useEffect, useRef } from "react"; // Removed useState as it's not used
import * as THREE from "three";
import VANTA_HALO from "vanta/dist/vanta.halo.min.js";

export function Hero() {
  const vantaRef = useRef(null); // Create a ref for the vanta effect
  const containerRef = useRef(null); // Create a ref for the container

  useEffect(() => {
    let vantaEffect; // Declare vantaEffect outside the if block to ensure it's in the cleanup function's scope
    if (vantaRef.current) {
      vantaEffect = VANTA_HALO({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: true,
        minHeight: 200.0,
        minWidth: 200.0,
        amplitudeFactor: 0.0,
        size: 1,
        backgroundColor: 0x0,
        baseColor: 0x0,
        xOffset: 0.2,
        // Additional options...
      });
    }

    // Cleanup function to destroy the vanta effect
    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, [vantaRef.current]); // Correct dependency array

  return (
    <div
      className="max-w-full h-screen inset-0 " // Removed extra space in className
      ref={containerRef} // Use the container ref here
    >
      <div
        className="p-0 m-0 w-full h-full  " // Semi-transparent background simulating blur
        ref={vantaRef}
      ></div>
      {/* Overlay content */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start space-y-4 lg:px-20 md:px-10 px-10">
        <h1 className="text-left sm:text-5xl md:text-7xl font-bold mb-4 text-white">
          Elevate Your Digital Presence
        </h1>
        <p className="secondary-title text-left md:text-3xl mb-8 text-white z-10">
          with Cutting-Edge Websites and AI Chatbots
        </p>
        <p className="tertiary-title text-left md:text-xl text-white z-10">
          <span style={{ color: "#e63946" }}>Fast</span>,
          <span style={{ color: "#f4a261" }}> Agile</span>, and
          <span style={{ color: "#2a9d8f" }}> Customized</span> Solutions for
          Your Business
        </p>
        <a
          href="#contact"
          className="text-blue-600 font-bold py-3 px-8 rounded-full text-lg bg-blue-100 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 z-10"
        >
          Get Started
        </a>
      </div>
    </div>
  );
}

export default Hero;
