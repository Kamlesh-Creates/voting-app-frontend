import React, { useState, useEffect, useRef } from "react";
import {
  fetchCandidates,
  fetchelection,
  fetchVoteStatusByElection,
  voteForCandidate,
} from "./api";
import { toast } from "react-toastify";

function Castvote() {
  const [votelist, setvotelist] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasVotedInCurrentElection, setHasVotedInCurrentElection] = useState(false);
  const [currentElectionId, setCurrentElectionId] = useState(null);
  const [currentElection, setCurrentElection] = useState(null);

  // useRef to track if toast was shown
  const toastShownRef = useRef(false);

  useEffect(() => {
    fetchCurrentElection();
    loadcandidate();
  }, []);

  const fetchCurrentElection = async () => {
    try {
      const res = await fetchelection();
      setCurrentElection(res.data);
      setCurrentElectionId(res.data._id);

      const voteStatusRes = await fetchVoteStatusByElection(res.data._id);
      setHasVotedInCurrentElection(voteStatusRes.data.hasVoted);
    } catch (error) {
      if (error.response?.status === 404) {
        toast.info("No active election is currently available.");
        setCurrentElectionId(null);
      } else {
        console.error("Failed to fetch current election:", error);
        toast.error("Failed to load current election info.");
      }
    }
  };

  
  useEffect(() => {
    if (currentElection && !toastShownRef.current) {
      toast.success("Election Activated You Can Vote!");
      toastShownRef.current = true;
    }
  }, [currentElection]);

  // Load candidate list
  const loadcandidate = async () => {
    try {
      const response = await fetchCandidates();
      setvotelist(response.data);
    } catch (error) {
      console.error("Failed to load candidates:", error);
    }
  };

  // Handle voting action
  const handlevote = async (candidateId) => {
    if (!currentElectionId) {
      toast.error("No active election found. Please try again later.");
      return;
    }

    setLoading(true);
    try {
      const response = await voteForCandidate(candidateId, currentElectionId);
      if (response.status === 200 || response.status === 201) {
        toast.success("Vote Added Successfully!");
        const voteStatusRes = await fetchVoteStatusByElection(currentElectionId);
        setHasVotedInCurrentElection(voteStatusRes.data.hasVoted);
      }
    } catch (error) {
      console.error("Error voting:", error);
      if (error.response?.status === 403) {
        toast.warn("You have already voted!");
      } else if (error.response?.data?.message) {
        toast.error(`Error: ${error.response.data.message}`);
      } else {
        toast.error("Vote failed due to a network or server error.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container py-4">
        <h3 className="text-center mb-4">🗳️ Cast Your Vote</h3>
        <div className="table-responsive">
          <table className="table table-hover table-bordered border-dark text-center align-middle">
            <thead className="table-dark">
              <tr>
                <th style={{ fontSize: "21px" }}>#</th>
                <th style={{ fontSize: "21px" }}>Photo</th>
                <th style={{ fontSize: "21px" }}>Candidate</th>
                <th style={{ fontSize: "21px" }}>Party</th>
                <th className="d-none d-sm-table-cell">Symbol</th>
                <th style={{ fontSize: "21px" }}>Vote</th>
              </tr>
            </thead>
            <tbody>
              {votelist.length === 0 ? (
                <tr>
                  <td colSpan="6">No candidates found</td>
                </tr>
              ) : (
                votelist.map((candidate, index) => {
                  const key = candidate._id || index;
                  return (
                    <tr key={key}>
                      <td style={{ fontSize: "20px" }}>{index + 1}</td>
                      <td>
                        <img
                          src={candidate.photoURL || "https://via.placeholder.com/60"}
                          alt="candidate"
                          className="img-thumbnail mx-auto d-block"
                          style={{ width: "150px", height: "140px", objectFit: "cover" }}
                        />
                      </td>
                      <td style={{ fontSize: "18px" }}>{candidate.name}</td>
                      <td style={{ fontSize: "18px" }}>{candidate.party}</td>
                      <td className="d-none d-sm-table-cell">
                        <img
                          src={
                            candidate.symbolURL?.trim()
                              ? candidate.symbolURL.trim()
                              : "https://via.placeholder.com/40"
                          }
                          alt="Party Symbol"
                          className="img-thumbnail mx-auto d-block"
                          style={{ width: "120px" }}
                        />
                      </td>
                      <td>
                        <button
                          className="btn btn-success"
                          onClick={() => handlevote(candidate._id)}
                          disabled={!currentElection || hasVotedInCurrentElection || loading}
                        >
                          {!currentElection
                            ? "Election Not Active"
                            : hasVotedInCurrentElection
                            ? "You Already Voted"
                            : loading
                            ? "Voting..."
                            : "Vote"}
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      <style>{`
        .btn {
          font-size: 14px;
          padding: 10px 22px;
        }
        @media (max-width: 575.98px) {
          .table td,
          .table th {
            padding: 0.5rem;
            font-size: 14px;
            text-align: center;
            vertical-align: middle;
            white-space: normal;
          }

          .table img.img-thumbnail {
            width: 75px !important;
            height: 75px !important;
            object-fit: contain;
          }

          .table-bordered > :not(caption) > * > * {
            border-width: 1px;
          }

          .btn {
            font-size: 14px;
            padding: 6px 12px;
          }

          h3 {
            font-size: 18px;
          }
        }
      `}</style>
    </>
  );
}

export default Castvote;
