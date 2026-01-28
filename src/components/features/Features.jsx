import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import v2Video from "../../public/assets/v2.mp4";
import v3Video from "../../public/assets/v3.mp4";
import v4Video from "../../public/assets/v4.mp4";

const items = [
  {
    no: "01_",
    tag: "CHARGE",
    title: "ELECTRIC POWER IN, READY FOR LAUNCH.",
    desc:
      "OUR ENERGY STORAGE SYSTEMS ARE\nCHARGED FROM STANDARD ELECTRICAL\nINFRASTRUCTURE: WALL OUTLETS, GENERATORS,\nOR OTHER OFF-THE-SHELF POWER SOURCES.",
    video: v2Video,
  },
  {
    no: "02_",
    tag: "ACCELERATE",
    title: "MAGNETIC FIELDS DELIVER PRECISE,\nCONTACTLESS ACCELERATION.",
    desc:
      "PRECISELY-TIMED MAGNETIC FIELDS\nPUSH THE PAYLOAD ALONG THE TRACK\nTHROUGH CONTROLLED ACCELERATION.",
    video: v3Video,
  },
  {
    no: "03_",
    tag: "LAUNCH",
    title: "CLEAN, REPEATABLE, AND SCALABLE.",
    desc:
      "EVERY LAUNCHER IS VERY FULLY REUSABLE\nAND ADAPTABLE TO MULTIPLE MISSION TYPES\n— FROM HYPERSONIC TESTING, TO MOBILE\nDEFENSE LAUNCHERS, TO SPACE ACCESS.",
    video: v4Video,
  },
];

function FeatureRow({ it }) {
  const wrapRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start 0.95", "center 0.55"],
  });

  const yRaw = useTransform(scrollYProgress, [0, 1], [140, 0]);
  const oRaw = useTransform(scrollYProgress, [0, 0.35, 1], [0, 1, 1]);
  const blurNumRaw = useTransform(scrollYProgress, [0, 1], [10, 0]);

  // smooth
  const y = useSpring(yRaw, { stiffness: 120, damping: 26, mass: 0.7 });
  const opacity = useSpring(oRaw, { stiffness: 120, damping: 26, mass: 0.7 });
  const blurNum = useSpring(blurNumRaw, { stiffness: 120, damping: 26, mass: 0.7 });

  // ✅ filter string болгож useTransform-оор хөрвүүлнэ (to() хэрэггүй)
  const filter = useTransform(blurNum, (v) => `blur(${v}px)`);

  return (
    <div ref={wrapRef} className="relative h-[35vh] flex items-center">
      <motion.div className="w-full" style={{ y, opacity, filter }}>
        <div className="grid grid-cols-[320px_260px_1fr] gap-10 py-3">
          {/* corner marker */}
        

          {/* LEFT THUMB */}
          <div className="pl-6">
            <div className="relative h-[170px] w-[280px] overflow-hidden rounded-md bg-white/5 ring-1 ring-white/10">
              <video
                className="absolute inset-0 h-full w-full object-cover"
                src={it.video}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/35" />
            </div>
          </div>

          {/* MIDDLE LABEL */}
          <div className="flex items-start pt-2">
            <div className="flex items-baseline gap-6">
              <span className="font-mono text-[14px] tracking-[0.18em] text-white/70">
                {it.no}
              </span>
              <span className="font-mono text-[22px] tracking-[0.18em] text-cyan-300">
                {it.tag}
                <span className="ml-3 text-cyan-300/90">:</span>
              </span>
            </div>
          </div>

          {/* RIGHT TEXT */}
          <div className="pr-10">
            <h3 className="whitespace-pre-line font-sans text-[28px] font-extrabold uppercase leading-[1.12] tracking-[0.02em]">
              {it.title}
            </h3>
            <p className="mt-6 whitespace-pre-line font-mono text-[11px] uppercase tracking-[0.18em] leading-[1.55] text-white/70">
              {it.desc}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Features() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto w-[min(1400px,92vw)]">
        <div className="h-px w-full bg-white/10" />

        {items.map((it) => (
          <React.Fragment key={it.no}>
            <FeatureRow it={it} />
            <div className="h-px w-full bg-white/10" />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
