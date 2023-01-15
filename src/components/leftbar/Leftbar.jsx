import "./leftbar.scss";
import pic from "../../assets";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import ProfileIcon from "../profileIcon/ProfileIcon";

export default function Leftbar() {
  const { currentUser } = useContext(AuthContext);

  return (
    <nav className="leftbar">
      <div className="container">
        <div className="menu">
          <ProfileIcon />
          <div className="item">
            <img src={pic.pic1} alt="" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={pic.pic2} alt="" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={pic.pic3} alt="" />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img src={pic.pic4} alt="" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={pic.pic5} alt="" />
            <span>Memories</span>
          </div>
        </div>
        <hr />

        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
            <img src={pic.pic6} alt="" />
            <span>Events</span>
          </div>
          <div className="item">
            <img src={pic.pic7} alt="" />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src={pic.pic8} alt="" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={pic.pic9} alt="" />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={pic.pic10} alt="" />
            <span>Messages</span>
          </div>
        </div>
        <hr />

        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img src={pic.pic11} alt="" />
            <span>Fundraiser</span>
          </div>
          <div className="item">
            <img src={pic.pic12} alt="" />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src={pic.pic13} alt="" />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
