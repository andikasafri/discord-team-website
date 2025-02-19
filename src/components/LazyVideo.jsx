import { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";

const LazyVideo = ({
  src,
  poster,
  className,
  width,
  height,
  autoPlay,
  controls,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "200px",
        threshold: 0.01,
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div ref={videoRef} className={className}>
      {isVisible && (
        <video
          src={src}
          poster={poster}
          width={width}
          height={height}
          autoPlay={autoPlay}
          controls={controls}
          muted
          playsInline
          onCanPlay={() => setIsLoaded(true)}
          className={`transition-opacity duration-300 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
      {!isLoaded && (
        <div className="animate-pulse bg-gray-200" style={{ width, height }} />
      )}
    </div>
  );
};

LazyVideo.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string,
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  autoPlay: PropTypes.bool,
  controls: PropTypes.bool,
};

LazyVideo.defaultProps = {
  poster: "",
  className: "",
  autoPlay: false,
  controls: true,
};

export default LazyVideo;
