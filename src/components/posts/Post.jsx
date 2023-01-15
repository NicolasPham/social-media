import "./post.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import { comments } from "../../constants";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Post(props) {
  const [like, setLike] = useState(false);
  const [showComment, setShowComment] = useState(false);

  const likePost = () => {
    setLike(!like);
    return like;
  };

  const handleShowComment = () => {
    setShowComment(!showComment);
    return showComment;
  };

  return (
    <div className="post">
      <div className="userInfo">
        <div className="left">
          <img src={props.post.profilePic} alt="" />
          <div>
            <Link to={`/profile/${props.post.userId}`} className="link">
              <span>{props.post.name}</span>
            </Link>
            <span>{props.post.date}</span>
          </div>
        </div>

        <span className="right">...</span>
      </div>
      <div className="content">
        <span>{props.post.desc}</span>
        <img src={props.post.img} alt="" />
      </div>
      <div className="interaction">
        <div className="item" onClick={likePost}>
          {like ? (
            <FavoriteIcon className="icon" style={{ color: "red" }} />
          ) : (
            <FavoriteBorderIcon className="icon" />
          )}

          <span>Likes</span>
        </div>
        <div className="item" onClick={handleShowComment}>
          <TextsmsOutlinedIcon className="icon" />
          <span>{comments.length} Comments</span>
        </div>
        <div className="item">
          <ShareOutlinedIcon className="icon" />
          <span>Share</span>
        </div>
      </div>
      {showComment && <Comments />}
    </div>
  );
}
