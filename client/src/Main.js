import {
 Navbar,
 Nav,
 NavDropdown,
 Carousel,
 Container,
 Form,
 FormControl,
 Button
} from 'react-bootstrap';
import logo from './yurionice.jpg';
import FlipCard from './FlipCard';


// import logo from './logo.svg';
//import './App.css';
//import FlipCard from './FlipCard';

const categories = [
 {
   id: 1,
   title: 'Aventuras',
   description: 'Historias maravillosas',
   imgURL: logo
 },
 {
   id: 2,
   title: 'Suspenso',
   description: 'Sustos que dan gusto',
   imgURL: logo
 },
 {
   id: 3,
   title: 'Fantasia',
   description: 'Historas del mas alla',
   imgURL: logo
 },
 {
   id: 4,
   title: 'Comic',
   description: 'Comic estadounidences',
   imgURL: logo
 },
 {
   id: 5,
   title: 'No ficción',
   description: 'Realidad atravez de la pantalla',
   imgURL: logo
 },
];
const categories2 = [
 {
   id: 6,
   title: 'Historicos',
   description: 'Anecdotas',
   imgURL: logo
 },
 {
   id: 7,
   title: 'Mitologia',
   description: 'El origen del Fanfiction',
   imgURL: logo
 },
 {
   id: 8,
   title: 'BL',
   description: 'Amor entre hombres',
   imgURL: logo
 },
 {
   id: 9,
   title: 'Manga',
   description: 'Comic japoneces',
   imgURL: logo
 },
 {
   id: 10,
   title: 'Fanfic',
   description: 'Historias mas alla de la realidad',
   imgURL: logo
 },
];

const Main = props => {
  return (
    <Container className="mt-4">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="holder.js/800x400?text=First slide&bg=373940"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="holder.js/800x400?text=Second slide&bg=282c34"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="holder.js/800x400?text=Third slide&bg=20232a"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
            <Container>
            <h1>categorias</h1>
            <Container className="cards">
              {categories.map(category => (
                <FlipCard
                  imgURL={category.imgURL}
                  title={category.title}
                  description={category.description}
                />
              ))}
            </Container>
            <Container className="cards">
            {categories2.map(category => (
              <FlipCard
                imgURL={category.imgURL}
                title={category.title}
                description={category.description}
              />
            ))}
            </Container>
            </Container>
        </Container>
  );
};

export default Main;
