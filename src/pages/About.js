import profileImg from "../assets/profPic.png";

export default function About() {
  return (
    <div className="container">
      <div className="about-card">
        <div className="about-content">
          <div className="about-text">
            <h2 className="secondary-font">About Me</h2>
            <p>Hello again! Thanks for coming this far! 🤗</p>
            <p>
              I’m Jo Ann Francisco. After many years of working as a banker in
              the Philippines, I’ve started a brand-new journey as a full-stack
              developer. I may still be considered a junior, but I’m passionate
              about learning and dedicated to creating websites that truly
              connect with people. For me, it’s never too late to chase your
              dreams, and this career shift is proof of that.
            </p>
            <p>
              I’m excited to help you design and build a website that truly
              stands out.
            </p>
            <br />
            <p>All the best,</p>
            <p>Jo Ann ♥</p>
          </div>
          <div className="about-image">
            <img src={profileImg} alt="About" />
            <div className="image-overlay"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
