import useFetch from "../../Functions/UseFetch.ts";

export default function CampaignCards(){

    const [data] = useFetch("http://localhost:8080/species/all");
    return(
        <>
            <h1>Continent Cards</h1>
        </>
    )
}