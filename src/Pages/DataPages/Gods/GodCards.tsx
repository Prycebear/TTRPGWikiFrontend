import useFetch from "../../../Functions/UseFetch/UseFetchGet.ts";
import {ButtonGroup, Row} from "reactstrap";
import Button from "react-bootstrap/Button";
import {useState} from "react";
import CharacterDataInline from "../../../Components/Cards/CharacterDataInline.tsx";

export default function GodCards(){


    interface Gods {
        "godsId": number;
        "godsName": string;
        "godsDomain": string;
        "godLevel": string;

    }

    const [godLevel, setGodLevel] = useState('GREATER')
    const [godCardURLs] = useFetch('http://localhost:8080/gods/card/all');
    const godCard: Gods[] = godCardURLs.filter((godCardURL: Gods) => godCardURL.godLevel.includes(godLevel));

    const handleClickGodLevel = (value:string) => {
        setGodLevel(value);
    };
    return (

        <div>
            <main className="align-middle">
                <div className="px-4 py-3 text-center">
                    <h1 className="display-8 fw-bold">Gods</h1>
                    <ButtonGroup aria-label="Basic example">
                        <Button variant="secondary" onClick={() => handleClickGodLevel('GREATER')}>Greater</Button>
                        <Button variant="secondary" onClick={() => handleClickGodLevel('NORMAL')}>Normal</Button>
                        <Button variant="secondary" onClick={() => handleClickGodLevel('LESSER')}>Lesser</Button>
                        <Button variant="secondary" onClick={() => handleClickGodLevel('DEMI')}>Demi</Button>
                        <Button variant="secondary" onClick={() => handleClickGodLevel('OTHER')}>Other</Button>
                    </ButtonGroup>
                </div>

            </main>
            <Row className="justify-content-md-center" xxl={2} lg={3} md={4} sm={6} xs={12}>
                {godCard && godCard.map(item => {
                        return (
                            <CharacterDataInline id={item.godsId} name={item.godsName} species={item.godsDomain}
                                             shortDescription={item.godLevel} />
                        )
                    }
                )}
            </Row>
        </div>
    )
}