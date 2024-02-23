import React, { useState, ChangeEvent } from 'react';
import * as Tone from 'tone';
import Metronome from './Metronome';

const MetronomeControl = () => {
  const [bpm, setBpm] = useState<number>(120); // 初期BPMを設定
  const [manualBpm, setManualBpm] = useState<string>(''); // 手動で入力するBPM

  const handleBpmChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newBpm = parseInt(e.target.value, 10);
    setBpm(newBpm);
    // ここでTone.jsを使用してBPMを設定するための処理を追加
    Tone.Transport.bpm.value = newBpm;
  };

  const handleManualBpmChange = (e: ChangeEvent<HTMLInputElement>) => {
    setManualBpm(e.target.value);
  };

  const applyManualBpm = () => {
    const newBpm = parseInt(manualBpm, 10);
    if (!isNaN(newBpm)) {
      setBpm(newBpm);
      Tone.Transport.bpm.value = newBpm;
    }
  };



  return (
    <div className="metronome-control">
        
        <label htmlFor="manualBpm">BPM入力</label>
        <input
          type="text"
          id="manualBpm"
          name="manualBpm"
          value={manualBpm}
          onChange={handleManualBpmChange}
        />
        <button onClick={applyManualBpm}>Apply</button>

      <label htmlFor="bpm"></label>
      <input
        type="range"
        id="bpm"
        name="bpm"
        min="60"
        max="240"
        value={bpm}
        onChange={handleBpmChange}
      />
      <span>{bpm} BPM</span>

      <Metronome bpm = {bpm}/>
    </div>
  );
};

export default MetronomeControl;