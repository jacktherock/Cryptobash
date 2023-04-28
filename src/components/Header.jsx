import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar, Offcanvas, Form, Button } from 'react-bootstrap'
import "../assets/style.css"
import About from './About';

const Header = ({ setSearchValueHandler, data }) => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            {['md'].map((expand) => (
                <Navbar key={expand} variant="dark" sticky="top" expand={expand} className="navbar py-3" style={{ backgroundColor: "#002a38" }}>
                    <Container fluid>
                        <Link to="/">
                            <Button variant="dark" className='rounded-pill ms-5 px-3 fs-5' style={{ backgroundColor: "#134D60" }}>{data.title}</Button>
                        </Link>

                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="start"
                            className="offcanvas-size"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    CryptoBash
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>

                                <Nav className="navbar-nav my-auto mx-auto">
                                    <Nav.Link as={Link} to="/coins" className="nav-item mx-3 py-2">
                                        Crypto
                                    </Nav.Link>
                                    <Nav.Link as={Link} to="/news" className="nav-item mx-3 py-2">
                                        News
                                    </Nav.Link>
                                    <Nav.Link className="nav-item mx-3 py-2" onClick={() => setModalShow(true)}>
                                        About
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