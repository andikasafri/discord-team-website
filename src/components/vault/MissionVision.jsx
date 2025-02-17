import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedTitle from "../AnimatedTitle";
import { Target, Heart, Users, Trophy } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "Community First",
    description: "Building a welcoming and inclusive gaming environment for all players.",
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: "Competitive Spirit",
    description: "Fostering healthy competition and skill development.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Passion for Gaming",
    description: "Sharing our love for games and creating lasting friendships.",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Continuous Growth",
    description: "Always learning, improving, and expanding our horizons.",
  },
];

export const MissionVision = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".value-card", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center+=100",
          end: "center center",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="container mx-auto px-4 mb-32">
      <div className="text-center mb-16">
        <p className="font-general text-sm uppercase text-blue-50/60 mb-4">
          Our Purpose
        </p>
        <AnimatedTitle
          title="Miss<b>i</b>on & Visi<b>o</b>n"
          containerClass="mb-8 !text-blue-50"
        />
        <p className="max-w-2xl mx-auto text-blue-50/80 font-circular-web">
          We strive to create the most engaging and supportive gaming community,
          where players can grow, compete, and connect.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map((value, index) => (
          <div
            key={index}
            className="value-card group bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 hover:border-violet-300/50 transition-all duration-300"
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
  );
};