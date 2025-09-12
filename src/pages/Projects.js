import LinkTooltip from "../components/LinkTooltip";
import moviedux from "../assets/moviedux.mp4";
import wouldyourather from "../assets/wouldyourather.mp4";
import tidytouch from "../assets/tidytouch.mp4";

const project = [
  {
    title: "Moviedux",
    description:
      "Moviedux is a movie discovery and watchlist web app built with React and the TMDb API. You can browse popular movies, filter by genre and rating, search the TMDb database, and create your own personal watchlist.",
    tags: ["React", "Node.js", "CSS", "API"],
    videoSrc: moviedux,
    liveLink: "https://joannfrancisco.github.io/moviedux/",
  },
  {
    title: "Would You Rather?",
    description:
      "Would You Rather? is an interactive web app built with React and Firebase where users can create fun polls, vote on options, and view real-time results. You can log in using Google or choose to join anonymously, making it easy for anyone to participate.",
    tags: ["React", "Node.js", "CSS", "Firebase"],
    videoSrc: wouldyourather,
    liveLink: "https://joannfrancisco.github.io/would-you-rather/",
  },
  {
    title: "Cleaning Service Website",
    description:
      "Tidy Touch is a professional cleaning service website built with Webflow. It showcases services, pricing, and customer information in a clean and modern layout. The site also includes a fully integrated CMS-powered blog, making it easy to share cleaning tips, updates, and helpful articles with visitors.",
    tags: ["Webflow"],
    videoSrc: tidytouch,
    liveLink: "https://tidy-touch.webflow.io/",
  },
];

export default function Projects() {
  return (
    <div className="container">
      <div className="heading-container">
        <h1 className="secondary-font netflix-underline">Projects</h1>
      </div>

      <div className="cards-grid-proj">
        <LinkTooltip />
        {project.map((feat, index) => (
          <a
            href={feat.liveLink}
            className="featured-video-card"
            key={index}
            target="_blank"
            rel="noopener noreferrer"
          >
            <video
              src={feat.videoSrc}
              muted
              playsInline
              className="video-preview show-link-tooltip"
              onMouseEnter={(e) => e.target.play()}
              onMouseLeave={(e) => {
                e.target.pause();
                e.target.currentTime = 0; // reset to first frame
              }}
            />
            <div className="featured-text-section">
              <h3 className="f-card-name">{feat.title}</h3>
              <p className="f-card-desc">{feat.description}</p>

              <div className="tag-buttons">
                {feat.tags.map((tag, idx) => (
                  <span className="tag" key={idx}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
        <LinkTooltip />
      </div>
    </div>
  );
}
