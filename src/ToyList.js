import Toy from './Toy';

export default function ToyList({ toys }) {
  return (<div className='toys'>
    {
      toys.map((toy, i) => <Toy key={toy.name + toy.released + i} {...toy} />)
    }
  </div>);
}