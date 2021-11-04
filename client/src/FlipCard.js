import { useState } from 'react';
import { Link } from 'react-router-dom';

const FlipCard = props => {

const [flipped, setFlipped] = useState (false);


return(
  <Link to="/terror">
  <div
     onMouseEnter={() => setFlipped(true)}
     onMouseLeave={() => setFlipped(false)}
     className="flipcard">
     {flipped && <h1>{props.title}</h1>}
     {flipped && <p>{props.description}</p>}
     {!flipped && <img src={props.imgURL} />}
     </div>
    </Link>
  );
};
export default FlipCard;
