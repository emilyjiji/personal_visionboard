import './Started2.css';
import React, { useState } from 'react';


function Started2() {
    const questions = [
        "What is your favorite color?",
        "What is your dream vacation destination?",
        "What is your favorite book?",
        "What is your go-to comfort food?",
        "What is your favorite hobby?"
    ];

    const [selectedQuestion, setSelectedQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    const handleQuestionChange = (event) => {
        setSelectedQuestion(event.target.value);
        setAnswer('');
    };

    const handleAnswerChange = (event) => {
        setAnswer(event.target.value);
    };

    return (
        <div className='parent'>
        <div className='child'>
          <div className='started2-box'>
            <div className='started2-text'>
                <h1>Almost Done!</h1>
              <p>Choose Your Second Prompt</p>
              <select value={selectedQuestion} onChange={handleQuestionChange}>
                <option value='' disabled>Select a question</option>
                {questions.map((question, index) => (
                  <option key={index} value={question}>
                    {question}
                  </option>
                ))}
              </select>
              {selectedQuestion && (
                <div>
                <input
                  type='text'
                  value={answer}
                  onChange={handleAnswerChange}
                  placeholder='Enter your answer'
                />
                <button className='btn'>Continue</button>
                </div>
              )}
              
            </div>
          </div>
        </div>
      </div>
    );
}

export default Started2;

