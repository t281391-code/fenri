import React, { useState } from "react";
import airForce from "../img/68fa31cd5a77ee6cf10d08f5_logo_02.png";
import researchLab from "../img/68fa31cd77bcf1699155a88a_logo_04.png";
import spaceForce from "../img/68fa31cdf883b5f28b37a403_logo_06.png";
import defense from "../img/69304d1a9b603b9e95c90a37_Air_Force_Research_Laboratory-effectapp.png";

export default function TrustedBySection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const logos = [
    { src: airForce, alt: "U.S. Air Force" },
    { src: researchLab, alt: "Research Lab" },
    { src: spaceForce, alt: "U.S. Space Force" },
    { src: defense, alt: "Defense Program" },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-black text-white pb-28">

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(closest-side_at_50%_40%,rgba(235, 217, 217, 0.06),rgba(0,0,0,0)_55%)]" />

      <div className="relative mx-auto max-w-[1600px] px-8 py-24">
        <div className="text-center">
          <p className="font-mono text-[15px] tracking-[0.22em] text-white/90">
            TRUSTED BY LEADING SPACE AND DEFENSE PROGRAMS
          </p>
        </div>

        <div className="mt-20 grid grid-cols-4 items-center gap-12">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className={`h-[90px] w-auto grayscale transition-all duration-300 ease-out ${
                  hoveredIndex === i
                    ? "opacity-100 scale-110 grayscale-0"
                    : "opacity-35"
                }`}
                draggable="false"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute -bottom-4 left-0 right-0 border-t border-white/10 bg-white/5 backdrop-blur">
        <div className="mx-auto max-w-[1600px] px-10 py-10">
          <div className="flex h-[64px] items-center justify-between font-mono text-[15px] tracking-[0.12em]">

            <div className="flex min-w-0 flex-1 items-center gap-6">
              <span className="shrink-0 text-cyan-400">LATEST NEWS</span>

              <span className="shrink-0 rounded bg-white/10 px-3 py-3 text-[13px] text-white/70">
                4/29/2025
              </span>

              <div className="overflow-hidden whitespace-nowrap flex-1">
                <div className="flex w-max animate-marquee hover:pause gap-6 pr-12">

                  <div className="flex items-center gap-6">
                    <span className="text-white/90">
                      Just another Space Podcast (Ep 6): Electrifying Launch with Auriga Space CEO
                    </span>
                    <span className="text-cyan-400/90">: [ READ MORE ]</span>
                  </div>

                  <div className="flex items-center gap-6">
                    <span className="text-white/90">
                      Just another Space Podcast (Ep 6): Electrifying Launch with Auriga Space CEO
                    </span>
                    <span className="text-cyan-400/90">: [ READ MORE ]</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="ml-10 flex items-center gap-8 whitespace-nowrap">
              <span className="shrink-0 rounded bg-white/10 px-3 py-3 text-[13px] text-white/70">
                3/27
              </span>
              <span className="text-cyan-400">: SEE ALL NEWS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

