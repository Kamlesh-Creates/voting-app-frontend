import React from 'react';

function Footer() {
  return (
    <footer className="bg-body-tertiary text-dark py-4 border-top mt-auto">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side: Copyright + Developer Credit */}
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <p className="mb-1" style={{ fontSize: "18px" }}>
              © 2025 VoteBharat — 
              <a className="text-body ms-1" href="/">
                VoteBharat.com
              </a>
            </p>
            <p className="mb-0 text-muted" style={{ fontSize: "17px" }}>
              Made by <a href="https://github.com/Kamlesh-Creates" target="_blank" rel="noopener noreferrer">Kamlesh Satpute</a>
            </p>
          </div>

          {/* Right Side: Newsletter Signup */}
          <div className="col-md-6 text-center text-md-end">
            <form className="d-flex justify-content-center justify-content-md-end align-items-center">
              <label htmlFor="newsletter-email" className="me-2 mb-0 fw-bold">
                Sign up for our newsletter:
              </label>
              <input
                type="email"
                id="newsletter-email"
                className="form-control form-control-sm me-2"
                placeholder="Email"
                style={{ maxWidth: "200px" }}
              />
              <button className="btn btn-sm btn-primary" type="submit">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
