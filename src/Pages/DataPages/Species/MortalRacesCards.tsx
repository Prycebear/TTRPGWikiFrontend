import useFetch from "../../../Functions/UseFetch/UseFetchGet.ts";
import {Row} from "reactstrap";
import BasicDataInline from "../../../Components/Cards/CharacterDataInline.tsx";
import {useEffect, useState} from "react";
import Button from "react-bootstrap/Button";


interface Species {
    speciesId: number;
    speciesName: string;
    speciesShortDescription: string;

}

export default function MortalRacesCards() {

    const [speciesCardUrls] = useFetch('http://localhost:8080/species/all/card');
    const speciesCard: Species[] = speciesCardUrls.filter(checkNull).sort((a: Species, b: Species) => a.speciesName.localeCompare(b.speciesName.toString()));

    function checkNull(speciesCardUrl: Species) {
        return speciesCardUrl.speciesName;
    }


    const [speciesArrayStart, setSpeciesArrayStart] = useState(0);
    const [speciesArrayEnd, setSpeciesArrayEnd] = useState(25);

    const speciesDisplayArray: Species[] = speciesCard.splice(speciesArrayStart, speciesArrayEnd);

    function nextPage() {
        setSpeciesArrayStart(speciesArrayStart + 25);
        setSpeciesArrayEnd(speciesArrayEnd + 25);
    }

    function previousPage() {
        setSpeciesArrayStart(speciesArrayStart - 31);
        setSpeciesArrayEnd(speciesArrayEnd - 31);
    }

    function setPageAmount(amount: number) {
        setSpeciesArrayEnd(speciesArrayStart + amount);
    }

    useEffect(() => {
    }, [speciesArrayStart, speciesArrayEnd]);


    return (

        <div className="px-4 py-3 text-center">
            <main className="align-middle">
                <div className="px-4 py-3 text-center">
                    <h1 className="display-8 fw-bold">Mortal races</h1>
                </div>

            </main>
            <Row className="justify-content-md-center" xxl={2} lg={3} md={4} sm={6} xs={12}>
                {speciesDisplayArray && speciesDisplayArray.map(item => {
                        return (
                            <BasicDataInline id={item.speciesId} name={item.speciesName}
                                             shortDescription={item.speciesShortDescription} species={undefined}/>
                        )
                    }
                )}
            </Row>
                <span>
                    <Button onClick={previousPage} style={{margin: 10}}>Previous page</Button>
                    <Button onClick={nextPage} style={{margin: 10}}>Next page</Button>
                </span>
        </div>
    )
}