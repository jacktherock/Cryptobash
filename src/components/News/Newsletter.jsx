import React from 'react'
import { Row, Col, Container, Spinner } from 'react-bootstrap'
import NewsItem from './NewsItem'
import { useGlobalContext } from '../../contexts/Store';
import NoImageAvailable from '../../assets/NoImageAvailable.jpg'

const Newsletter = () => {

    const { articles, loading } = useGlobalContext();

    return (
        <Container>
            <h2 className='text-center my-3 py-3 shadow text-underline border rounded-pill'>Trending News</h2>
            {loading && <div className='my-5 d-flex align-items-center justify-content-center'>
                <Spinner className="my-5" animation="border" role="status" />
            </div>}
            <Row>

                {articles?.map((article) => {
                    return (<>
                        <Col sm={4}>
                            <NewsItem
                                key={article.id}
                                title={article.title ? article.title : ""}
                                imgURL={article.imgURL ? article.imgURL : NoImageAvailable}
                                shareURL={article.shareURL}
                                source={article.source} />
                        </Col>
                    </>)
                }
                )}
            </Row>
        </Container>
    )
}

export default Newsletter