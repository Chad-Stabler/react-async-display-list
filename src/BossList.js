import Boss from './Boss';

export default function BossList({ bosses = [] }) {
  return (<div className='boss-list'>
    {
      bosses.map((boss, i) => <Boss key={boss.name + boss.id + i} {...boss} />)
    }
  </div>);
}