import React, { useState } from "react";
import "./ChooseTheme.css"; // Import the CSS file

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

    const handleThemeSelection = (theme) => {
        setSelectedTheme(theme);
        console.log(theme);
    };

    return (
        <div className='parent'>
            <div>
                <h1>Choose a Theme</h1>
                <div className='theme-box'>
                    <div className='theme-text'>
                        {themes.map((theme, index) => (
                            <div
                                key={index}
                                className={`circle circle${index + 1}`}
                                onClick={() => handleThemeSelection(theme)}
                            ></div>
                        ))}
                    </div>
                    <button className='btn'>Continue</button>
                </div>
            </div>
            <div className='child'>
                {selectedTheme && (
                    <div
                        className='theme-container'
                        style={{
background: `url('/Themes/${selectedTheme}-theme.png') center/cover no-repeat)`
                            // background: `url('public/Themes/${selectedTheme}-theme.png') center/cover no-repeat`,
                        }}
                    >
                        <div
                            className='gradient-img'
                            style={{
                                background: `url('/Gradient/${selectedTheme}-gradient.png') center/cover no-repeat`,
                            }}
                        ></div>
                    </div>
                    // <div>hi </div>
                )}
            </div>
        </div>
    );
}

export default ChooseTheme;
