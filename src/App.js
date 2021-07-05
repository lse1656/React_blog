/* eslint-disabled */
import React, {useState} from 'react';
import './App.css';
import { Navbar,Container,Nav,NavDropdown,Jumbotron,Button } from 'react-bootstrap';
import Data from './data';

function App() {

  let [shoes, setShoes] = useState(Data);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Jumbotron className="background">
        <h1>20% Season Off</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
      <div className="container">
        <div className="row">
        {
          shoes.map((i)=>{
            return(
              <Card title={i.title} content={i.content} price={i.price}/>
            )
          })
        }
        </div>
      </div>
    </div>
  );
}

function Card(props){
  return(
    <div className="col-md-4">
      <img src="https://codingapple1.github.io/shop/shoes3.jpg" alt=""/>
      <h4>{props.title}</h4>
      <p>{props.content} &amp; {props.price}</p>
    </div>
  )
}

export default App;
