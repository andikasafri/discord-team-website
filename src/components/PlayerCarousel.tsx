import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import { PlayerCard } from "./PlayerCard";
import { players } from "../data/players";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export const PlayerCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative w-full bg-black py-20">
      <div className="absolute inset-0 bg-[url('/img/about.webp')] bg-cover bg-center opacity-10" />
      <div className="relative z-10">
        <div className="text-center mb-16">
          <p className="font-general text-sm uppercase text-blue-50/60 mb-4">
            Meet Our Players
          </p>
          <h2 className="special-font text-5xl text-blue-50 uppercase">
            The <b>T</b>eam
          </h2>
        </div>
        
        <div className="w-full max-w-7xl mx-auto px-4">
          <Swiper
            modules={[Navigation, Pagination, EffectFade]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            effect="fade"
            speed={800}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            className="player-carousel !overflow-visible"
          >
            {players.map((player, index) => (
              <SwiperSlide key={player.name}>
                <PlayerCard player={player} isActive={index === activeIndex} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};