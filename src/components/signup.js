import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


import { signupUser } from './api';

function Signup() {
const navigate=useNavigate()
  const [formdata,setformdata]=useState({name:'',age:'',aadharnumber:'',password:''})
  const handlechange = e =>{
    setformdata({...formdata,[e.target.name]:e.target.value})
  }
const handlesubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await signupUser(formdata);
    console.log('✅ Success:', response.data);
    localStorage.setItem('token', response.data.token || 'test');
    toast.success("Signup Successfull")
    
    navigate('/');
  } catch (err) {
    console.log(err);
    toast.error('Signup failed');
  }
};

  return (
    <>
      <section style={{ backgroundColor: "lightgreen" }}>
        <div className="container py-5" style={{ height: "auto", minHeight: "80vh" }}>
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-lg-10 col-xl-9">
              <div
                className="card text-black"
                style={{ borderRadius: 20, maxWidth: 900, margin: "auto" }}
              >
                <div className="card-body p-4">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h2 fw-bold mb-4">New User Registration</p>
                      <form className="mx-1 mx-md-2" onSubmit={handlesubmit}>

                        {/* Name */}
                        <div className="d-flex flex-row align-items-center mb-3">
                          <i className="fas fa-user fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input type="text" id="name" className="form-control" name='name' onChange={handlechange} />
                            <label className="form-label" htmlFor="name">Your Name</label>
                          </div>
                        </div>

                       
                        <div className="d-flex flex-row align-items-center mb-3">
                          <i className="fas fa-calendar-alt fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input type="number" id="age" className="form-control" name='age' onChange={handlechange}/>
                            <label className="form-label" htmlFor="age">Your Age</label>
                          </div>
                        </div>

                        
                        <div className="d-flex flex-row align-items-center mb-3">
                          <i className="fas fa-id-card fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input type="text" id="aadhar" className="form-control" maxLength="12" name='aadharnumber' onChange={handlechange}/>
                            <label className="form-label" htmlFor="aadhar">Aadhar Number(Username)</label>
                          </div>
                        </div>

                    
                        <div className="d-flex flex-row align-items-center mb-3">
                          <i className="fas fa-lock fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input type="password" id="password" className="form-control" name='password' onChange={handlechange}/>
                            <label className="form-label" htmlFor="password">Password</label>
                          </div>
                        </div>

                        {/* Checkbox */}
                        <div className="form-check d-flex justify-content-center mb-4">
                          <input className="form-check-input me-2" type="checkbox" id="terms" />
                          <label className="form-check-label" htmlFor="terms">
                            I agree to the <a href="#!">Terms of Service</a>
                          </label>
                        </div>

                        {/* Submit */}
                        <div className="d-flex justify-content-center mb-3">
                          <button type="submit" className="btn btn-primary btn-md">
                            Register
                          </button>
                        </div>

                        <div className="col-12">
                          <p className="m-0 text-secondary text-center">
                            Already have an account? <a href="/login">Login</a>
                          </p>
                        </div>
                      </form>
                    </div>

                    {/* Image Side */}
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://imgs.search.brave.com/xauzx2yG6Q0hcCyOCzCHsmSWYHN1ibyuSe7zUuTYwKA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQy/MTAyMzIzNS92ZWN0/b3Ivb25saW5lLXZv/dGUuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPVl0a0RjS0Rp/dFM4ZUpTaXl1Smst/Uk43VS1objVRVDY3/RjJBVXpIemhjbDQ9"
                        alt="signup"
                        style={{ maxHeight: 400, objectFit: "contain", width: "100%" }}
                      />
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

export default Signup;