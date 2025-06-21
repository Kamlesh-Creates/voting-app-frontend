import React from 'react';

const Tab = () => {
  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">📋 Instructions & FAQs</h2>

      {/* Tabs */}
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="instructions-tab"
            data-bs-toggle="tab"
            data-bs-target="#instructions"
            type="button"
            role="tab"
            aria-controls="instructions"
            aria-selected="true"
          >
            Instructions
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="faq-tab"
            data-bs-toggle="tab"
            data-bs-target="#faq"
            type="button"
            role="tab"
            aria-controls="faq"
            aria-selected="false"
          >
            FAQ
          </button>
        </li>
      </ul>

      {/* Tab Content */}
      <div className="tab-content" id="myTabContent">

        {/* Instructions Tab */}
        <div
          className="tab-pane fade show active"
          id="instructions"
          role="tabpanel"
          aria-labelledby="instructions-tab"
        >
          <div className="card mt-3">
            <div className="card-body">
              <ol className="fs-5">
                <li>Sign up using your Aadhaar number and create a password.</li>
                <li> Login securely with your credentials.</li>
                <li> View your profile and dashboard for election details.</li>
                <li> Check the candidate list with party symbols and photos.</li>
                <li> Go to the Vote section and cast your vote (one time only).</li>
                <li>After elections, go to Vote Count to see live results.</li>
                <li> Admin access is restricted. Unauthorized access is blocked automatically.</li>
              </ol>
            </div>
          </div>
        </div>

        {/* FAQ Tab */}
        <div
          className="tab-pane fade"
          id="faq"
          role="tabpanel"
          aria-labelledby="faq-tab"
        >
          <div className="accordion mt-3" id="faqAccordion">

            {/* Q1 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="faqHeadingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqCollapseOne"
                  aria-expanded="true"
                  aria-controls="faqCollapseOne"
                >
                  What is this voting platform?
                </button>
              </h2>
              <div
                id="faqCollapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="faqHeadingOne"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  This is a secure digital voting platform where verified users can cast votes online and view live election results.
                </div>
              </div>
            </div>

            {/* Q2 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="faqHeadingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqCollapseTwo"
                  aria-expanded="false"
                  aria-controls="faqCollapseTwo"
                >
                  How do I register and vote?
                </button>
              </h2>
              <div
                id="faqCollapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="faqHeadingTwo"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Sign up using your Aadhaar number, log in, go to the voting section, select your candidate, and vote. You can only vote once.
                </div>
              </div>
            </div>

            {/* Q3 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="faqHeadingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqCollapseThree"
                  aria-expanded="false"
                  aria-controls="faqCollapseThree"
                >
                  Can I change my vote?
                </button>
              </h2>
              <div
                id="faqCollapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="faqHeadingThree"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  No, once a vote is cast, it cannot be changed to maintain vote integrity.
                </div>
              </div>
            </div>

            {/* Q4 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="faqHeadingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqCollapseFour"
                  aria-expanded="false"
                  aria-controls="faqCollapseFour"
                >
                  What if I edit local storage to become admin?
                </button>
              </h2>
              <div
                id="faqCollapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="faqHeadingFour"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  That won't work. Admin access is verified using a secure backend check with JWT token validation. Local edits are ignored.
                </div>
              </div>
            </div>

            {/* Q5 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="faqHeadingFive">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqCollapseFive"
                  aria-expanded="false"
                  aria-controls="faqCollapseFive"
                >
                  Is my vote anonymous and secure?
                </button>
              </h2>
              <div
                id="faqCollapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="faqHeadingFive"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Yes, your vote is securely encrypted and stored. Your identity is only used for authentication, not tied to vote data.
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Tab;
