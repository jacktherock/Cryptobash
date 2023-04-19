import React from 'react';
import { Modal } from 'react-bootstrap';

function About(props) {

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter textCenter">
                    CrytpoBash
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>What is CryptoBash?</h4>
                <p>
                    CryptoBash app uses the CoinGecko API to display the top 100 cryptocurrencies.
                    Advantage of this app is that it is a PWA, so you can install it on your phone and use it as a native app.
                    Most of the data is fetched from the API, but the icons are stored locally.
                    Main purpose of this app is to learn React and PWA.
                    POints of interest:
                </p>
            </Modal.Body>
            <Modal.Footer>
                <p>Copyright @2023</p>
            </Modal.Footer>
        </Modal>
    );
}

export default About;