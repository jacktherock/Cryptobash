import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar, Offcanvas, Form, Button } from 'react-bootstrap'
import "../assets/style.css"
import About from './About';

const Header = ({ setSearchValueHandler }) => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            {['md'].map((expand) => (
                <Navbar key={expand} variant="dark" sticky="top" expand={expand} className="navbar py-3" style={{ backgroundColor: "#002a38" }}>
                    <Container fluid>
                        <Link to="/">
                            <Button variant="dark" className='rounded-pill ms-5 px-3 fs-5' style={{ backgroundColor: "#134D60" }}>CryptoBash</Button>
                        </Link>

                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="start"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    CryptoBash
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>

                                <Nav className="navbar-nav my-auto mx-auto">
                                    <Nav.Link className="nav-item mx-3 py-2">
                                        <Link to="/coins" className="nav-link">Crypto</Link>
                                    </Nav.Link>
                                    <Nav.Link className="nav-item mx-3 py-2">
                                        <Link to="/news" className="nav-link">News</Link>
                                    </Nav.Link>
                                    <Nav.Link className="nav-item mx-3 py-2" onClick={() => setModalShow(true)}>
                                        <span className="nav-link"> About</span>
                                    </Nav.Link>
                                </Nav>

                                <Form className="d-flex">
                                    <Form.Control
                                        type="search"
                                        placeholder="Search for a coin"
                                        className="me-2 rounded-pill"
                                        aria-label="Search"
                                        onChange={(e) => setSearchValueHandler(e.target.value)}
                                    />
                                    <Button variant="dark" className="rounded-pill"><i className="bi bi-search"></i></Button>
                                </Form>

                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
            <About
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

export default Header;