import "./rightbar.scss";
import { userInfo, lastestActivity, onlineFriends } from "../../constants";

export default function Rightbar() {
  return (
    <nav className="rightbar">
      <div className="container">
        <div className="item">
          <span>Sugesstions For You</span>

          {userInfo.map((user, key) => (
            <div className="user" key={key}>
              <div className="userInfo">
                <img src={user.profile} alt="" />
                <span>{user.name}</span>
              </div>
              <div className="buttons">
                <button>follow</button>
                <button>dismiss</button>
              </div>
            </div>
          ))}
        </div>

        <div className="item">
          <span>Latest Activities</span>

          {lastestActivity.map((item, key) => (
            <div className="activity" key={key}>
              <div className="userInfo">
                <img src={item.name.profile} alt="" />
                <span className="userName">{item.name.name}</span>
                <span>{item.activity}</span>
              </div>
              <span className="date">{item.date}</span>
            </div>
          ))}
        </div>

        <div className="item">
          <span>Online Friends</span>
          {onlineFriends.map((user, key) => (
            <div className="userOnline" key={key}>
              <img src={user.profile} alt="" />
              <div className="online" />
              <span>{user.user}</span>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
