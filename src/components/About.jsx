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
                    Welcome to CryptoBash, your go-to destination for up-to-date information on the world of cryptocurrencies!
                </p>
                <p>
                    Developed using React JS, JSX, CSS, and Bootstrap, the app features an interactive UI with a user-friendly design.
                </p>
                <p>
                    Our React JS-based web application with a user-friendly and intuitive platform that ranks top crypto coins based on their market capitalization and provides trending news about cryptocurrencies from around the world.
                </p>
                <p>
                    Some key features of CryptoBash:
                </p>
                <ol>
                    <li>Real-time ranking system of top cryptocurrencies based on market capitalization</li>
                    <li>Detailed breakdown of performance for each cryptocurrency in the ranking</li>
                    <li>Trending news section with updates on the latest developments in the cryptocurrency world</li>
                    <li>Curated news sources to ensure accuracy and relevance of information</li>
                    <li>User-friendly and intuitive interface for easy navigation</li>
                    <li>Comprehensive and up-to-date information for both seasoned investors and newcomers</li>
                    <li>Constantly updated to reflect changes in the market and new developments in the industry.</li>
                </ol>
            </Modal.Body>
            <Modal.Footer>
                <p>Made with ❤️ | Copyright @2023 </p>
            </Modal.Footer>
        </Modal>
    );
}

export default About;