import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

const NavBar = ({ dogs }) => {
    const links = dogs.map(dog => (
        <NavLink className="nav-link" key={dog.name} to={`/dogs/${dog.name.toLowerCase()}`}>
            {dog.name}
        </NavLink>
    ));

    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Nav className="me-auto">
                    <NavLink className="nav-link" exact to='/dogs'>Home</NavLink>
                    {links}
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavBar;