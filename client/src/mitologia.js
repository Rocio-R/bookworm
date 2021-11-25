import imagen1 from './mitologiab1.jpeg';
import imagen2 from './mitologiab2.jpg';
import imagen3 from './mitologiab3.jpg';
import {
  Carousel,
  Container
} from 'react-bootstrap';

const Mitologia = props => (

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

export default Mitologia;
