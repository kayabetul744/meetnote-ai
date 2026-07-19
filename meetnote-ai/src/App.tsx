import React from "react";
import { Navbar } from "./components/sections/Navbar";
import { Hero } from "./components/sections/Hero";
import { Visual } from "./components/sections/Visual";
import { About } from "./components/sections/About";
import { Manifesto } from "./components/sections/Manifesto";
import { Features } from "./components/sections/Features";
import { HowItWorks } from "./components/sections/HowItWorks";
import { Difference } from "./components/sections/Difference";
import { UseCases } from "./components/sections/UseCases";
import { Benefits } from "./components/sections/Benefits";
import { Team } from "./components/sections/Team";
import { LiveDemo } from "./components/sections/LiveDemo";
import { Footer } from "./components/sections/Footer";

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main>
        <Hero />
        <Visual />
        <About />
        <Manifesto />
        <Features />
        <HowItWorks />
        <Difference />
        <UseCases />
        <Benefits />
        <Team />
        <LiveDemo />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return <Home />;
}
