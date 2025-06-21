import React, { useEffect, useState } from 'react';
import { fetchelectiondata } from './api';


function NoticeSlider() {
  const [status, setStatus] = useState('loading');
  const [election, setElection] = useState(null);
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    let intervalId;

    const getElectionData = async () => {
      try {
        const res = await fetchelectiondata();
        const allElections = res.data;

        const active = allElections.find(e => e.isActive === true);
        if (active) {
          setElection(active);
          setStatus('active');
          return;
        }

        const now = new Date();
        const upcoming = allElections
          .filter(e => new Date(e.startDate) > now)
          .sort((a, b) => new Date(a.startDate) - new Date(b.startDate))[0];

        if (upcoming) {
          setElection(upcoming);
          setStatus('inactive');
          startCountdown(upcoming.startDate);
        } else {
          setStatus('inactive');
        }
      } catch (error) {
        console.error('Error fetching election data:', error);
        setStatus('error');
      }
    };

    const startCountdown = (startDate) => {
      const electionStart = new Date(startDate).getTime();

      intervalId = setInterval(() => {
        const now = new Date().getTime();
        const distance = electionStart - now;

        if (distance <= 0) {
          clearInterval(intervalId);
          setCountdown('');
          setStatus('active'); 
        } else {
          const days = Math.floor(distance / (1000 * 60 * 60 * 24));
          const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((distance % (1000 * 60)) / 1000);

          setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
        }
      }, 1000);
    };

    getElectionData();

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="position-sticky top-0 z-3">
      {status === 'loading' && (
        <div className="alert alert-secondary text-center m-0 rounded-0" role="alert">
          ⏳ Checking election status...
        </div>
      )}

      {status === 'active' && election && (
        <div className="alert alert-success text-center m-0 rounded-0" role="alert">
          🗳️ Election "<strong>{election.name}</strong>" is live — Cast your vote now!
        </div>
      )}

      {status === 'inactive' && (
        <div className="alert alert-warning text-center m-0 rounded-0" role="alert">
          📅 No active election right now.{' '}
          {countdown ? (
            <>Next election "<strong>{election.name}</strong>" starts in: <strong>{countdown}</strong></>
          ) : (
            <>Stay tuned for updates!</>
          )}
        </div>
      )}

      {status === 'error' && (
        <div className="alert alert-danger text-center m-0 rounded-0" role="alert">
          ⚠️ Error fetching election status. Please try again later.
        </div>
      )}
    </div>
  );
}

export default NoticeSlider;
