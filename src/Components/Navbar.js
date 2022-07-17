import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Container,Offcanvas,Nav} from 'react-bootstrap';
import { ChakraProvider,Button } from '@chakra-ui/react'
import logo from './DcofferLogoWord.png'


function navbar() {

  const expand = 'lg';
  
  const navbarstyle = {
    opacity:"0.9", 
    boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.1 )"   
  }


  return (
    <div>
    <ChakraProvider>  
    <Navbar fixed="top" style={navbarstyle} key={expand} bg="light" expand={expand} >
      <Container fluid>
        <Navbar.Brand href="#">
          <img
              alt="dcoffer"
              src={logo}
              width="120"             
              className="d-inline-block align-center"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              <img
                alt="dcoffer"
                src={logo}
                width="120"             
                className="d-inline-block align-center"
              />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>  
              <Button colorScheme='blue'>Launch App</Button>           
            </Nav>           
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
    </ChakraProvider>
      
    </div>
  );
}

export default navbar;
