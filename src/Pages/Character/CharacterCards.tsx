import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import useFetch from "../../Functions/UseFetch.ts";
import CharacterCard from "./CharacterCard.tsx";
import {useState} from "react";


export default function CharacterCards() {

    const [data] = useFetch("http://localhost:8080/species/all");
    const [cardsPaginationStart, setCardsPaginationStart] = useState(0);
    const [cardsActive, setCardsActive] = useState(20);
    function nextPage(){
        setCardsPaginationStart(cardsPaginationStart+20);
        setCardsActive(cardsActive+20);
    }
    function previousPage(){
        setCardsPaginationStart(cardsPaginationStart-20);
        setCardsActive(cardsActive-20);
    }
    // let active = 1;

    const pagData = data.slice(cardsPaginationStart, cardsActive);

    console.log(pagData);

    const listCharacters = pagData.map(data =>
        <>
            <CharacterCard data={data}></CharacterCard>
        </>
    );

    return(
        <>
            <Container fluid className="d-flex p-2 ">
            {/*<CharacterCard data={data}></CharacterCard>*/}
            {listCharacters}
            </Container>
            <Button onClick={nextPage}>Press this for next 20</Button>
            <Button onClick={previousPage}>Press this for next 20</Button>
        </>
    )
                        // return (
                        //     <div className="CharacterCard" key={props.item.speciesId}>
                        //     <Row>
                        //         <Card className="flex-fill" style={{width: '18rem'}}>
                        //             <Card.Img variant="top" src="holder.js/100px180"/>
                        //             <Card.Body>
                        //                 <Card.Title>{props.item.speciesName}</Card.Title>
                        //                 <Card.Text>
                        //                     Some quick example text to build on the card title and make up the
                        //                     bulk of the card's content.
                        //                 </Card.Text>
                        //                 <Button variant="primary">Go somewhere</Button>
                        //             </Card.Body>
                        //         </Card>
                        //     </Row>
                        // </div>)

}