import "./profileIcon.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { Link, Navigate } from "react-router-dom";

export default function ProfileIcon() {
  const { currentUser } = useContext(AuthContext);
  return (
    <Link
      to="/profile/:id"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="profileIcon">
        <img src={currentUser.profile} alt="" />
        <span>{currentUser.name}</span>
      </div>
    </Link>
  );
}
