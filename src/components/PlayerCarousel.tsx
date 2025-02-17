import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { PlayerCard } from "./PlayerCard";
import { players } from "../data/players";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const PlayerCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="player-carousel"
      >
        {players.map((player, index) => (
          <SwiperSlide key={player.name}>
            <PlayerCard player={player} isActive={index === activeIndex} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
