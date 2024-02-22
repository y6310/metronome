import React from 'react';
import Metronome from './Metronome'; // SimpleToneDemo コンポーネントのインポート

const App: React.FC = () => {
  return (
    <div>
      <h1>Metronome</h1>
      {/* SimpleToneDemo コンポーネントの使用 */}
      <Metronome />
    </div>
  );
};

export default App;