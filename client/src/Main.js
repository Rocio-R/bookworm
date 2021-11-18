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
import aventura from './aventura.jpg';
import suspenso from './suspenso.jpg';
import fantasia from './fantasia.jpg';
import comic from './comic.jpg';
import noFiccion from './noFiccion.png';
import historico from './historico.jpg';
import mitologia from './mitologia.jpg';
import terror from './terror.jpg';
import manga from './manga.jpg';
import fanfic from './fanfic1.png';
import imagen2 from './imagen2.jpg';
import imagen3 from './imagen3.jpg';
import image4 from './image4.jpg';
import FlipCard from './FlipCard';


// import logo from './logo.svg';
//import './App.css';
//import FlipCard from './FlipCard';

const categories = [
 {
   id: 1,
   title: 'Aventuras',
   description: 'Historias maravillosas',
   imgURL: aventura,
   link:'/Aventura'
 },
 {
   id: 2,
   title: 'Suspenso',
   description: 'Sustos que dan gusto',
   imgURL: suspenso,
   link:'/Suspenso'
 },
 {
   id: 3,
   title: 'Fantasia',
   description: 'Historas del mas alla',
   imgURL: fantasia,
   link:'/fantasia'
 },
 {
   id: 4,
   title: 'Comic',
   description: 'Comic estadounidences',
   imgURL: comic,
   link:'/comic'
 },
 {
   id: 5,
   title: 'No ficción',
   description: 'Realidad atravez de la pantalla',
   imgURL: noFiccion,
   link:'/noFiccion'
 },
 ];
const categories2 = [
 {
   id: 6,
   title: 'Historicos',
   description: 'Anecdotas',
   imgURL: historico,
   link:'/historicos'
 },
 {
   id: 7,
   title: 'Mitologia',
   description: 'El origen del Fanfiction',
   imgURL: mitologia,
   link:'/mitologia'
 },
 {
   id: 8,
   title: 'Terror',
   description: 'te cagas hasta las patas',
   imgURL: terror,
   link: '/terror'
 },
 {
   id: 9,
   title: 'Manga',
   description: 'Comic japoneces',
   imgURL: manga,
   link:'/manga'
  },
 {
   id: 10,
   title: 'Fanfic',
   description: 'Historias mas alla de la realidad',
   imgURL: fanfic,
   link:'/fanfic'
 },
];

const Main = props => {
  return (
    <Container className="mt-4">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={imagen2}
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
                src={imagen3}
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
                src={image4}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3></h3>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
            <Container>
            <h1>Categorias</h1>
            <Container className="cards">
              {categories.map(category => (
                <FlipCard
                  imgURL={category.imgURL}
                  title={category.title}
                  description={category.description}
                  link={category.link}
                />
              ))}
            </Container>
            <Container className="cards">
            {categories2.map(category => (
              <FlipCard
                imgURL={category.imgURL}
                title={category.title}
                description={category.description}
                link={category.link}
              />
            ))}
            </Container>
            </Container>
        </Container>
  );
};

export default Main;
