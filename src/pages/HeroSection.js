import { useLocation } from "react-router-dom";
import LiquidEther from "../components/LiquidEther";
import DotGrid from "../components/DotGrid";

export default function HeroSection() {
  const location = useLocation();
  const { profile } = location.state || {};

  const profileContent = {
    Recruiter: {
      background: (
        <LiquidEther
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={500}
          autoRampDuration={0.6}
        />
      ),
    },
    Stalker: {
      background: (
        <DotGrid
          dotSize={5}
          gap={15}
          baseColor="#271616"
          activeColor="#7a0505"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      ),
    },
    default: {
      background: (
        <DotGrid
          dotSize={5}
          gap={15}
          baseColor="#5227FF"
          activeColor="#5227FF"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      ),
    },
  };

  const { background } = profileContent[profile] || profileContent.default;

  return (
    <div className="hero-section">
      <div className="hero-text">
        <h1>
          I design and build <span>websites</span>.
        </h1>
        <h2>
          <b>Modern. Responsive. Creative.</b> <br className="break" />I deliver
          seamless digital experiences built with precision.
        </h2>
        <a
          href="#featured"
          className="animated-button"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("featured")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Learn More
        </a>
      </div>
      <div className="hero-background">{background}</div>
    </div>
  );
}
