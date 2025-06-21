import React from "react";

import { useNavigate } from "react-router-dom";

function Signupnavbar() {
 
    const navigate=useNavigate()
  const handleloginbtn=()=>{
    navigate("/login")
  }

  return (
    <>
   
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "orange" }}>
      <div className="container-fluid">
        {/* Brand Logo */}
        <a className="navbar-brand" href="/" style={{ fontSize: "27px", fontWeight: "normal" }}>
          <img
            src="https://imgs.search.brave.com/-jeynoTTfVoMcHcfFlTm441hrv851GVWY6l6gOfY89Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ0/NzU4MzU2MC92ZWN0/b3IvaW5kaWFuLWZs/YWctY29sb3Itd2l0/aC1maW5nZXItd2l0/aC12b3RlLWNvbmNl/cHQuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPXNZYWRvTjlf/TFNSWFBOUFRDZlcw/NFJWejJZcEpyQmFD/WlV2WHUtRGI4OWM9"
            height="39"
            alt="Logo"
            loading="lazy"
          />
          VoteBharat
        </a>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links  */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link active" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/">
                Terms&Conditions
              </a>
            </li>
          </ul>

          {/* Login Button */}
          <button
            type="button"
            className="btn btn-primary btn-lg"
            style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
          onClick={handleloginbtn}>
            Login
          </button>
        </div>
      </div>
    </nav>


    </>

  );
}

export default Signupnavbar;
