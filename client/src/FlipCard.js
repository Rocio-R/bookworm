import { useState } from 'react';

const FlipCard = props => {

const [flipped, stFlipped] = useState (false);


return(
  <div
     onMouseEnter={() => setFlipped(true)}
     onMouseLeave={() => setFlipped(false)}
     className="flipcard">
     <h2>hola</h2>
     {flipped && <p>flipped verdadero</p>}
     {!flipped && <p>flipped falso</p>}
     </div>
  );
};
export default FlipCard;
