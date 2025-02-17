import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Users, Trophy, Target, Heart } from "lucide-react";
import Navbar from "../components/Navbar";
import AnimatedTitle from "../components/AnimatedTitle";
import { Background } from "../components/Background";
import { DiscordTimeline } from "../components/vault/DiscordTimeline";
import { CommunityStats } from "../components/vault/CommunityStats";
import { MissionVision } from "../components/vault/MissionVision";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

const Vault = () => {
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
            Welcome to Our
          </p>
          <AnimatedTitle
            title="The Qui<b>n</b>cy V<b>a</b>ult"
            containerClass="mb-8 !text-blue-50"
          />
          <p className="max-w-2xl mx-auto text-blue-50/80 font-circular-web fade-in">
            Discover our journey, values, and the vibrant community that makes Quincy
            more than just a gaming group.
          </p>
        </section>

        {/* Quick Stats */}
        <CommunityStats />

        {/* Timeline Section */}
        <DiscordTimeline />

        {/* Mission & Vision */}
        <MissionVision />
      </div>

      <Footer />
    </main>
  );
};

export default Vault;