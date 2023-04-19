import React from 'react'
import { Container, Col, Row, Spinner } from 'react-bootstrap';
import CoinsList from './CoinsList';
import { useGlobalContext } from '../../contexts/Store';
import CoinItem from './CoinItem';

const Coin = ({ filteredCoins }) => {

    const { coins, loading } = useGlobalContext();

    if (!coins) return (
        <div className='my-5 d-flex align-items-center justify-content-center'>
            <Spinner className="my-5" animation="border" role="status" />
        </div>);

    return (
        <Container>
            <Row>
                <Col lg={6}>
                    {loading && <div className='my-5 d-flex align-items-center justify-content-center text-center'>
                        <Spinner className="my-5 d-flex text-center" animation="border" role="status" />
                    </div>}
                    {filteredCoins?.map((coin) => {
                        return (<>

                            <CoinItem
                                rank={coin.rank ? coin.rank : ""}
                                exp={coin.exp ? coin.exp : ""}
                                name={coin.name}
                                symbol={coin.symbol}
                                icon={coin.icon}
                                price={coin.price ? coin.price  : "-"}
                                volume={coin.volume ? coin.volume : "-"}
                                priceChange1h={coin.priceChange1h  ? coin.priceChange1h : "-"}
                                priceChange1d={coin.priceChange1d ? coin.priceChange1d : "-"}
                                priceChange1w={coin.priceChange1w ? coin.priceChange1w : "-"}
                            />

                        </>)
                    }
                    )}
                </Col>
                <Col lg={6}>
                    <CoinsList />
                </Col>
            </Row>


        </Container >
    )
}

export default Coin