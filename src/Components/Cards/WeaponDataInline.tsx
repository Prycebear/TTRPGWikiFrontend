import Accordion from 'react-bootstrap/Accordion';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {Col} from "reactstrap";
import {useState} from "react";
import {Offcanvas} from "react-bootstrap";
import { Link } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export default function WeaponDataInline({id, itemName, rarity, damageType, weaponType, weaponSize, weaponDiceDamge}) {

    const [showOffCanvas, setShowOffCanvas] = useState(false);
    const [selectedWord, setSelectedWord] = useState('');
    const wordData = {
        word1: 'This is data for word 1.',
        word2: 'This is data for word 2.',
        word3: 'This is data for word 3.',
    };

    const handleWordClick = (word) => {
        setSelectedWord(word);
        setShowOffCanvas(true);
    };

    const handleClose = () => setShowOffCanvas(false);

    return (
        <Col key={id} xxl={2} lg={3} md={4} sm={6} xs={12} className="m-1">
            <Card bg={'dark'}>
                <Link to={'https://dev.to/techiesdiary/net-60-jwt-token-authentication-using-the-example-api-91l'} style={{textDecoration: 'none'}}>
                    <Card.Img
                        variant="top"
                        src="https://static.wikia.nocookie.net/garfield/images/f/fb/Garfieldshow.jpg.jpg/revision/latest?cb=20240429182216"
                    />
                    <Card.Body>
                        <Card.Title>{itemName}</Card.Title>
                    </Card.Body>
                </Link>
                <Accordion defaultActiveKey="0" style={{ margin: '5%' }}>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Item stats</Accordion.Header>
                        <Accordion.Body>
                            <Card.Text onClick={() => handleWordClick('word1')}>{rarity}</Card.Text>
                            <Card.Text onClick={() => handleWordClick('word2')}>{weaponType + ' ' + damageType}</Card.Text>
                            <Card.Text onClick={() => handleWordClick('word2')}>{weaponDiceDamge}</Card.Text>
                            <Card.Text onClick={() => handleWordClick('word1')}>{weaponSize}</Card.Text>
                            <Card.Text onClick={() => handleWordClick('word2')}>{rarity}</Card.Text>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Offcanvas show={showOffCanvas} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Selected Word: {selectedWord}</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        {wordData[selectedWord] || 'No data available.'}
                    </Offcanvas.Body>
                </Offcanvas>
            </Card>
        </Col>
    )
}




