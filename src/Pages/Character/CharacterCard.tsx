import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default (props) => (
    <div className="m-2" key={props.data.speciesId}>
        <Card className="flex-fill" style={{width: '18rem'}}>
            <Card.Img variant="top" src="holder.js/100px180"/>
            <Card.Body>
                <Card.Title>{props.data.speciesName}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    </div>


)