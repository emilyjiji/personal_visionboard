import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import html2canvas from "html2canvas"; // Import html2canvas library
import "./ChooseTheme.css";

const themes = [
  "berry",
  "fall",
  "forest",
  "grainy",
  "ocean",
  "psycho",
  "solar",
  "star",
  "starburst",
];

function ChooseTheme() {
  const { answer, secondAnswer } = useParams();

  // Access 'answer' and 'secondAnswer' as needed in this component
  console.log('Answer from Started1:', decodeURIComponent(answer));
  console.log('Answer from Started2:', decodeURIComponent(secondAnswer));


  const [selectedTheme, setSelectedTheme] = useState(null);
  const [imageLink, setImageLink] = useState(null); // State to hold the image link
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/download");
  };

  const handleThemeSelection = (theme) => {
    setSelectedTheme(theme);
    console.log(theme);
  };
  const saveImage = () => {
    const container = document.getElementById("imageContainer");
    html2canvas(container).then((canvas) => {
      // Convert canvas to data URL
      const dataUrl = canvas.toDataURL("image/png");
  
      // Navigate to the download page with imageLink and answers as state
      navigate("/download", {
        state: {
          imageLink: dataUrl,
          answer: decodeURIComponent(answer),
          secondAnswer: decodeURIComponent(secondAnswer),
        },
      });
    });
  };  

  return (
    <div className="parent" style={{ background: "#F5F0EA" }}>
      <div>
        <h1>Choose a Theme</h1>
        <div className="theme-box">
          <div className="theme-text">
            {themes.map((theme, index) => (
              <div
                key={index}
                className={`circle circle${index + 1}`}
                onClick={() => handleThemeSelection(theme)}
              ></div>
            ))}
          </div>
          {selectedTheme && (
            <button className="btn" onClick={saveImage}>
              Continue
            </button>
          )}
        </div>
      </div>
      <div
        id="imageContainer"
        className={`child ${
          selectedTheme ? `gradient-img-${themes.indexOf(selectedTheme) + 1}` : ""
        }`}
      >
        {selectedTheme && (
          <>
            <div id="box1" className="text-box1">
              {decodeURIComponent(answer)}
            </div>
            <div id="box2" className="text-box">
             
            </div>
            <div id="box3" className="text-box">
              
            </div>
            <div id="box4" className="text-box2">
            {decodeURIComponent(secondAnswer)}
            </div>
            <div id="box5" className="text-box">
            
            </div>
            <div className={`demo-img-${themes.indexOf(selectedTheme) + 1}`} />
          </>
        )}
      </div>
    </div>
  );
}

export default ChooseTheme;
