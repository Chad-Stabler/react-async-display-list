export default function Show({ name, first_aired, num_seasons, color }) {
  return (<div className="show" style={{ backgroundColor: color }}>
    <h1>{name}</h1>
    <h2>{num_seasons} seasons</h2>
    <p>First aired in {first_aired}</p>
  </div>);
}