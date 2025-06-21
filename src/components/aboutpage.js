import React from 'react';

const AboutPage = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">About VoteBharat</h2>

      <div className="row justify-content-center">
        <div className="col-lg-8">
          <p className="lead text-muted text-center">
            VoteBharat is a secure and modern voting platform built to simplify and digitalize the election process for institutions, communities, and demo-use cases.
          </p>

          <hr />

          <h4 className="mt-4"> Developer</h4>
          <p>
           Hi, I'm <strong>Kamlesh Satpute</strong>, the developer behind this project. I built VoteBharat using the MERN stack — that's MongoDB, Express, React, and Node.js. The idea was to create a smooth and secure voting experience that covers everything from user login to vote casting and admin controls.
          </p>
          <p>
            For more Info Checkout my Github:{" "}
            <a
              href="https://github.com/Kamlesh-Creates"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub-ProfilePage
            </a>
          </p>

          <h5> Features:</h5>
          <ul>
            <li>Secure user registration and login</li>
            <li>Protected voting process (one user, one vote)</li>
            <li>Live vote count</li>
            <li>Admin panel for managing candidates</li>
            <li>Responsive, mobile-friendly UI</li>
          </ul>

          <p className="mt-4 text-muted">
            Designed with care. Hosted with passion. Built for learning and showcasing full-stack development skills.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
