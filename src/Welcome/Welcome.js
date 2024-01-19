import React from 'react';
import './Welcome.css';

function Welcome() {
  return (
    <div className='page'>
      <div className='left-half'>
        <div className='welcome-box'>
          <div className='welcome-text'>
            <h1>Welcome!</h1>
            <p>
              Build A Personal Visionboard for your desktop background in seconds !
            </p>
            <button className='btn'>Get Started</button>
          </div>
        </div>
      </div>
      <div className='right-half'>
        <div className='demo-img' />
      </div>
    </div>
  );
}

export default Welcome;


