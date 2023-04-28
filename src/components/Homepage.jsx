import React from "react"
import { Row, Col, Container } from "react-bootstrap";
import "../assets/style.css"
import home from "../assets/home.png"

const Homepage = () => {

    return (
        <>
            <Container>
                <Row style={{ height: "80vh" }}>
                    <Col sm={6} className="align-self-center">
                        <h1 className="fs-1 fw-bolder" >CryptoBash</h1>
                        <h5 className="lh-base">
                            CryptoBash is a cryptocurrency news and information website. It covers all the latest news and updates from the crypto world. It also provides information about the top 100 cryptocurrencies in the market.
                        </h5>
                    </Col>

                    <Col sm={6} className="d-flex justify-content-center align-items-center">
                        <img src={home} className=" shadow rounded-5 img-fluid" alt="" />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Homepage;