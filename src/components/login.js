import React from "react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "./api";
import { toast } from 'react-toastify';


function Login() {
  const navigate = useNavigate();
  const [formdatalogin, setformdatalogin] = useState({
    aadharnumber: "",
    password: "",
  });
  const [error, seterror] = useState("");

  const handlechange = (e) => {
    setformdatalogin({ ...formdatalogin, [e.target.name]: e.target.value });
    seterror("");
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    const cleanedData = {
      aadharnumber: formdatalogin.aadharnumber?.trim().toLowerCase(),
      password: formdatalogin.password?.trim(),
    };
    try {
     

      const response = await loginUser(cleanedData);
      localStorage.setItem("token", response.data.token);

      toast.success("Login successful!");
      navigate("/");
    } catch (err) {
      if (err.response && err.response.data.message) {
        seterror(err.response.data.message); //show erro from backend
      } else if (err.message) {
        seterror("invalid username or password"); 
        toast.warn("invalid username or password")
      } else {
        seterror("An unexpected error occurred"); 
        
      }
    }
  };
  return (
    <>
      <section style={{ backgroundColor: "#9A616D", padding: "40px 0" }}>
        <div className="container" style={{ minHeight: "70vh" }}>
          <div className="row d-flex justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-6">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="row g-0">
                  {/* Left Image */}
                  <div className="col-md-5 d-none d-md-block">
                    <img
                      src="https://imgs.search.brave.com/1oN_gxn8F8NtsJmPKrpUxIk9lEtPY9fOkSNF9jItAPg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM3/Nzc0NDE3MS92ZWN0/b3Ivdm90aW5nLW9u/bGluZS1lLXZvdGlu/Zy1lbGVjdGlvbi1p/bnRlcm5ldC1zeXN0/ZW0tZmxhdC1kZXNp/Z24tdmVjdG9yLWls/bHVzdHJhdGlvbi5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/Z2txZVFtbGRSMlZ1/QU1najh6UHQ4MXp0/OUYzbWdLYTFlejNl/RXh0QldQUT0"
                      alt="login form"
                      className="img-fluid"
                      style={{
                        borderRadius: "1rem 0 0 1rem",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>

                  {/* Login Form */}
                  <div className="col-md-7 d-flex align-items-center">
                    <div className="card-body px-4 py-3 text-black">
                      <form onSubmit={handlesubmit}>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i
                            className="fas fa-cubes fa-2x me-3"
                            style={{ color: "#ff6219" }}
                          />
                          <span className="h2 fw-bold mb-0">VoteBharat</span>
                        </div>

                        <h5
                          className="fw-normal mb-3"
                          style={{ letterSpacing: 1 }}
                        >
                          Sign into your account
                        </h5>

                        {/* Aadhar Number (Username) */}
                        <div className="form-outline mb-3">
                          <input
                            type="text"
                            id="aadharNumber"
                            className="form-control"
                            maxLength="12"
                            placeholder="Enter 12-digit Aadhar"
                            name="aadharnumber"
                            onChange={handlechange}
                          />
                          <label className="form-label" htmlFor="aadharNumber">
                            Aadhar Number(username)
                          </label>
                        </div>

                        {/* Password */}
                        <div className="form-outline mb-3">
                          <input
                            type="password"
                            id="password"
                            className="form-control"
                            name="password"
                            onChange={handlechange}
                          />
                          <label className="form-label" htmlFor="password">
                            Password
                          </label>
                        </div>
                        {error && <p style={{ color: "red" }}>{error}</p>}
                        <div className="mb-3">
                          <button
                            className="btn btn-dark btn-block w-100"
                            type="submit"
                          >
                            Login
                          </button>
                        </div>

                        {/* <a className="small text-muted" href="#!">
                          Forgot password?
                        </a> */}
                        <p className="mb-2" style={{ color: "#393f81" }}>
                          Don't have an account?{" "}
                          <a href="/signup" style={{ color: "#393f81" }}>
                            Register here
                          </a>
                        </p>
                        <a href="#!" className="small text-muted me-2">
                          Terms of use
                        </a>
                        <a href="#!" className="small text-muted">
                          Privacy policy
                        </a>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
