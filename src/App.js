import { useState, useEffect } from 'react';
import './App.css';
import BossList from './BossList';
import AnimalList from './AnimalList';
import { getBosses, getAnimals } from './services/fetch-utils';

function App() {
  const [animals, setAnimals] = useState([]);
  const [bosses, setBosses] = useState([]);

  async function fetchBossData() {
    const data = await getBosses();

    setBosses(data);
  }

  async function fetchAnimalData() {
    const data = await getAnimals();

    setAnimals(data);
  }
  useEffect(() => {
    fetchBossData();
    fetchAnimalData();
  }, []);
  return (
    <div className="App">
      <BossList bosses={bosses}/>
      <AnimalList animals={animals} />
    </div>
  );
}

export default App;
