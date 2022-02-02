import React from 'react';
import {TiShoppingCart} from 'react-icons/ti';
import {FaRegUser} from 'react-icons/fa';
import { Navbar,Container,Nav,Form,FormControl,Button } from 'react-bootstrap';

const Header = () => {
  return(
    <Navbar bg="primary" variant='light' expand="lg">
  <Container fluid>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="md-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link className="d-flex align-items-center" ><TiShoppingCart/><span className="px-1">سفارشات</span></Nav.Link>
        <Nav.Link href="#action2" className="d-flex align-items-center"><FaRegUser/><span className="px-1">ورود/خروج</span></Nav.Link>
      </Nav>
      <Form className="d-flex px-5">
        <FormControl
          type="search"
          placeholder="جستجو"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-light">جستجو</Button>
      </Form>
      
      <Navbar.Brand className="ms-auto" href="#">Contact Manager</Navbar.Brand>

    </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;
