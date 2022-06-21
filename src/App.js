import { useState, useEffect } from 'react';
import './App.css';
import BossList from './BossList';
import { getBosses } from './services/fetch-utils';

function App() {
  const [bosses, setBosses] = useState([]);

  async function fetchBossData() {
    const data = await getBosses();

    setBosses(data);
  }
  useEffect(() => {
    fetchBossData();
  }, []);
  return (
    <div className="App">
      <BossList bosses={bosses}/>
    </div>
  );
}

export default App;
