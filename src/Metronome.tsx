import React from 'react';
import * as Tone from 'tone';
import { useState, useEffect }  from "react";

const Metronome = () => {
  const [isstart,setisstart] = useState(false);

   const setting = () =>{
    const synth = new Tone.Synth().toDestination();
    const loopA = new Tone.Loop(time => {
      synth.triggerAttackRelease("C4", "8n", time);
    }, "4n").start(0);
    }

  const start = () =>{
    setting() 
    Tone.Transport.start()
    setisstart(true);
  }
  const stop = () =>{
    Tone.Transport.stop()
    setisstart(false);
   }


   const handleClick = () => {
    isstart ? stop() : start();
  };




  // const playNote = () => {
  //   // create a synth
  //   const synth = new Tone.Synth().toDestination();
  //   // play a note from that synth
  //   synth.triggerAttackRelease("C4", "8n");
  // };

  return (
    <div>
      <h1>4/4</h1>
      <button onClick={handleClick}>{isstart ? 'Start' : 'Stop'}</button>
    </div>
  );
};

export default Metronome;
