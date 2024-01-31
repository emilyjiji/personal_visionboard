import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Welcome.css';

function Welcome() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/started1');
  };

  return (
    <div className='page'>
      <div className='left-half'>
        <div className='welcome-box'>
          <div className='welcome-text'>
            <h1>Welcome!</h1>
            <p>
              Build A Personal Visionboard for your desktop background in seconds !
            </p>
            <button className='btn' onClick={handleGetStarted}>Get Started</button>
          </div>
        </div>
      </div>
      
      <div className='right-half'>
            <div className="demo-img" style={{height: '50%',  display: 'flex', justifyContent: 'center', alignItems: "center", marginTop: 'auto'}} />
    </div>
    </div>
  );
}

export default Welcome;


