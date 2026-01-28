import React from "react";
import TrustedBySection from "./components/section";
import Features from "./components/features/Features";
import "./App.css";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black">
      <TrustedBySection />
      <Features />
    </div>
  );
}
