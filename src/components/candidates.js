import React, { useState, useEffect } from "react";
import { fetchCandidates } from "./api";

const Candidates = () => {
  const [candidatelist, setcandidatelist] = useState([]);

  useEffect(() => {
    loadcandidate();
  }, []);

  const loadcandidate = async () => {
    try {
      const response = await fetchCandidates();
      setcandidatelist(response.data);
    } catch (error) {
      console.error("Failed to load candidates:", error);
    }
  };

  return (
    <div className="container py-4">
      <div className="table-responsive">
        <table
          className="table table-hover table-bordered text-center align-middle w-100"
          style={{ tableLayout: "fixed" }}
        >
          <thead className="table-dark">
            <tr>
              <th scope="col" className="col-id">
                #
              </th>
              <th scope="col" className="col-photo">
                Photo
              </th>
              <th scope="col" className="col-name">
                Candidate
              </th>
              <th scope="col" className="col-party">
                Party
              </th>
              <th scope="col" className="col-symbol">
                Symbol
              </th>
              <th scope="col" className="col-votes">
                Votes
              </th>
            </tr>
          </thead>

          <tbody>
            {candidatelist.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center">
                  No candidates found
                </td>
              </tr>
            ) : (
              candidatelist.map((candidate, index) => (
                <tr key={candidate._id || index}>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      src={
                        candidate.photoURL || "https://via.placeholder.com/60"
                      }
                      className="img-thumbnail mx-auto d-block"
                      style={{
                        width: "170px",
                        height: "140px",
                        objectFit: "cover",
                      }}
                      alt="candidate"
                    />
                  </td>
                  <td
                    className="candidate-font"
                    style={{ wordBreak: "break-word" }}
                  >
                    {candidate.name}
                  </td>
                  <td className="candidate-font"style={{  wordBreak: "break-word" }}>
                    {candidate.party}
                  </td>
                  <td>
                    <img
                      src={
                        typeof candidate.symbolURL === "string" &&
                        candidate.symbolURL.trim() !== ""
                          ? candidate.symbolURL.trim()
                          : "https://via.placeholder.com/40"
                      }
                      className="img-thumbnail mx-auto d-block"
                      style={{
                        width: "150px",
                        height: "110px",
                        objectFit: "contain",
                      }}
                      alt="Symbol"
                    />
                  </td>
                  <td className="candidate-font">{candidate.votecount}</td>
                </tr>
              ))
            )}
          </tbody >
        </table>
      </div>

      <style>{`
        html, body {
          overflow-x: hidden;
        }
          .col-id { width: 5%; }
.col-photo { width: 20%; }
.col-name { width: 25%; }
.col-party { width: 15%; }
.col-symbol { width: 15%; }
.col-votes { width: 10%; }


.candidate-font{
            font-size:20px
            }

        @media (max-width: 575.98px) {
          .table th,
          .table td {
            padding: 0.3rem;
            font-size: 14px;
            text-align: center;
            vertical-align: middle;
          }

          .table img.img-thumbnail {
            width: 65px !important;
            height: 55px !important;
            object-fit: contain;
          }
            

          td, th {
            word-break: break-word;
          }

          h3 {
            font-size: 18px;
          }

           .col-id { width: 8%; }
  .col-photo { width: 20%; }
  .col-name { width: 22%; }
  .col-party { width: 18%; }
  .col-symbol { width: 15%; }
  .col-votes { width: 12%; }
        }
      `}</style>
    </div>
  );
};

export default Candidates;
