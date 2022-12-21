import "./setting.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import { profile } from "../../assets";

export default function Setting() {
  return (
    <div className="setting">
      <div className="settingWrapper">
        <div className="settingTitle">
          <span className="settingUpdateTitle">Update your account</span>
          <span className="settingDeleteTitle">Delete account</span>
        </div>

        <form action="" className="settingForm">
          <label htmlFor="">Profile picture</label>
          <div className="settingPP">
            <img src={profile} alt="" />
            <label htmlFor="fileInput">
              <i className="settingPPIcon fa-regular fa-circle-user"></i>
            </label>
            <input
              type="file"
              name=""
              id="fileInput"
              style={{ display: "none" }}
            />
          </div>

          <label htmlFor="username">Username</label>
          <input type="text" id="username" placeholder="NicolasPham" />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="nickpham@gmail.com" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
          <button className="settingSubmit">Save</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
