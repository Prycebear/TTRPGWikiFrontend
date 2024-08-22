import useFetch from "../../Functions/UseFetch.ts";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {Row} from "reactstrap";

export default function DataCardPage() {


    const speciesCardUrl = 'http://localhost:8080/species/all/card';
    const [speciesCardUrls] = useFetch(speciesCardUrl);



    return(
        <>
            <main className="align-middle">
                <div className="px-4 py-3 text-center">
                    <h1 className="display-8 fw-bold">Mortal races</h1>
                </div>
            </main>
            <Row className="justify-content-md-center">
                {speciesCardUrls &&
                    speciesCardUrls.map((item) => {
                        // @ts-expect-error items work as intended.
                        return <div className='cardStyle' style={{margin: '0.5rem', width: '15%'}} key={item.speciesId}>
                            <Card>
                                <Card.Img variant="top" src="https://static.wikia.nocookie.net/garfield/images/f/fb/Garfieldshow.jpg.jpg/revision/latest?cb=20240429182216"/>
                                <Card.Body>
                                    {/*// @ts-expect-error items work as intended.*/}
                                    <Card.Title d-flex align-items-center>{item.speciesName}</Card.Title>
                                    <Card.Text>
                                        {/*// @ts-expect-error items work as intended.*/}
                                        {item.shortSpeciesDescription}
                                    </Card.Text>
                                    <Button variant="dark" size={"sm"}>Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    })}
            </Row>
        </>
    )
}