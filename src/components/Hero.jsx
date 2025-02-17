import { useEffect, useRef, useState } from "react";
import Button from "./Button"; // Ensure this path matches your file structure
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideo = 4;

  // Remove currentVideoRef if it's not used
  // const currentVideoRef = useRef(null);
  const nextVideoRef = useRef(null);

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  const handleMiniVdClick = () => {
    setHasClicked(true);
    setCurrentIndex((prev) => (prev % totalVideo) + 1);
  };

  useEffect(() => {
    if (loadedVideos === totalVideo - 1) {
      setLoading(false);
    }
  }, [loadedVideos]);

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set(`#next-video`, { visibility: "visible" });

        gsap.to(`#next-video`, {
          transformOrigin: `center center`,
          scale: 1,
          width: `100%`,
          height: `100%`,
          duration: 1,
          ease: `power1.inOut`,
          onStart: () => nextVideoRef.current.play(),
        });

        gsap.from(`#current-video`, {
          transformOrigin: `center center`,
          scale: 0,
          duration: 1.5,
          ease: `power1.inOut`,
        });
      }
    },
    { dependencies: [currentIndex], revertOnUpdate: true }
  );

  // Remove these functions if they're not used
  // const getVideoSrc = (index) => `videos/hero-${index}.mp4`;
  // const getNextVideoSrc = () => getVideoSrc((currentIndex % totalVideo) + 1);
  // const getCurrentVideoSrc = () => getVideoSrc(currentIndex);

  useEffect(() => {
    if (loadedVideos >= totalVideo) {
      setLoading(false);
    }
  }, [loadedVideos]);

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      {loading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
          <div className="three-body">
            <div className="three-body__dot" />
            <div className="three-body__dot" />
            <div className="three-body__dot" />
          </div>
        </div>
      )}

      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <div
              onClick={handleMiniVdClick}
              className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
            >
              <video
                ref={nextVideoRef}
                src={`videos/hero-${(currentIndex % totalVideo) + 1}.mp4`} // Use inline function
                loop
                muted
                id="current-video"
                className="size-64 origin-center scale-150 object-cover object-center"
                onLoadedData={handleVideoLoad}
              />
            </div>
          </div>

          <video
            ref={nextVideoRef}
            src={`videos/hero-${currentIndex}.mp4`} // Use inline function
            loop
            muted
            id="next-video"
            className="absolute-center invisible absolute z-20 size-64             object-cover object-center"
            onLoadedData={handleVideoLoad}
          />
          <video
            src={`videos/hero-${
              currentIndex === totalVideo - 1 ? 1 : currentIndex
            }.mp4`} // Use inline function
            loop
            muted
            className="absolute left-0 top-0 size-full object-cover object-center"
            onLoadedData={handleVideoLoad}
          />
        </div>

        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-100">
          G<b>A</b>MING
        </h1>

        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100">
              Qui<b>n</b>cy
            </h1>
            <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
              A Chill Gaming Community For <br />
              Valorant and More
            </p>

            <Button
              id="watch-trailer"
              title="Come Check-us"
              leftIcon={<TiLocationArrow />}
              containerClass="!bg-yellow-300 flex-center gap-1"
            />
          </div>
        </div>
      </div>
      <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black">
        G<b>A</b>MING
      </h1>
    </div>
  );
};

export default Hero;
