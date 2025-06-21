// components/NotAuthorized.js
import React from 'react';

const NotAuthorized = () => {
  return (
    <div className="container text-center mt-5">
      <h1 className="text-danger">403 - Access Denied</h1>
      <p className="lead">You do not have permission to access this page.</p>
      <img
        src="https://i.imgur.com/oCkEbrA.png"
        alt="Access Denied"
        style={{ maxWidth: '400px' }}
        className="img-fluid my-4"
      />
    </div>
  );
};

export default NotAuthorized;
