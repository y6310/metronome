// src/Metronome.tsx
import React, { useState, useRef } from 'react';
import { Howl } from 'howler';
import './Metronome.css';

const clickSound = new Howl({
  src: ['/path/to/click.mp3'], // ファイルパスを実際のファイルに変更
});

interface MetronomeProps {
  bpm: number;
}

const Metronome: React.FC<MetronomeProps> = ({ bpm }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const timerId = useRef<number | null>(null);

  const startStopClick = () => {
    if (isPlaying) {
      clearInterval(timerId.current!);
    } else {
      timerId.current = window.setInterval(() => {
        clickSound.play();
      }, (60 / bpm) * 1000);
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="metronome">
      <h1>React Metronome</h1>
      <div className="bpm-display">{bpm} BPM</div>
      <button onClick={startStopClick}>{isPlaying ? 'Stop' : 'Start'}</button>
    </div>
  );
};

export default Metronome;
