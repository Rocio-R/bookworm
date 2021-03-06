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
import FlipCard from './FlipCard';
import Main from './Main';
import Terror from './Terror';
import Aventura from './Aventura';
import Suspenso from './Suspenso';
import Fantasia from './fantasia';
import Comic from './comic';
import Noficcion from './noFiccion';
import Historicos from './historicos';
import Mitologia from './mitologia';
import Manga from './manga';
import Fanfic from './fanfic';
import { Routes, Route } from 'react-router-dom';

// import logo from './logo.svg';
//import './App.css';
//import FlipCard from './FlipCard';

const categories = [
  {
    id: 1,
    title: 'Aventuras',
    description: 'Historias maravillosas',
    imgURL: aventura
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
      <Nav.Link href="/Main.js">Home</Nav.Link>
      <NavDropdown title="Categorias" id="navbarScrollingDropdown">
        <NavDropdown.Item href="/Aventura">Aventuras</NavDropdown.Item>
        <NavDropdown.Item href="/Suspenso">Suspenso</NavDropdown.Item>
        <NavDropdown.Item href="/fantasia">Fantasia</NavDropdown.Item>
        <NavDropdown.Item href="/comic">Comic</NavDropdown.Item>
        <NavDropdown.Item href="/noficcion">No ficción</NavDropdown.Item>
        <NavDropdown.Item href="/historicos">Historico</NavDropdown.Item>
        <NavDropdown.Item href="/mitologia">Mitologia</NavDropdown.Item>
        <NavDropdown.Item href="/terror">Terror</NavDropdown.Item>
        <NavDropdown.Item href="/manga">Manga</NavDropdown.Item>
        <NavDropdown.Item href="/fanfic">Fanfic</NavDropdown.Item>
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
<Route path="/terror" element={<Terror />} />
<Route path="/Aventura" element={<Aventura />} />
<Route path="/Suspenso" element={<Suspenso />} />
<Route path="/fantasia" element={<Fantasia />} />
<Route path="/comic" element={<Comic />} />
<Route path="/noFiccion" element={<Noficcion />} />
<Route path="/historicos" element={<Historicos />} />
<Route path="/mitologia" element={<Mitologia />} />
<Route path="/manga" element={<Manga />} />
<Route path="/fanfic" element={<Fanfic />} />
<Route path="Main.js" element={<Main />} />


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
