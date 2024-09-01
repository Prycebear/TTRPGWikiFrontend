import useFetch from "../../../Functions/UseFetch/UseFetchGet.ts";
import {Row} from "reactstrap";
import BasicDataInline from "../../BasicDataCards/BasicDataCardInline.tsx";


export default function CharacterCards() {


    interface CharacterCard {

        characterId: number;
        characterFirstName: string;
        characterLastName: string;
        shortCharacterDescription: string;
        species:{
            speciesName:string;
        }
    }


    const [characterCardURL] = useFetch('http://localhost:8080/characters/playercharacters/card/all');
    const characterCard: CharacterCard[] = characterCardURL;


    return (

        <div>
            <main className="align-middle">
                <div className="px-4 py-3 text-center">
                    <h1 className="display-8 fw-bold">Mortal races</h1>
                </div>

            </main>
            <Row className="justify-content-md-center" xxl={2} lg={3} md={4} sm={6} xs={12}>
                {characterCard && characterCard.map(item => {
                        return (
                            <BasicDataInline id={item.characterId} name={item.characterFirstName + ' ' + item.characterLastName}
                                             shortDescription={item.shortCharacterDescription} species={item.species.speciesName}/>
                        )
                    }
                )}
            </Row>
        </div>
    )
}