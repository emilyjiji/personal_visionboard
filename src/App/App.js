import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Welcome from '../Welcome/Welcome';
import Started1 from '../Started1/Started1';
import Started2 from '../Started2/Started2';
import ChooseTheme from '../ChooseTheme/ChooseTheme';
import Download from '../Download/Download';


function App() {
  return (
   <div>
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/started1" element={<Started1 />} />
        <Route path="/started2" element={<Started2 />} />
        <Route path="/choose-theme" element={<ChooseTheme />} />
        <Route path="/download" element={<Download />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
   </div>
  );
}

export default App;
