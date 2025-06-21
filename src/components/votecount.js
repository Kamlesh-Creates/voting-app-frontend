import React, { useEffect, useState } from 'react'
import { fetchCandidates } from './api'

function Votecount() {
const [candidatevote,setcandidatevote]=useState([])
  useEffect(()=>{
loadcandidate()
  },[])
 const loadcandidate=async()=>{
  try {
    const response=await fetchCandidates()
    setcandidatevote(response.data)
  } catch (error) {
    console.log(error)
  }
 }
  return (
    <>
    <div className="container py-4">
      <h3 className="text-center mb-4">🗳️ Vote Count</h3>
      <div className="row">
        {candidatevote.length === 0 ? (
          <div className="text-center">No candidates found.</div>
        ) : (
          candidatevote.map((candidate, index) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={candidate._id || index}>
              <div className="card h-100 shadow-sm">
                <img
                  src={candidate.photoURL || "https://via.placeholder.com/150"}
                  className="card-img-top"
                  alt="Candidate"
                  style={{ height: "270px", objectFit: "fill" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title" style={{fontSize:"27px"}}>{candidate.name}</h5>
                  <p className="card-text mb-1" style={{fontSize:"22px"}}>Party: {candidate.party}</p>
                  <p className="fw-bold text-primary" style={{fontSize:"20px"}}>
                    Votes: {candidate.votecount ?? 0}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>

    </>
  )
}

export default Votecount
