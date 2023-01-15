import "./profile.scss";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/authContext";

import Posts from "../../components/posts/Posts";

/*****ICONS *****/
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LanguageIcon from "@mui/icons-material/Language";
import { PostAdd } from "@mui/icons-material";

export default function Profile() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="profile">
      <img
        src="https://images.unsplash.com/photo-1517345438041-cf88a04b4689?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt=""
      />
      <div className="info">
        <div className="social">
          <FacebookIcon className="icon" />
          <LinkedInIcon className="icon" />
          <GitHubIcon className="icon" />
          <InstagramIcon className="icon" />
          <TwitterIcon className="icon" />
        </div>
        <div className="message">
          <MailOutlineIcon />
          <MoreHorizIcon />
        </div>
        <div className="user">
          <img src={currentUser.profile} alt="" />
          <span>{currentUser.name}</span>
          <div className="location">
            <span>
              <LocationOnIcon />
              Toronto, Canada
            </span>
            <span>
              <LanguageIcon />
              nicolas-pham.online/
            </span>
          </div>
          <button>Follow</button>
        </div>
      </div>
      <Posts className="posts" />
    </div>
  );
}
