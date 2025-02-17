import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../components/Navbar";
import AnimatedTitle from "../components/AnimatedTitle";
import { Background } from "../components/Background";
import Footer from "../components/Footer";
import { Users, Target, Shield, Trophy } from "lucide-react";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
  {
    name: "Alex Chen",
    role: "Team Lead",
    image:
      "https://images.unsplash.com/photo-1560253023-3ec5d502959f?auto=format&fit=crop&q=80&w=800&h=1000",
    description: "Veteran player with 5+ years of competitive experience",
  },
  {
    name: "Maya Rahman",
    role: "Community Manager",
    image:
      "https://images.unsplash.com/photo-1542327897-d73f4005b533?auto=format&fit=crop&q=80&w=800&h=1000",
    description: "Building bridges in the gaming community since 2020",
  },
];

const values = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "Community First",
    description:
      "We prioritize creating an inclusive and welcoming environment for all gamers",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Skill Development",
    description:
      "Focused on helping players improve and reach their full potential",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Fair Play",
    description: "Promoting sportsmanship and ethical gaming practices",
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: "Competitive Spirit",
    description:
      "Striving for excellence while maintaining a healthy competitive environment",
  },
];

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Initialize GSAP context
    const ctx = gsap.context(() => {
      // Animate elements with "fade-in" class
      gsap.from(".fade-in", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "center center",
          scrub: true, // Use scrub for smoother animations
          toggleActions: "play none none reverse",
        },
      });

      // Refresh ScrollTrigger to handle page reloads
      ScrollTrigger.refresh();
    }, containerRef);

    return () => ctx.revert(); // Cleanup GSAP context on unmount
  }, []);

  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden bg-slate-950">
      <Background />
      <Navbar />

      <div ref={containerRef} className="relative z-10 pt-32 pb-32">
        {/* Hero Section */}
        <section className="container mx-auto px-4 text-center mb-20">
          <p className="font-general text-sm uppercase text-blue-50/60 mb-4 fade-in">
            Who We Are
          </p>
          <AnimatedTitle
            title="Ab<b>o</b>ut Qui<b>n</b>cy"
            containerClass="mb-8 !text-blue-50"
          />
          <p className="max-w-2xl mx-auto text-blue-50/80 font-circular-web fade-in">
            A passionate gaming community dedicated to fostering talent,
            building friendships, and creating unforgettable gaming experiences.
          </p>
        </section>

        {/* Values Section */}
        <section className="container mx-auto px-4 mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="fade-in group bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 hover:border-violet-300/50 transition-all duration-300"
              >
                <div className="text-violet-300 mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="special-font text-xl text-blue-50 mb-4">
                  {value.title}
                </h3>
                <p className="text-blue-50/60 font-circular-web">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="container mx-auto px-4 mb-32">
          <h2 className="special-font text-3xl text-blue-50 text-center mb-12">
            Meet Our Te<b>a</b>m
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="fade-in group bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:border-violet-300/50 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10" />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="special-font text-xl text-blue-50 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-violet-300 font-general text-sm uppercase mb-3">
                    {member.role}
                  </p>
                  <p className="text-blue-50/60 font-circular-web">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="relative z-20">
        <Footer />
      </div>
    </main>
  );
};

export default About;
