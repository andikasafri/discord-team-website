import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../components/Navbar";
import AnimatedTitle from "../components/AnimatedTitle";
import { Background } from "../components/Background";
import { TeamBento } from "../components/prologue/TeamBento";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

const Prologue = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fade-in", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "center center",
          toggleActions: "play none none reverse",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden bg-slate-950">
      <Background />
      <Navbar />
      
      <div ref={containerRef} className="relative z-10 pt-32">
        {/* Hero Section */}
        <section className="container mx-auto px-4 text-center mb-20">
          <p className="font-general text-sm uppercase text-blue-50/60 mb-4 fade-in">
            Our Story
          </p>
          <AnimatedTitle
            title="The Qui<b>n</b>cy Pr<b>o</b>logue"
            containerClass="mb-8 !text-blue-50"
          />
          <p className="max-w-2xl mx-auto text-blue-50/80 font-circular-web fade-in">
            From humble beginnings to a thriving gaming community, our journey is defined
            by passion, dedication, and the pursuit of excellence in competitive gaming.
          </p>
        </section>

        {/* Team Bento Grid */}
        <TeamBento />

        {/* Contact Section */}
        <Contact />
      </div>

      <Footer />
    </main>
  );
};

export default Prologue;