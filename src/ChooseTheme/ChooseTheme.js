// ChooseTheme.js

import React from "react";
import "./ChooseTheme.css";

function ChooseTheme() {
  return (
    <div className='parent'>
      <div>
        <h1>Choose a Theme</h1>
        <div className='theme-box'>
          <div className='theme-text'>
            {/* Add your theme box content here */}
            <button className='btn'>Continue</button>
          </div>
        </div>
      </div>
      <div className='child'>
        <div className='demo-img' />
      </div>
    </div>
  );
}

export default ChooseTheme;
