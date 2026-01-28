import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroTitle from "./HeroTitle";
import "./Hero.css";

export default function Hero() {
  const { scrollYProgress } = useScroll();

  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 1.12]);
  const opacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  return (
    <section className="hero">
      <motion.video
        className="hero-video"
        src="/assets/v4.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={{ scale, opacity }}
      />
      <div className="hero-overlay" />

      <div className="hero-inner">
        <HeroTitle />
      </div>
    </section>
  );
}
