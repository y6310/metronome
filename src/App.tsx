import React from 'react';
import Metronome from './Metronome';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Metronome bpm={120} />
    </div>
  );
};

export default App;
