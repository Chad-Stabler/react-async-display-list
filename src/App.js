import { useState, useEffect } from 'react';
import './App.css';
import BossList from './BossList';
import AnimalList from './AnimalList';
import ToyList from './ToyList';
import ShowList from './ShowList';
import { getBosses, getAnimals, getToys, getShows } from './services/fetch-utils';

function App() {
  const [animals, setAnimals] = useState([]);
  const [bosses, setBosses] = useState([]);
  const [toys, setToys] = useState([]);
  const [shows, setShows] = useState([]);

  async function fetchBossData() {
    const data = await getBosses();

    setBosses(data);
  }

  async function fetchAnimalData() {
    const data = await getAnimals();

    setAnimals(data);
  }

  async function fetchToyData() {
    const data = await getToys();

    setToys(data);
  }

  async function fetchShowData() {
    const data = await getShows();

    setShows(data);
  }
  useEffect(() => {
    fetchBossData();
    fetchAnimalData();
    fetchToyData();
    fetchShowData();
  }, []);
  return (
    <div className="App">
      <BossList bosses={bosses}/>
      <AnimalList animals={animals} />
      <ToyList toys={toys} />
      <ShowList shows={shows} />
    </div>
  );
}

export default App;
