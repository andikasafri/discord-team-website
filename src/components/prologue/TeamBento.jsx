import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const teamImages = [
  { src: "/img/gallery-1.webp", size: "large", caption: "Team Victory - 2023 Championship" },
  { src: "/img/gallery-2.webp", size: "small", caption: "Practice Session" },
  { src: "/img/gallery-3.webp", size: "medium", caption: "Community Meet-up" },
  { src: "/img/gallery-4.webp", size: "small", caption: "Tournament Day" },
  { src: "/img/gallery-5.webp", size: "medium", caption: "Strategy Planning" },
  { src: "/img/about.webp", size: "large", caption: "Team Building" },
  { src: "/img/entrance.webp", size: "medium", caption: "Gaming Setup" },
  { src: "/img/contact-1.webp", size: "small", caption: "Discord Event" },
  { src: "/img/contact-2.webp", size: "medium", caption: "Competitive Match" },
  { src: "/img/stones.webp", size: "large", caption: "Team Celebration" },
  { src: "/img/swordman.webp", size: "small", caption: "Training Session" },
  { src: "/img/swordman-partial.webp", size: "medium", caption: "Community Growth" },
  { src: "/img/gallery-1.webp", size: "large", caption: "Team Spirit" },
  { src: "/img/gallery-2.webp", size: "medium", caption: "Gaming Excellence" },
  { src: "/img/gallery-3.webp", size: "small", caption: "Community Values" },
];

export const TeamBento = () => {
  const bentoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".bento-item", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: {
          amount: 1.5,
          grid: "auto",
        },
        scrollTrigger: {
          trigger: bentoRef.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
      });
    }, bentoRef);

    return () => ctx.revert();
  }, []);

  const getSizeClass = (size) => {
    switch (size) {
      case "large":
        return "md:col-span-2 md:row-span-2";
      case "medium":
        return "md:col-span-2 md:row-span-1";
      default:
        return "md:col-span-1 md:row-span-1";
    }
  };

  return (
    <section ref={bentoRef} className="container mx-auto px-4 mb-32">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
        {teamImages.map((image, index) => (
          <div
            key={index}
            className={`bento-item group relative overflow-hidden rounded-lg ${getSizeClass(
              image.size
            )}`}
          >
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10" />
            <img
              src={image.src}
              alt={image.caption}
              className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-20">
              <p className="font-general text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {image.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};