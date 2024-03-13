import React, { useState, useEffect } from 'react';
import video from './a.mp4';
import { Button, Modal } from 'react-bootstrap';
import closeIcon from './window.png';
import './Main.css';

const Main = () => {
  const targetDate = new Date('2024-04-10T23:59:59').getTime();
  const [remainingTime, setRemainingTime] = useState(calculateTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function calculateTimeRemaining() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds
    };
  }

  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    window.location.href = '/events';
  };

  return (
    <>
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '700px',
          overflow: 'hidden',
        }}
      >
        <video autoPlay loop muted className="bg-video"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: '-1',
          }}
        >
          <source src={video} type="video/mp4" />
        </video>

        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            color: 'white',
          }}
        >
          <h1 style={{ fontSize: '3rem',marginTop:"90px", marginBottom: '20px' }}>Welcome to <br />Excalibur</h1>
          <p style={{ fontSize: '1.5rem', marginBottom: '30px' }}>Participate in events and Explore the prizes</p>
          <Button
            className="start-button"
            variant="outline-info"
            onClick={() => setShowModal(true)}
            style={{ marginBottom: '100px' }} // Add margin bottom to create space for the countdown
          >
            <h4>Start</h4>
          </Button>

          {/* Countdown */}
          <div style={{ position: 'relative',height:"150px" }}>
            <center>
              <h1 style={{color:"#fff"}}>Register now </h1>
            </center>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ margin: '0 20px', padding: '10px',color:"white", backgroundColor: 'transparent', borderRadius: '8px', boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)' }}>
                <p style={{ fontSize: '1.2rem', color:"white", marginBottom: '5px' }}>Days</p>
                <p style={{ fontSize: '2rem', color:'white', fontWeight: 'bold' }}>{remainingTime.days}</p>
              </div>
              <div style={{ margin: '0 20px', padding: '10px', backgroundColor: 'transparent', borderRadius: '8px', boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)' }}>
                <p style={{ fontSize: '1.2rem', color:"white", marginBottom: '5px' }}>Hours</p>
                <p style={{ fontSize: '2rem', color:"white", fontWeight: 'bold' }}>{remainingTime.hours}</p>
              </div>
              <div style={{ margin: '0 20px', padding: '10px', backgroundColor: 'transparent', borderRadius: '8px', boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)' }}>
                <p style={{ fontSize: '1.2rem',color:"white", marginBottom: '5px' }}>Minutes</p>
                <p style={{ fontSize: '2rem', color:"white", fontWeight: 'bold' }}>{remainingTime.minutes}</p>
              </div>
              <div style={{ margin: '0 20px', padding: '10px', backgroundColor: 'transparent', borderRadius: '8px', boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)' }}>
                <p style={{ fontSize: '1.2rem', color:"white", marginBottom: '5px' }}>Seconds</p>
                <p style={{ fontSize: '2rem', color:"white", fontWeight: 'bold' }}>{remainingTime.seconds}</p>
              </div>
            </div>
          </div>
        </div>

        <Modal show={showModal} onHide={() => setShowModal(false)} backdrop="static" keyboard={false}>
          <Modal.Body style={{ backgroundColor: 'transparent', textAlign: 'center' }}>
            <div style={{ position: 'relative' }}>
              <img src={closeIcon} alt="Close" style={{ width: '100%', height: 'auto' }} />
              <Button variant="outline-light" onClick={handleCloseModal} style={{ position: 'absolute', top: '10px', right: '10px' }}>Close</Button>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}

export default Main;
