import React, { useEffect, useState } from "react";
import { fetchelectiondata } from "./api";

const UpcomingElection = () => {
 
  const [electionlist, setelectionlist] = useState([]);

  useEffect(() => {
    loadelectionlist();
  }, []);

  const loadelectionlist = async () => {
    try {
      const res = await fetchelectiondata();
      setelectionlist(res.data);
    } catch (error) {
      console.log("failed to load election list", error);
    }
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Upcoming Elections</h2>
      <p className="text-center text-muted mb-5">
        Stay informed about upcoming elections and prepare to make your voice
        heard!
      </p>

      <div className="row">
        {electionlist.map((election, index) => (
          <div key={election.id || index} className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h4 className="card-title">{election.name}</h4>
                  <p className="card-text">{election.description}</p>

                  <p className="card-text text-muted">
                   <strong> Start Date:{" "}
                    {new Date(election.startDate).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}</strong>
                  </p>

                  <p className="card-text text-muted">
                    <strong>
                    End Date:{" "}
                    {new Date(election.endDate).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}</strong>
                  </p>
                </div>
                <button className="btn btn-outline-primary mt-auto" disabled>
                  {election.isActive ? "Active" : "Inactive"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingElection;
