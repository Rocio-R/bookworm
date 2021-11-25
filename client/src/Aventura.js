import imagen1 from './aventura1b.jpg';
import imagen2 from './aventura2b.jpg';
import imagen3 from './aventura3b.jpg';
import FlipCard from './FlipCard';
import narnia from './aventura1p.jpg';
import narnia1 from './Narnia.js';
import {
  Carousel,
  Container
} from 'react-bootstrap';
//

const books = [
   {
     id: 1,
     title: 'Narnia',
     description: 'Historias maravillosas',
     imgURL:narnia,
     link: '/narnia1'
   },
   {
     id: 2,
     title: 'Narnia',
     description: 'Historias maravillosas',
     imgURL:narnia,
     link: '/narnia1'
   },
   {
     id: 3,
     title: 'Narnia',
     description: 'Historias maravillosas',
     imgURL:narnia,
     link: '/narnia1'
   }
 ];
const Aventura = props => (

<Container>
<Container className="mt-4">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imagen1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imagen2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imagen3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
        </Container>
        <Container>
        <h1>Aventura</h1>
        <Container className="cards">
          {books.map(book => (
            <FlipCard
              imgURL={book.imgURL}
              link={book.link}
              title={book.title}
              description={book.description}
              />
          ))}
          </Container>
          </Container>
</Container>
      );
export default Aventura;
