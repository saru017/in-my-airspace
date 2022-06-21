//import './PlaneCount.css';

function PlaneCount(props) {
  const numPlanes = props.planes.ac.length;

  return (
    <div className="numPlanes">
      <h3>{`There are ${numPlanes} plane(s) in your airspace!`}</h3>
    </div>
  );
}

export default PlaneCount;
