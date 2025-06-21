import React from 'react';
import { useNavigate } from 'react-router-dom';

function Cards() {
  const navigate = useNavigate();

  const candidatehandleclick = () => navigate("/candidates");
  const votehandleclick = () => navigate("/candidates/vote");
  const upcominghandleclick = () => navigate("/upcomingelection");
  const counthandleclick = () => navigate("/votecount");

  return (
    <>
      <h3 className="text-center mb-4">User Activity</h3>

      <div className="container">
        <div className="row g-4 justify-content-center">

          {/* Card 1 */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex">
            <div className="card w-100">
              <img
                src="https://imgs.search.brave.com/HSEkeyMuLwaik9vXLVAfsF0a_zpGhKQP5Afob5N7XP4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzEwLzM3LzU4LzU0/LzM2MF9GXzEwMzc1/ODU0MzFfUDRWODV2/NEJoV2hZN2Fzd0hI/VVYzekN5QU4yc0o1/enguanBn"
                className="card-img-top"
                alt="Candidates"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Candidates List</h5>
                <button className="btn btn-primary" onClick={candidatehandleclick}>
                  View All Candidates
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex">
            <div className="card w-100">
              <img
                src="https://imgs.search.brave.com/iDgtzrvyLsYufgk_LK--rNq2OcAIRqGDei2oJDO7hRI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE2/MTEwOTQwMy92ZWN0/b3IvYmFsbG90LXBh/cGVyLXdpdGgtY2Fu/ZGlkYXRlcy5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9SVlr/MVpoM1N2Y1BwN1Ft/Q0F5NENnX1V6enlf/RmxRUE9lc29DZGsz/dFUwST0"
                className="card-img-top"
                alt="Vote Now"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Vote Now</h5>
                <button className="btn btn-primary" onClick={votehandleclick}>
                  Cast Your Vote
                </button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex">
            <div className="card w-100">
              <img
                src="https://imgs.search.brave.com/2FdI9-FsFdhpYzi58W16xueUYMGfCYUorX-QdYFwMyo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTY1/ODE2OTg5MS92ZWN0/b3IvaW5kaWEtZWxl/Y3Rpb25zLWlsbHVz/dHJhdGlvbi5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9R3Ix/VmZPTXBNZlZmTGF2/Zm93OEF1R0NCUnVH/NEJNM2ZzNXN0S0Rs/a0R5UT0"
                className="card-img-top"
                alt="Upcoming Elections"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Upcoming Elections</h5>
                <button className="btn btn-primary" onClick={upcominghandleclick}>
                  View
                </button>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex">
            <div className="card w-100">
              <img
                src="https://imgs.search.brave.com/1XB-xytlILTBYxoBVHAKWaFUnyxFYzZ5Z0hArM_cF3s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjE2/NDAxMTc0OC92ZWN0/b3IveW91ci12b3Rl/LWNvdW50cy5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9YTV5/SmRiREN4eFdGTTVJ/UFFJZFk4VExvQU9v/Vmp2a05IZ0hTRm5W/N05jQT0"
                className="card-img-top"
                alt="Vote Count"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Check Vote Count Now</h5>
                <button className="btn btn-primary" onClick={counthandleclick}>
                  Vote Count
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Cards;
