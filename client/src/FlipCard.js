import { useState } from 'react';

const FlipCard = props => {

const [flipped, setFlipped] = useState (false);


return(
  <div
     onMouseEnter={() => setFlipped(true)}
     onMouseLeave={() => setFlipped(false)}
     className="flipcard">
     {flipped && <h1>{props.title}</h1>}
     {flipped && <p>{props.description}</p>}
     {!flipped && <img src={props.imgURL} />}
     </div>
  );
};
export default FlipCard;
