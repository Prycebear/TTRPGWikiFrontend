import useFetch from "../../../Functions/UseFetch/UseFetchGet.ts";
import {Row} from "reactstrap";
import BasicDataInline from "../../BasicDataCards/CharacterDataInline.tsx";
import React from "react";


interface Species {
    speciesId: number;
    speciesName: string;
    speciesShortDescription: string;

}

export default function MortalRacesCards() {

    const [speciesCardUrls] = useFetch('http://localhost:8080/species/all/card');
    const speciesCard:Species[] = speciesCardUrls;




    return (

        <div>
            <main className="align-middle">
                <div className="px-4 py-3 text-center">
                    <h1 className="display-8 fw-bold">Mortal races</h1>
                </div>

            </main>
            <Row className="justify-content-md-center" xxl={2} lg={3} md={4} sm={6} xs={12}>
                {speciesCard && speciesCard.map(item => {
                        return (
                            <BasicDataInline id={item.speciesId} name={item.speciesName}
                                             shortDescription={item.speciesShortDescription} species={undefined} />
                        )
                    }
                )}
            </Row>
        </div>
    )
}