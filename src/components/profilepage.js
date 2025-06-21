import React, { useEffect, useState } from "react";
import { fetchUserProfile } from "./api";

function Profilepage() {
  const [profiledata, setprofiledata] = useState({
    name: "",
    age: "",
    aadharnumber: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    website: "",
  });
  const [loading, setloading] = useState(true);
  useEffect(() => {
    const loadprofile = async () => {
      try {
        const res = await fetchUserProfile();
        setprofiledata((prev) => ({
          ...prev,
          name: res.data.name,
          age: res.data.age,
          aadharnumber: res.data.aadharnumber,
        }));
      } catch (error) {
        console.log("failed to load profile", error);
      } finally {
        setloading(false);
      }
    };
    loadprofile();
  }, []);

  if (loading) return <p className="text-center mt-5">Loading profile...</p>;
  return (
    <div>
      <div className="container">
        <div className="row gutters">
          <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
            <div className="card h-100">
              <div className="card-body">
                <div className="account-settings">
                  <div className="user-profile">
                    <div className="user-avatar">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar7.png"
                        alt="Maxwell Admin"
                      />
                    </div>
                    <h5 className="user-name" style={{textAlign:"center"}}>{[profiledata.name]}</h5>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
            <div className="card h-100">
              <div className="card-body">
                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h6 className="mb-2 text-primary">Personal Details</h6>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="fullName">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="fullName"
                        placeholder="Enter full name"
                        value={profiledata.name}//fill ready
                        onChange={(e) =>
                          setprofiledata({
                            ...profiledata,
                            name: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="aadhar">Aadhar Number</label>
                      <input
                        type="text"
                        className="form-control"
                        id="aadhar"
                        placeholder="Enter Aadhar Number"
                        value={profiledata.aadharnumber || ""}
                        onChange={(e) =>
                          setprofiledata({
                            ...profiledata,
                            aadharnumber: e.target.value,
                          })
                        }
                        maxLength={12}
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="phone">Phone</label>
                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        placeholder="Enter phone number"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="age">Age</label>
                      <input
                        type="number"
                        className="form-control"
                        id="age"
                        placeholder="Enter your age"
                        value={profiledata.age || ""}
                        onChange={(e) =>
                          setprofiledata({
                            ...profiledata,
                            age: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h6 className="mt-3 mb-2 text-primary">Address</h6>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="Street">Street</label>
                      <input
                        type="name"
                        className="form-control"
                        id="Street"
                        placeholder="Enter Street"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="ciTy">City</label>
                      <input
                        type="name"
                        className="form-control"
                        id="ciTy"
                        placeholder="Enter City"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="sTate">State</label>
                      <input
                        type="text"
                        className="form-control"
                        id="sTate"
                        placeholder="Enter State"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="zIp">Zip Code</label>
                      <input
                        type="text"
                        className="form-control"
                        id="zIp"
                        placeholder="Zip Code"
                      />
                    </div>
                  </div>
                </div>
                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="text-right">
                      <button
                        type="button"
                        id="submit"
                        name="submit"
                        className="btn btn-secondary"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        id="submit"
                        name="submit"
                        className="btn btn-primary"
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profilepage;
