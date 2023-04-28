import React, { useState, useEffect } from 'react'
import { Table, Spinner } from 'react-bootstrap';
import axios from 'axios';

const CoinsList = () => {

    const [coins, setCoins] = useState([])
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios
            .get('https://api.coinstats.app/public/v1/coins?skip=0&limit=10')
            .then((response) => {
                setLoading(true)
                setCoins(response.data.coins)
                setLoading(false)
            })
            .catch(error => {
                setError(error);
            })
    }, []);

    if (error) return (
        <div className='my-5 d-flex align-items-center justify-content-center'>
            <h2 className='text-danger'>Error: {error.message}</h2>
        </div>);

    return (
        <>
            {
                loading ? <div className='my-5 d-flex align-items-center justify-content-center text-center'>
                    <Spinner className="my-5 d-flex text-center" animation="border" role="status" />
                </div> :
                    <>
                        <h2 className='text-center my-3 py-3'><u className="py-2 px-4 rounded-5 shadow">Top 10 Coins</u></h2>
                        <Table className='text-center' hover responsive>
                            <thead className='' style={{ backgroundColor: "#f2f2f2" }}>
                                <tr className='shadow rounded-4'>
                                    <th>Rank</th>
                                    <th>Icon</th>
                                    <th>Name</th>
                                    <th>Symbol</th>
                                    <th>Price</th>
                                </tr>
                            </thead>

                            <tbody className=' rounded-4  mx-3 py-3 '>
                                {coins?.map((coin) => {
                                    return (
                                        <tr key={coin.id} className="shadow rounded-4">
                                            <td>{coin.rank}</td>
                                            <td><img src={coin.icon} alt="" style={{ width: "40px" }} /></td>
                                            <td><a className='text-decoration-none' href={coin.websiteUrl}>{coin.name}</a></td>
                                            <td>{coin.symbol}</td>
                                            <td>{coin.price}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </Table>
                    </>
            }
        </>
    )
}

export default CoinsList