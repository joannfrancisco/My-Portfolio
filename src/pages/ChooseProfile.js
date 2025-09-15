import { useNavigate } from "react-router-dom";
import recruiter from "../assets/prof-recruiter.png";
import stalker from "../assets/prof-stalker.png";

export default function ChooseProfile() {
  const navigate = useNavigate();

  const handleClick = (profile) => {
    // navigate to /profile and pass profile info
    navigate("/home", { state: { profile } });
  };

  return (
    <div className="intro-container">
      <h1 className="secondary-font">Who's Watching?</h1>

      <div className="profiles">
        {/* Recruiter */}
        <div onClick={() => handleClick("Recruiter")}>
          <img src={recruiter} alt="Golden Retriever wearing sunglasses" />
          <p>Recruiter</p>
        </div>

        {/* Stalker */}
        <div onClick={() => handleClick("Stalker")}>
          <img src={stalker} alt="cute puppy" />
          <p>Stalker</p>
        </div>
      </div>
    </div>
  );
}
