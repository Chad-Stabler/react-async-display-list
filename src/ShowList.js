import Show from './Show';

export default function ShowList({ shows }) {
  return (<div className='shows'>
    {
      shows.map((show, i) => <Show key={show.name + show.first_aired + i} {...show} />)
    }
  </div>);
}