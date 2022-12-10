import React, { useState, useEffect } from "react";
import "../style/Nav.css";

const Nav = () => {
const [show, handleShow] = useState(false)

const transitionNavBar = () => {
    if (window.scrollY > 100){
        handleShow(true)
    }else{
        handleShow(false)
    }
}

useEffect(() => {
  window.addEventListener('scroll',transitionNavBar
  )
  return () => window.removeEventListener('scroll',transitionNavBar)
}, [])

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          className="nav__logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWHN-7zukaSBPUbd1vevrjQ2haHP6fLp_-OtjMmCko&s"
          alt="netflix-logo"
        />
        <img
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="profile-logo"
        />
      </div>
    </div>
  );
};

export default Nav;
