import React from 'react'
import { Card, Badge } from 'react-bootstrap'

const NewsItem = (props) => {

    let { id, title, imgURL, shareURL, source } = props;

    return (
        <Card className='bg-dark text-white shadow my-3 border mx-3 position-relative rounded-5' key={id} data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-duration="1000">

            <Card.Img src={imgURL} style={{ height: "350px" }} className='rounded-5 opacity-50' />

            <Card.ImgOverlay>
                <Badge pill bg="danger" className='position-absolute top-0 end-0 translate-middle'>
                    {source}
                </Badge>

                <Card.Body className="overflow-auto h-100" >
                    <a href={shareURL} rel="noreferrer" target="_blank" className="text-decoration-none text-white">
                        <Card.Title className='fs-4 text-center mx-3 border shadow px-3 py-3 rounded-4'>{title}</Card.Title>
                    </a>
                </Card.Body>
            </Card.ImgOverlay>
        </Card>
    )
}

export default NewsItem