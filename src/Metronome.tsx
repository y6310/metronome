import React, { useRef } from 'react';
import * as Tone from 'tone';
import { useState } from 'react';

interface MetronomeProps {
  bpm: number;
}

const Metronome: React.FC<MetronomeProps> = ({ bpm }) => {
  const [isStart, setIsStart] = useState(false);
  const loopRef = useRef<Tone.Loop>();

  const setting = () => {
    const synth = new Tone.Synth().toDestination();
    loopRef.current = new Tone.Loop((time) => {
      synth.triggerAttackRelease('C4', '32n', time);
    }).start(0);
    Tone.Transport.bpm.rampTo(bpm);
  };

  const start = () => {
    if (!isStart) {
      // 既存のループがあれば停止
      if (loopRef.current) {
        loopRef.current.stop(0);
      }
      setting();
      Tone.Transport.start();
      setIsStart(true);
    }
  };

  const stop = () => {
    if (isStart) {
      Tone.Transport.stop();
      setIsStart(false);
      // 既存のループがあれば停止
      if (loopRef.current) {
        loopRef.current.stop(0);
      }
    }
  };

  const handleClick = () => {
    isStart ? stop() : start();
  };

  return (
    <div>
      <button onClick={handleClick}>{isStart ? 'Stop' : 'Start'}</button>
    </div>
  );
};

export default Metronome;
