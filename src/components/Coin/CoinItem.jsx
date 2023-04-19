import React from 'react'
import { Card, Badge } from 'react-bootstrap';

const CoinItem = (props) => {

    let { rank, exp, name, symbol, icon, price, volume, priceChange1h, priceChange1d, priceChange1w } = props;

    return (
        <Card className='shadow my-3 position-relative px-5 py-5 rounded-5'
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-duration="1000">

            <Badge pill bg="dark" className='position-absolute top-0 start-25 translate-middle'>
                {rank}
            </Badge>
            <Badge pill bg="light" className='text-dark text-decoration-none fs-6 position-absolute top-25 start-100 translate-middle'>
                <a className="text-decoration-none" target='_blank' href={exp[0]} rel="noreferrer">
                    <i className="bi bi-box-arrow-up-right text-decoration-none"></i>
                </a>
            </Badge>
            <Card.Body>
                <Card.Title className='fs-2 text-center'>{name}</Card.Title>
                <Card.Text className='d-flex align-items-center justify-content-center '>
                    <Badge pill bg="warning" className='mx-5 fs-6 py-2 px-3 me-auto text-dark'>
                        {symbol}
                    </Badge>
                    <img src={icon} className="mx-5" style={{ width: "50px" }} alt="" />
                </Card.Text>
                <Card.Text className='d-flex'>
                    <span className='card w-50 mx-2 px-3 py-3 rounded-5'>
                        Price: <span className='fs-5 fw-bold' style={{ color: "#0096FF" }}>{price}</span>
                    </span>
                    <span className='card w-50 mx-2 px-3 py-3 rounded-5'>
                        Volume: <span className='fs-5 fw-bold' style={{ color: "#5800FF" }}>{volume}</span>
                    </span>
                </Card.Text>
                <Card.Text className='d-flex'>
                    <span className='card w-50 mx-2 px-3 py-3 rounded-5'>
                        Price Change per Hour: <span className='fs-5 fw-bold' style={{ color: "#9145B6" }}>{priceChange1h}</span>
                    </span>
                    <span className='card w-50 mx-2 px-3 py-3 rounded-5'>
                        Price Change per Day: <span className='fs-5 fw-bold' style={{ color: "#B958A5" }}>{priceChange1d}</span>
                    </span>
                    <span className='card w-50 mx-2 px-3 py-3 rounded-5'>
                        Price Change per Week: <span className='fs-5 fw-bold ' style={{ color: "#FF5677" }}>{priceChange1w}</span>
                    </span>
                </Card.Text>


            </Card.Body>
        </Card>
    )
}

export default CoinItem