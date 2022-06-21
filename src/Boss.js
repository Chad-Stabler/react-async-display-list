export default function Boss({ name, game_of_origin, favorite_attack, color }) {
  return (<div className="boss" style={{ backgroundColor: color }}>
    <h1>{name}</h1>
    <p>comes from: {game_of_origin}</p>
    <p>favorite attack: {favorite_attack}</p>
  </div>);
}