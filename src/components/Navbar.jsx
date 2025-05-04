import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
import { AuthContext } from "../Provider/AuthProvider";
const Navbar = () => {
  const { user, userLogout } = use(AuthContext);

  const handleLogout = () =>{
    userLogout()
      .then(() => {
        alert("Logout successful")
      }).catch((error) => {
        console.log(error)
      });
  }

  return (
    <div className="flex justify-between items-center">
      <div className="">{user && user?.email}</div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex items-center gap-5">
        <img className="w-10 h-10 rounded-full" src={`${user?.photoURL ? user.photoURL : userIcon}`} alt="" />
        {user ? (
          <button onClick={handleLogout} className="btn btn-primary px-10 ">logout</button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-10 ">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
