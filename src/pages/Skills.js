import HTML from "../assets/html.svg";
import JS from "../assets/js.svg";
import Webflow from "../assets/webflow.svg";
import CSS from "../assets/css.svg";
import ReactIcon from "../assets/react.svg";
import Node from "../assets/node.svg";
import PostgreSQL from "../assets/postgresql.svg";
import Firebase from "../assets/firebase.svg";
import Figma from "../assets/figma.svg";
import Illustrator from "../assets/illustrator.svg";
import Photoshop from "../assets/photoshop.svg";
import PremierePro from "../assets/premierePro.svg";
import Express from "../assets/express.svg";
// import { useLocation } from "react-router-dom";

const skills = [
  {
    title: "Frontend",
    items: [
      {
        icon: <img src={HTML} alt="HTML" />,
        name: "HTML",
        description: "Content Structure",
      },
      {
        icon: <img src={CSS} alt="CSS" />,
        name: "CSS",
        description: "Styling",
      },
      {
        icon: <img src={JS} alt="JavaScript" />,
        name: "JavaScript",
        description: "Scripting Language",
      },
      {
        icon: <img src={ReactIcon} alt="React" />,
        name: "React",
        description: "Frontend Framework",
      },
      {
        icon: <img src={Webflow} alt="Webflow" />,
        name: "Webflow",
        description: "No-code Website Builder",
      },
    ],
  },
  {
    title: "Backend",
    items: [
      {
        icon: <img src={Node} alt="Node.js" />,
        name: "Node.js",
        description: "Backend Runtime",
      },
      {
        icon: <img src={Express} alt="Express.js" />,
        name: "Express.js",
        description: "Backend Framework",
      },
      {
        icon: <img src={PostgreSQL} alt="PostgreSQL" />,
        name: "PostgreSQL",
        description: "Relational Database",
      },
      {
        icon: <img src={Firebase} alt="Firebase" />,
        name: "Firebase",
        description: "BaaS Platform",
      },
    ],
  },
  {
    title: "Design Tools",
    items: [
      {
        icon: <img src={Figma} alt="Figma" />,
        name: "Figma",
        description: "UI/UX Design Platform",
      },
      {
        icon: <img src={Photoshop} alt="Adobe Photoshop" />,
        name: "Adobe Photoshop",
        description: "Photo Editor",
      },
      {
        icon: <img src={Illustrator} alt="Adobe Illustrator" />,
        name: "Adobe Illustrator",
        description: "Vector Editor",
      },
      {
        icon: <img src={PremierePro} alt="Adobe Premiere Pro" />,
        name: "Adobe Premiere Pro",
        description: "Video Editor",
      },
    ],
  },
];

export default function SkillPage() {
  // const location = useLocation();
  // const { profile } = location.state || {};

  return (
    <div className="container">
      <div className="heading-container">
        <h1 className="secondary-font netflix-underline">My Skills</h1>
      </div>
      {skills.map((skill, index) => (
        <div key={index} className="skill-section">
          <h2 className="skill-title">{skill.title}</h2>
          <div className="cards-grid">
            {skill.items.map((item, i) => (
              <div key={i} className="card">
                <div className="icon">{item.icon}</div>
                <h3 className="card-name">{item.name}</h3>
                <p className="card-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
