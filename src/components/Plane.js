import { useState, useEffect, React } from 'react';

function Plane(props) {
  return (
    <article>
      <h3>{props.flight}</h3>
      <h3>{props.t}</h3>
    </article>
  );
}

export default Plane;
