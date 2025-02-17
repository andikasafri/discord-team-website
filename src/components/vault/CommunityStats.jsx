import { useRef, useEffect } from "react";
import gsap from "gsap";
import { Users, Trophy, MessageSquare, Gamepad2 } from "lucide-react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { icon: <Users />, value: "500+", label: "Members" },
  { icon: <Trophy />, value: "50+", label: "Tournaments" },
  { icon: <MessageSquare />, value: "10K+", label: "Messages" },
  { icon: <Gamepad2 />, value: "1000+", label: "Game Sessions" },
];

export const CommunityStats = () => {
  const statsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stat-item", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top center+=100",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
      });
    }, statsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={statsRef} className="container mx-auto px-4 mb-32">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="stat-item bg-white/5 backdrop-blur-sm rounded-lg p-6 text-center border border-white/10 hover:border-violet-300/50 transition-colors duration-300"
          >
            <div className="text-violet-300 flex justify-center mb-4">
              {stat.icon}
            </div>
            <div className="special-font text-3xl text-blue-50 mb-2">
              {stat.value}
            </div>
            <div className="text-blue-50/60 font-general text-sm uppercase">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};