import {Col} from "reactstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export default function WeaponDataInline({id, itemName, rarity, damageType, weaponType, weaponSize, weaponDiceDamge}) {

    return (
        <Col key={id} xxl={2} lg={3} md={4} sm={6} xs={12} className="m-1" >
            <Card bg={'dark'}>
                <Card.Img variant="top"
                          src="https://static.wikia.nocookie.net/garfield/images/f/fb/Garfieldshow.jpg.jpg/revision/latest?cb=20240429182216"/>
                <Card.Body>
                    <Card.Title>{itemName}</Card.Title>
                    <Card.Text>{rarity}</Card.Text>
                    <Card.Text>{weaponType + ' ' + damageType}</Card.Text>
                    <Card.Text>{weaponDiceDamge}</Card.Text>
                    <Card.Text>{weaponSize}</Card.Text>
                    <Card.Text>{rarity}</Card.Text>
                    <Button variant="primary">Add to cart</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}




