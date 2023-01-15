import "./navbar.scss";
import { useContext } from "react";

import { AuthContext } from "../../context/authContext";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";

import { Link } from "react-router-dom";
import ProfileIcon from "../profileIcon/ProfileIcon";

export default function Navbar(props) {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <span>OPS SOCIAL</span>
        </Link>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <HomeOutlinedIcon style={{ cursor: "pointer" }} />
        </Link>
        <div style={{ cursor: "pointer" }} onClick={props.changeMode}>
          {props.mode ? <DarkModeOutlinedIcon /> : <WbSunnyOutlinedIcon />}
        </div>

        <GridViewOutlinedIcon style={{ cursor: "pointer" }} />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <Link to={`/profile/${currentUser.name}`} className="link">
          <Person2OutlinedIcon style={{ cursor: "pointer" }} />
        </Link>
        <EmailOutlinedIcon style={{ cursor: "pointer" }} />
        <NotificationsNoneOutlinedIcon style={{ cursor: "pointer" }} />
        <ProfileIcon />
      </div>
    </div>
  );
}
