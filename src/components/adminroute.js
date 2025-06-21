import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const AdminRoute = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = useState(null);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const verifyAdmin = async () => {
      try {
        const res = await axios.get('http://192.168.1.8:5000/admin/dashboard', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

       
        if (res.status === 200) {
          setIsAuthorized(true);
        } else {
          setIsAuthorized(false);
        }
      } catch (error) {
        setIsAuthorized(false); //set invalid token or admin
      }
    };

    verifyAdmin();
  }, [token]);

  if (isAuthorized === null) return <div>Loading...</div>;
  if (!isAuthorized) return <Navigate to="*" />;
  return children;
};

export default AdminRoute;
