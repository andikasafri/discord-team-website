import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedTitle from "../AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const timelineEvents = [
  {
    date: "January 2023",
    title: "Community Launch",
    description: "Quincy Discord server was created with the first 10 members.",
  },
  {
    date: "March 2023",
    title: "First Tournament",
    description: "Hosted our first Valorant tournament with 16 teams participating.",
  },
  {
    date: "June 2023",
    title: "Community Milestone",
    description: "Reached 250 active members and expanded to multiple game divisions.",
  },
  {
    date: "September 2023",
    title: "Partnership Program",
    description: "Started collaborating with other gaming communities and content creators.",
  },
  {
    date: "December 2023",
    title: "Year-End Event",
    description: "Celebrated our first year with a massive online gaming festival.",
  },
];

export const DiscordTimeline = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".timeline-item", {
        x: -100,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
      });
    }, timelineRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-black/40 backdrop-blur-sm py-32 mb-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="font-general text-sm uppercase text-blue-50/60 mb-4">
            Our Journey
          </p>
          <AnimatedTitle
            title="Disc<b>o</b>rd Hist<b>o</b>ry"
            containerClass="!text-blue-50"
          />
        </div>

        <div ref={timelineRef} className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-violet-300/20" />

          {timelineEvents.map((event, index) => (
            <div
              key={index}
              className={`timeline-item relative flex items-center gap-8 mb-16 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div className="w-1/2 flex flex-col items-end">
                <div
                  className={`bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 ${
                    index % 2 === 0 ? "text-right" : "text-left"
                  }`}
                >
                  <div className="text-violet-300 font-general text-sm uppercase mb-2">
                    {event.date}
                  </div>
                  <h3 className="special-font text-xl text-blue-50 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-blue-50/60 font-circular-web">
                    {event.description}
                  </p>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-violet-300 rounded-full" />
              <div className="w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};