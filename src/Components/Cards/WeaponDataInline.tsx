import Accordion from 'react-bootstrap/Accordion';
import Card from "react-bootstrap/Card";
import {Col} from "reactstrap";
import {useState} from "react";
import {Offcanvas} from "react-bootstrap";
import { Link } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export default function WeaponDataInline({id, itemName, rarity, damageType, weaponType, weaponSize, weaponDiceDamge}) {
    const [showOffCanvas, setShowOffCanvas] = useState(false);
    const [selectedWord, setSelectedWord] = useState('');
    const [wordData, setWordData] = useState('');

    const fetchData = (word) => {
        console.log(`Fetching data for word: ${word}`);
        fetch(`http://localhost:8080/data/${word}`)
            .then((response) => {
                console.log('Response status:', response.status);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                console.log('Fetched data:', data);
                setWordData(data.dataDescription);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setWordData('Error fetching data.');
            });
    };

    // Handle word click and fetch data from API
    const handleWordClick = (word) => {
        console.log(`Word clicked: ${word}`);
        setSelectedWord(word);
        fetchData(word);
        setShowOffCanvas(true);
    };

    // Handle closing the Offcanvas
    const handleClose = () => setShowOffCanvas(false);

    return (
        <Col key={id} xxl={2} lg={3} md={4} sm={6} xs={12} className="m-1">
            <Card bg={'dark'}>
                <Link to={'https://dev.to/techiesdiary/net-60-jwt-token-authentication-using-the-example-api-91l'} style={{ textDecoration: 'none' }}>
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
                            <Card.Text onClick={() => handleWordClick(rarity)}>{rarity}</Card.Text> {/* Word ID 1 */}
                            <Card.Text onClick={() => handleWordClick(damageType)}>{damageType}</Card.Text> {/* Word ID 2 */}
                            <Card.Text onClick={() => handleWordClick(weaponDiceDamge)}>{weaponDiceDamge}</Card.Text> {/* Word ID 3 */}
                            <Card.Text onClick={() => handleWordClick(weaponSize)}>{weaponSize}</Card.Text> {/* Word ID 4 */}
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <Offcanvas show={showOffCanvas} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>{selectedWord}</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        {wordData || 'No data available.'}
                    </Offcanvas.Body>
                </Offcanvas>
            </Card>
        </Col>
    );
};




