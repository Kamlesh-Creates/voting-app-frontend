import React, { useState, useRef, useEffect } from "react";
import userimg from "./assets/userimg.png";
import { useNavigate } from "react-router-dom";
import { fetchtokenverify } from "./api";

function Navbar() {

  
  const navigate=useNavigate()
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const logout=()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate('/login')
  }

  const isverify=async()=>{
    await fetchtokenverify()
    console.log("token vrified")

    
    
  }
  isverify()

  return (
    <>
    <nav className="navbar navbar-expand-lg  " style={{ backgroundColor: 'orange' }} >
      <div className="container-fluid " >
        {/*  Logo */}
        <a className="navbar-brand" href="/" style={{fontSize:"27px",fontWeight:"normal"}}>
          <img
            src="https://imgs.search.brave.com/-jeynoTTfVoMcHcfFlTm441hrv851GVWY6l6gOfY89Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ0/NzU4MzU2MC92ZWN0/b3IvaW5kaWFuLWZs/YWctY29sb3Itd2l0/aC1maW5nZXItd2l0/aC12b3RlLWNvbmNl/cHQuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPXNZYWRvTjlf/TFNSWFBOUFRDZlcw/NFJWejJZcEpyQmFD/WlV2WHUtRGI4OWM9"
            height="39"
            alt="Logo"
            loading="lazy"
          />
          VoteBharat
        </a>

        {/* for mobile */}
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

        {/* Navbar links and avatar */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link active" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/candidates">
                Candidates
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/about">
                About
              </a>
            </li>
          </ul>

          {/* Avatar dropdown */}
          <div
            className="nav-item dropdown position-relative"
            ref={dropdownRef}
            style={{ zIndex: 999 }}
          >
            <button
              className="btn nav-link dropdown-toggle d-flex align-items-center"
              type="button"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              aria-expanded={dropdownOpen}
              style={{ padding:"8px",borderRadius:"9px" ,backgroundColor:"white"}}
            ><span style={ {textTransform: 'none' }}>Profile</span>
              <img
                src={userimg}
                alt="User"
                className="rounded-circle"
                height="32"
                loading="lazy"
              />
            </button>
            <ul
              className={`dropdown-menu dropdown-menu-end${
                dropdownOpen ? " show" : ""
              }`}
              style={{ marginTop: "0.5rem", right: 0, left: "auto" }}
            >
              <li>
                <a className="dropdown-item" href="/profile">
                  My profile
                </a>
              </li>
               <li>
                <a className="dropdown-item" href="/adminpanel">
                  Admin Panal
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/settings">
                  Settings
                </a>
              </li>
              <li onClick={logout}>
                <a className="dropdown-item" href="/login" >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    </>

  );
}

export default Navbar;
