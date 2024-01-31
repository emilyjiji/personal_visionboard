import React, { useState } from "react";
import "./ChooseTheme.css";
import { useNavigate } from "react-router-dom";

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
    const [selectedTheme, setSelectedTheme] = useState(null);

    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/download');
    };

    const handleThemeSelection = (theme) => {
        setSelectedTheme(theme);
        console.log(theme);
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
                    <button className="btn" onClick={handleGetStarted}>Continue</button>
                    )}
                </div>
            </div>
            <div
                className={`child ${selectedTheme ? `gradient-img-${themes.indexOf(selectedTheme) + 1}` : ""
                    }`}
            >
                {selectedTheme && (
                    <div className={`demo-img-${themes.indexOf(selectedTheme) + 1}`} />
                )}
            </div>
        </div>
    );
}

export default ChooseTheme;
