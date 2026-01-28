import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./Hero.css";

export default function HeroTitle() {
  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0, 0.3], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.94]);

  return (
    <motion.h1 className="hero-title" style={{ y, opacity, scale }}>
      AURIGA
    </motion.h1>
  );
}
