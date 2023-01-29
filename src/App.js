import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useState } from 'react';
import data from './pages/data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail';
import Cart from './pages/cart';

function App() {

  let navigate = useNavigate();

  let shoes = data;


  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">KongDol's Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail') }}>detail</Nav.Link>
            <Nav.Link onClick={() => { navigate('/cart') }}>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id2" element={<Detail shoes={shoes} />} />

        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버임</div>} />
          <Route path="location" element={<About />} />
        </Route>

        <Route path="/cart" element={<Cart />}/>
      </Routes>
    </div>
  );
}
export default App;

function About() {
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}
