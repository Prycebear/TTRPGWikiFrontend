
import useFetch from "../../../Functions/UseFetch/UseFetchGet.ts";
import {ButtonGroup, Row} from "reactstrap";
import BasicDataInline from "../../../Components/Cards/CharacterDataInline.tsx";

export default function ContinentCards(){

    interface Continent {
        locationId: number
        locationName: string
        shortLocationDescription: string

    }

    const [continentCardURLs] = useFetch('http://localhost:8080/location/continent/all');
    const continentCard: Continent[] = continentCardURLs;


    return (

        <div>
            <main className="align-middle">
                <div className="px-4 py-3 text-center">
                    <h1 className="display-8 fw-bold">Continents</h1>
                    <ButtonGroup aria-label="Basic example">
                    </ButtonGroup>
                </div>

            </main>
            <Row className="justify-content-md-center" xxl={2} lg={2} md={4} sm={2} xs={2}>
                {continentCard && continentCard.map(item => {
                        return (
                            <BasicDataInline id={item.locationId} name={item.locationName} species={undefined}
                                             shortDescription={item.shortLocationDescription} />
                        )
                    }
                )}
            </Row>
        </div>
    )
}