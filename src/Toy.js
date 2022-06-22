export default function Toy({ name, company, released, color }) {
  return (<div className="toy" style={{ backgroundColor: color }}>
    <h1>{name}</h1>
    <p>made by {company}</p>
    <p>released in {released}</p>
  </div>);
}