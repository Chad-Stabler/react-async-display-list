export default function Animal({ genus, species, household_name, color }) {
  return (<div className="animal" style={{ backgroundColor: color }}>
    <h1>{household_name}</h1>
    <h3>Genus: {genus}</h3>
    <h6>Scientific Name: {species}</h6>
  </div>);
}