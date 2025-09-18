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
              I was a former banker here in the Philippines with 15 years of
              experience in customer service and management. Now, I’m starting a
              brand-new journey as a full-stack developer. I may still be
              considered a junior, but I have the passion and drive to hone my
              skills in creating websites that truly capture the audience’s
              attention. For me, it’s never too late to chase your dreams and
              this career shift is proof of that.
            </p>
            <p>
              I’m excited to help you design and build a website that truly
              stands out. 🤗
            </p>
            <br />
            <p>All the best,</p>
            <p>♥ Jo Ann Francisco ♥</p>
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
