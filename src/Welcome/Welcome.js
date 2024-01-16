import './Welcome.css';
import React from 'react';


function Welcome() {
  return (
    <div className='parent'>
      <div className='child'>
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
      <div className='child'>
        <div className='demo-img' />
      </div>
    </div>
  );
}

export default Welcome;

