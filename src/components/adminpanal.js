import React, { useEffect, useState } from "react";
import {
  createCandidate,
  createelectiondata,
  deletecandidate,
  deleteelection,
  fetchCandidates,
  fetchelectiondata,
  updateelection,
} from "./api";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { toast } from "react-toastify";

function Adminpanal() {
  const [candidatedata, setcandidatedata] = useState({
    name: "",
    party: "",

    constituency: "",
    photoURL: "",
    symbolURL: "",
  });

  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    loadcandidate();
  }, []);
  const loadcandidate = async () => {
    try {
      const response = await fetchCandidates();
      setCandidates(response.data);
    } catch (error) {
      console.error("Failed to load candidates:", error);
    }
  };

  const handlechange = (e) => {
    const { name, value } = e.target;
    setcandidatedata((prev) => ({ ...prev, [name]: value }));
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      await createCandidate(candidatedata);
      toast.success("candidate added successfully!");
      setcandidatedata({
        name: "",
        party: "",

        constituency: "",
        photoURL: "",
        symbolURL: "",
      });
      loadcandidate();
    } catch (error) {
      toast.error("Error adding candidate.");
      console.error(error);
    }
  };

  const handledelete = async (id) => {
    try {
      await deletecandidate(id);

      toast.success("candidate deleted successfully!");
      loadcandidate();
    } catch (error) {
      console.log(error);
    }
  };

  //download result part
  const [candidatelistdata, setcandidatelistdata] = useState({
    name: "",
    party: "",
    votecount: "",
  });

  useEffect(() => {
    loadcandidatedata();
  }, []);
  const loadcandidatedata = async () => {
    try {
      const response = await fetchCandidates();
      setcandidatelistdata(response.data);
    } catch (error) {
      console.error("Failed to load candidates:", error);
    }
  };
  //for downloading the election result
  const handleExportPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Voting Results", 14, 22);

    const tableColumn = ["#", "Name", "Party", "Votes"];
    const tableRows = [];

    candidatelistdata.forEach((candidate, index) => {
      tableRows.push([
        index + 1,
        candidate.name,
        candidate.party,
        candidate.votecount ?? "N/A",
      ]);
    });

    // Use autoTable and pass doc as the first parameter
    autoTable(doc, {
      startY: 30,
      head: [tableColumn],
      body: tableRows,
    });

    doc.save("voting-results.pdf");
  };

  const [electiondata, setelectiondata] = useState({
    name: "",
    description: "",
    startDate: "",
    endDate: "",
    isActive: false,
  });
  const handleelectionchange = (e) => {
    const { name, value } = e.target;

    // Convert "true"/"false" string to boolean if field is isActive
    const parsedValue = name === "isActive" ? value === "true" : value;

    setelectiondata((prev) => ({ ...prev, [name]: parsedValue }));
  };

  const handleelectionsubmit = async (e) => {
    e.preventDefault();
    try {
      await createelectiondata(electiondata);
      toast.success("Election Added Successfully!");
      setelectiondata({
        name: "",
        description: "",
        startDate: "",
        endDate: "",
        isActive: false,
      });
    } catch (error) {
      toast.error("Error adding election");
      console.error(error);
    }
  };

  const [manageelectionlist, setmanageelectionlist] = useState([]);

  useEffect(() => {
    loadlistelection();
  }, []);

  const loadlistelection = async () => {
    try {
      const response = await fetchelectiondata();
      setmanageelectionlist(response.data);
    } catch (error) {
      console.error("Failed to load candidates:", error);
    }
  };

  const handleelectiondelete = async (id) => {
    try {
      await deleteelection(id);

      toast.success("election deleted successfully!");
      loadlistelection();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditElection = (election) => {
    setSelectedElection({ ...election });
    setShowEditModal(true);
  };

  const [selectedElection, setSelectedElection] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleUpdateElection = async (e) => {
    e.preventDefault();

    try {
      const response = await updateelection(
        selectedElection._id,
        selectedElection
      ); // 👈 Pass ID + data

      toast.success("Election updated successfully!");
      setShowEditModal(false);
      setSelectedElection(null);
      loadlistelection(); // Refresh list
    } catch (error) {
      toast.error("Failed to update election");
      console.error(error);
    }
  };

  return (
    <>
      <div className="container py-4">
        <h2 className="mb-4">Admin Panel - Manage Candidates</h2>
        {/* Add Candidate Form */}
        <div className="card mb-5">
          <div className="card-header bg-primary text-white">
            Add New Candidate
          </div>
          <div className="card-body">
            <form onSubmit={handlesubmit}>
              <div className="form-row">
                <div className="form-group col-md-4">
                  <label>Candidate Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter name"
                    value={candidatedata.name}
                    onChange={handlechange}
                    name="name"
                    required
                  />
                </div>
                <div className="form-group col-md-4">
                  <label>Party Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter party"
                    value={candidatedata.party}
                    onChange={handlechange}
                    name="party"
                    required
                  />
                </div>
                <div className="form-group col-md-4">
                  <label>Constituency</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter constituency"
                    name="constituency"
                    value={candidatedata.constituency}
                    onChange={handlechange}
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Photo URL</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter photo URL"
                    name="photoURL"
                    value={candidatedata.photoURL}
                    onChange={handlechange}
                    required
                  />
                </div>
                <div className="form-group col-md-6">
                  <label>Symbol URL</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter symbol URL"
                    name="symbolURL"
                    value={candidatedata.symbolURL}
                    onChange={handlechange}
                    required
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-success">
                Add Candidate
              </button>
            </form>
          </div>
        </div>

        {/* election set form */}
        <div className="card mb-5">
          <div className="card-header bg-dark text-white">Add New Election</div>
          <div className="card-body">
            <form onSubmit={handleelectionsubmit}>
              <div className="form-row">
                <div className="form-group col-md-4">
                  <label>Election Title</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter name"
                    value={electiondata.name}
                    onChange={handleelectionchange}
                    name="name"
                    required
                  />
                </div>
                <div className="form-group col-md-8">
                  <label>Election Description</label>
                  <textarea
                    className="form-control"
                    placeholder="Enter description"
                    value={electiondata.description}
                    onChange={handleelectionchange}
                    name="description"
                    rows="4"
                  />
                </div>
                <div className="form-group col-md-4">
                  <label>Start Date</label>
                  <input
                    type="datetime-local"
                    className="form-control"
                    value={electiondata.startDate}
                    onChange={handleelectionchange}
                    name="startDate"
                    required
                  />
                </div>

                <div className="form-group col-md-4">
                  <label>End Date</label>
                  <input
                    type="datetime-local"
                    className="form-control"
                    placeholder="Enter constituency"
                    name="endDate"
                    value={electiondata.endDate}
                    onChange={handleelectionchange}
                    required
                  />
                </div>
              </div>
              <div className="form-group col-md-4">
                <label>Is Active</label>
                <div>
                  <label>
                    <input
                      type="radio"
                      name="isActive"
                      value="true"
                      checked={electiondata.isActive === true}
                      onChange={handleelectionchange}
                    />
                    Yes
                  </label>
                  <label style={{ marginLeft: "10px" }}>
                    <input
                      type="radio"
                      name="isActive"
                      value="false"
                      checked={electiondata.isActive === false}
                      onChange={handleelectionchange}
                    />
                    No
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-danger"
                onClick={handleelectionsubmit}
              >
                Add Election
              </button>
            </form>
          </div>
        </div>
        {/* Candidate List Table */}
        <div className="card">
  <div className="card-header bg-success text-white">All Candidates</div>

  {/* Make body scroll horizontally if needed */}
  <div
    className="card-body"
    style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}
  >
    <div className="d-flex justify-content-end mb-3">
      <button className="btn btn-danger" onClick={handleExportPDF}>
        Download Result PDF
      </button>
    </div>

    <table
      className="table table-bordered table-hover text-center"
      style={{ minWidth: '150px' }} // Set a minimum width to avoid weird shrinking
    >
      <thead className="thead-light">
        <tr>
          <th style={{ whiteSpace: 'nowrap' }}>#</th>
          <th style={{ whiteSpace: 'nowrap' }}>Photo</th>
          <th style={{ whiteSpace: 'nowrap' }}>Name</th>
          <th style={{ whiteSpace: 'nowrap' }}>Party</th>
          <th style={{ whiteSpace: 'nowrap' }}>Constituency</th>
          <th style={{ whiteSpace: 'nowrap' }}>Symbol</th>
          <th style={{ whiteSpace: 'nowrap' }}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {candidates.length === 0 && (
          <tr>
            <td colSpan="7">No candidates found</td>
          </tr>
        )}
        {candidates.map((candidate, index) => {
          const key = candidate._id || index;

          return (
            <tr key={key}>
              <th style={{ whiteSpace: 'nowrap' }}>{index + 1}</th>
              <td>
                <img
                  src={candidate.photoURL || 'https://via.placeholder.com/60'}
                  className="img-thumbnail"
                  style={{ maxWidth: '100px', height: 'auto' }}
                  alt="Candidate"
                />
              </td>
              <td style={{ whiteSpace: 'nowrap' }}>{candidate.name}</td>
              <td style={{ whiteSpace: 'nowrap' }}>{candidate.party}</td>
              <td style={{ whiteSpace: 'nowrap' }}>{candidate.constituency}</td>
              <td>
                <img
                  src={
                    typeof candidate.symbolURL === 'string' &&
                    candidate.symbolURL.trim() !== ''
                      ? candidate.symbolURL.trim()
                      : 'https://via.placeholder.com/40'
                  }
                  className="img-thumbnail"
                  style={{ maxWidth: '40px', height: 'auto' }}
                  alt="Symbol"
                />
              </td>
              <td style={{ whiteSpace: 'nowrap' }}>
                <div className="d-flex justify-content-center gap-2">
                  <button className="btn btn-sm btn-warning">Edit</button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handledelete(candidate._id)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
</div>

        {/* Election List Table */}
        <div className="card shadow-sm">
          <div className="card-header bg-success text-white fw-bold">
            All Elections
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-bordered table-hover align-middle text-center">
                <thead className="table-light">
                  <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {manageelectionlist.length === 0 ? (
                    <tr>
                      <td colSpan="7" className="text-muted">
                        No Elections Found
                      </td>
                    </tr>
                  ) : (
                    manageelectionlist.map((election, index) => {
                      const key = election._id || index;

                      return (
                        <tr key={key}>
                          <td>{index + 1}</td>
                          <td>{election.name}</td>
                          <td>{election.description}</td>
                          <td>
                            {new Date(election.startDate).toLocaleDateString()}
                          </td>
                          <td>
                            {new Date(election.endDate).toLocaleDateString()}
                          </td>
                          <td>
                            <span
                              className={`badge ${
                                election.isActive
                                  ? "bg-success"
                                  : "bg-secondary"
                              }`}
                            >
                              {election.isActive ? "Active" : "Inactive"}
                            </span>
                          </td>
                          <td>
                            <div className="d-flex justify-content-center gap-2">
                              <button
                                className="btn btn-sm btn-outline-warning"
                                onClick={() => handleEditElection(election)}
                              >
                                Edit
                              </button>

                              <button
                                className="btn btn-sm btn-outline-danger"
                                onClick={() =>
                                  handleelectiondelete(election._id)
                                }
                              >
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/*Update election Form*/}
        {showEditModal && selectedElection && (
          <div className="modal show d-block" tabIndex="-1">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Edit Election</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setShowEditModal(false)}
                  ></button>
                </div>
                <div className="modal-body">
                  <form onSubmit={handleUpdateElection}>
                    <input
                      type="text"
                      className="form-control mb-2"
                      name="name"
                      value={selectedElection.name}
                      onChange={(e) =>
                        setSelectedElection({
                          ...selectedElection,
                          name: e.target.value,
                        })
                      }
                      required
                    />
                    <textarea
                      className="form-control mb-2"
                      name="description"
                      value={selectedElection.description}
                      onChange={(e) =>
                        setSelectedElection({
                          ...selectedElection,
                          description: e.target.value,
                        })
                      }
                      rows={3}
                    />
                    <input
                      type="datetime-local"
                      className="form-control mb-2"
                      name="startDate"
                      value={new Date(selectedElection.startDate)
                        .toISOString()
                        .slice(0, 16)}
                      onChange={(e) =>
                        setSelectedElection({
                          ...selectedElection,
                          startDate: e.target.value,
                        })
                      }
                      required
                    />

                    <input
                      type="datetime-local"
                      className="form-control mb-2"
                      name="endDate"
                      value={new Date(selectedElection.endDate)
                        .toISOString()
                        .slice(0, 16)}
                      onChange={(e) =>
                        setSelectedElection({
                          ...selectedElection,
                          endDate: e.target.value,
                        })
                      }
                      required
                    />

                    <div className="mb-3">
                      <label className="form-label me-2">Is Active:</label>
                      <label className="me-2">
                        <input
                          type="radio"
                          name="isActive"
                          checked={selectedElection.isActive === true}
                          onChange={() =>
                            setSelectedElection({
                              ...selectedElection,
                              isActive: true,
                            })
                          }
                        />
                        Yes
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="isActive"
                          checked={selectedElection.isActive === false}
                          onChange={() =>
                            setSelectedElection({
                              ...selectedElection,
                              isActive: false,
                            })
                          }
                        />
                        No
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={handleUpdateElection}
                    >
                      Save Changes
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Adminpanal;
