import React from 'react'
import { Row, Col, Container, Spinner } from 'react-bootstrap'
import { useGlobalContext } from '../../contexts/Store';
import NewsItem from './NewsItem'

const Newsletter = () => {

    const { articles, loading, error } = useGlobalContext();

    if (error) return (
        <div className='my-5 d-flex align-items-center justify-content-center'>
            <h2 className='text-danger'>Error: {error.message}</h2>
        </div>);

    return (
        <Container>
            <h2 className='text-center my-3 py-3 shadow text-underline border rounded-pill'>Trending News</h2>
            {loading && <div className='my-5 d-flex align-items-center justify-content-center'>
                <Spinner className="my-5" animation="border" role="status" />
            </div>}
            <Row>

                {articles?.map((article) => {
                    return (<>
                        <Col xs={12} md={6} lg={4} key={article.id}>
                            <NewsItem
                                key={article.id}
                                title={article.title ? article.title : ""}
                                imgURL={article.imgURL}
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