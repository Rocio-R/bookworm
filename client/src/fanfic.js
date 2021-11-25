import imagen1 from './comic1b.jpg';
import imagen2 from './comic2b.jpg';
import imagen3 from './comic3b.jpg';
import {
  Carousel,
  Container
} from 'react-bootstrap';

const Fanfic = props => (

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
      );

export default Fanfic;
