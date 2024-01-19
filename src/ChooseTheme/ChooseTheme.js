import React from "react";
import "./ChooseTheme.css";

function ChooseTheme() {
    return (
        <div className='parent'>
            <div>
                <h1>Choose a Theme</h1>
                <div className='theme-box'>
                    <div className='theme-text'>
                        <div className='circle circle1'></div>
                        <div className='circle circle2'></div>
                        <div className='circle circle3'></div>
                        <div className='circle circle4'></div>
                        <div className='circle circle5'></div>
                    </div>
                    <button className='btn'>Continue</button>
                </div>
            </div>
            <div className='child'>
                
                {/* <div className="gradient-img">
                <div className='demo-img'></div>
                </div> */}
               
            </div>
        </div>
    );
}

export default ChooseTheme;
