import "./stories.scss";
import { stories } from "../../constants/";
import { useContext } from "react";

import { AuthContext } from "../../context/authContext";

export default function Stories() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.profile} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>

      {stories.map((story, key) => (
        <div className="story" key={key}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
}
