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
import { Routes, Route } from 'react-router-dom';

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

function App() {

  const hola = () => console.log('hola');

  return (
    <div>
    <Container fluid>
    <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#">Bookworm</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link href="App.js">Home</Nav.Link>
      <NavDropdown title="Categorias" id="navbarScrollingDropdown">
        <NavDropdown.Item href="#action1">Aventuras</NavDropdown.Item>
        <NavDropdown.Item href="#action2">Suspenso</NavDropdown.Item>
        <NavDropdown.Item href="#action3">Fantasia</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Comic</NavDropdown.Item>
        <NavDropdown.Item href="#action5">No ficción</NavDropdown.Item>
        <NavDropdown.Item href="#action6">Historico</NavDropdown.Item>
        <NavDropdown.Item href="#action7">Mitologia</NavDropdown.Item>
        <NavDropdown.Item href="#action8">BL</NavDropdown.Item>
        <NavDropdown.Item href="#action9">Manga</NavDropdown.Item>
        <NavDropdown.Item href="#action10">Fanfic</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#" disabled>

      </Nav.Link>
    </Nav>
    <Form onSubmit={hola} className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button type="submit" variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
  <Button> iniciar sesion</Button>
</Navbar>
</Container>
<Routes>
<Route path="/terror">
  <h2>Otra pagina</h2>
</Route>
<Route path="/">
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
    </Route>
    </Routes>
    <footer class="bg-light text-center text-white">
      {/*<Grid container>*/}
      <div class="container p-4 pb-0">
        {/*<Section: Social media>*/}
        <section class="mb-4">
          {/*<Facebook>*/}
          <a
            class="btn btn-primary btn-floating m-1"
            style={{backgroundColor: '#3b5998'}}
            href="https://es-la.facebook.com/pages/category/Teens---Kids-Website/Seguidores-De-La-GRASA-367867570349333/"
            role="button">
            <i class="fab fa-facebook-f"></i>
          </a>

          {/*<Twitter>*/}
          <a
            class="btn btn-primary btn-floating m-1"
            style={{backgroundColor: '#55acee'}}
            href="https://twitter.com/seradotwav?lang=es"
            role="button">
            <i class="fab fa-twitter"></i>
          </a>

          {/*<Google>*/}
          <a
            class="btn btn-primary btn-floating m-1"
            style={{backgroundColor: '#dd4b39'}}
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            role="button">
            <i class="fab fa-google"></i>
          </a>

          {/*<Instagram>*/}
          <a
            class="btn btn-primary btn-floating m-1"
             style={{backgroundColor: '#ac2bac'}}
            href="https://www.instagram.com/p/BsOGulcndj-/?utm_medium=share_sheet"
            role="button">
            <i class="fab fa-instagram"></i>
          </a>

          {/*<Linkedin>*/}
          <a
            class="btn btn-primary btn-floating m-1"
            style={{backgroundColor: '#0082ca'}}
            href="https://yurionice.fandom.com/es/wiki/Yuri!!!_on_Ice"
            role="button">
            <i class="fab fa-linkedin-in"></i>
            </a>
          {/*<Github>*/}
          <a
            class="btn btn-primary btn-floating m-1"
            style={{backgroundColor: '#333333'}}
            href="https://github.com/Rocio-R/bookworm"
            role="button">
            <i class="fab fa-github"></i>
          </a>
        </section>
        {/*<Section: Social media>*/}
      </div>
      {/*<Grid container>*/}

      {/*<Copyright>*/}
      <div class="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
        © 2020 Copyright:
        <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
      </div>
      {/*<Copyright>*/}
    </footer>
    </div>

  );
}

export default App;
