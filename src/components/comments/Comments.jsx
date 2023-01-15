import "./comments.scss";
import { useContext } from "react";
import { comments } from "../../constants";
import { AuthContext } from "../../context/authContext";

export default function Comments() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profile} alt="" />
        <input type="text" placeholder="write a comment" />
        <button>Send</button>
      </div>

      {comments.map((comment) => (
        <div className="comment">
          <div className="user">
            <img src={comment.profilePic} alt="" />
            <div className="info">
              <span>{comment.name}</span>
              <span>{comment.desc}</span>
            </div>
          </div>
          <span>{comment.date}</span>
        </div>
      ))}
    </div>
  );
}
