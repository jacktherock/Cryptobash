import React from 'react';
import { Card, Badge, Row, Col } from 'react-bootstrap';


const CoinItem = (props) => {
    const { rank, exp, name, symbol, icon, price, volume, priceChange1h, priceChange1d, priceChange1w } = props;

    return (
        <Card className='shadow my-3 position-relative py-3 px-2 rounded-5 border-0' data-aos="zoom-in" data-aos-offset="100" data-aos-duration="1000">
            <Badge pill bg="dark" className='position-absolute top-0 start-25 translate-middle'>{rank}</Badge>
            <Badge pill bg="light" className='text-dark text-decoration-none fs-6 position-absolute top-25 start-100 translate-middle'>
                <a className="text-decoration-none" target='_blank' href={exp[0]} rel="noreferrer">
                    <i className="bi bi-box-arrow-up-right text-decoration-none"></i>
                </a>
            </Badge>
            <Card.Body>
                <Card.Title className='fs-2 text-center'>{name}</Card.Title>
                <Card.Text className='d-flex align-items-center justify-content-center '>
                    <Badge pill bg="warning" className='mx-5 fs-6 py-2 px-3 me-auto text-dark'>{symbol}</Badge>
                    <img src={icon} className="mx-5" style={{ width: "50px" }} alt="" />
                </Card.Text>
                <Card.Text className=''>
                    <Row className="d-flex">
                        <Col xs={6} sm={6} md={6}>
                            <span className='card mx-2 px-3 py-3 rounded-5 text-wrap shadow border-0'>
                                Price: <span className='fs-5 fw-bold' style={{ color: "#0096FF" }}>{price}</span>
                            </span>
                        </Col>
                        <Col xs={6} sm={6} md={6}>
                            <span className='card mx-2 px-3 py-3 rounded-5 text-wrap shadow border-0'>
                                Volume: <span className='fs-5 fw-bold' style={{ color: "#5800FF" }}>{volume}</span>
                            </span>
                        </Col>
                    </Row>
                </Card.Text>
                <Card.Text className=''>
                    <Row className='d-flex justify-content-center'>
                        <Col xs={8} sm={4} md={4} lg={4}>
                            <span className='card mx-2 px-3 py-3 rounded-5 shadow border-0 mb-2'>
                                Price Change per Hour: <span className='fs-5 fw-bold' style={{ color: "#9145B6" }}>{priceChange1h}</span>
                            </span>
                        </Col>
                        <Col xs={8} sm={4} md={4} lg={4}>
                            <span className='card mx-2 px-3 py-3 rounded-5 shadow border-0 mb-2'>
                                Price Change per Day: <span className='fs-5 fw-bold' style={{ color: "#B958A5" }}>{priceChange1d}</span>
                            </span>
                        </Col>
                        <Col xs={8} sm={4} md={4} lg={4}>
                            <span className='card mx-2 px-3 py-3 rounded-5 shadow border-0'>
                                Price Change per Week: <span className='fs-5 fw-bold ' style={{ color: "#FF5677" }}>{priceChange1w}</span>
                            </span>
                        </Col>
                    </Row>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default CoinItem;
