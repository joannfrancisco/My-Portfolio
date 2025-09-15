import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import recruiterVideo from "../assets/video-recruiter.mp4";
import stalkerVideo from "../assets/video-stalker.mp4";
import defaultVideo from "../assets/video-recruiter.mp4"; // fallback
import linkedin from "../assets/linkedin.svg";

export default function HeroSection() {
  const location = useLocation();
  const { profile } = location.state || {};
  const videoRef = useRef(null);

  // 🔹 Define content for each profile
  const profileContent = {
    Recruiter: {
      heading: "HI, I'M JOANN.",
      title: "Full-Stack Web Developer.",
      subtitle:
        "I build modern, responsive websites that combine precision with creativity to deliver seamless digital experiences.",
      video: recruiterVideo,
    },
    Stalker: {
      heading: "HI, I'M JOANN.",
      title: "Full-Stack Web Developer.",
      subtitle:
        "I build modern, responsive websites that combine precision with creativity to deliver seamless digital experiences.",
      video: stalkerVideo,
    },
    default: {
      heading: "HI, I'M JOANN.",
      title: "Full-Stack Web Developer.",
      subtitle:
        "I build modern, responsive websites that combine precision with creativity to deliver seamless digital experiences.",
      video: defaultVideo,
    },
  };

  // Pick the right profile (fallback → default)
  const { heading, title, subtitle, video } =
    profileContent[profile] || profileContent.default;

  // 🔹 Restart video when profile/video changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load(); // reload new src
      videoRef.current.play().catch(() => {}); // prevent autoplay errors
    }
  }, [video]);

  return (
    <div className="hero-section">
      <div className="hero-text">
        <h2>{heading}</h2>
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        <a
          href="https://www.linkedin.com/in/joannfrancisco"
          target="_blank"
          rel="noopener noreferrer"
          className="animated-button"
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <img src={linkedin} alt="LinkedIn Logo" />
          LinkedIn
        </a>
      </div>
      <div className="hero-video">
        <video ref={videoRef} autoPlay loop muted playsInline>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
