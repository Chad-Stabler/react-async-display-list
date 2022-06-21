import Animal from './Animal';

export default function AnimalList({ animals }) {
  return (<div className='animals'>
    {
      animals.map((animal, i) => <Animal key={animal.genus + animal.household_name + i} {...animal} />)
    }
  </div>);
}