import useFetch from "../../Functions/UseFetch.ts";

export const CharacterdetailPage = () => {
    const [data] = useFetch(`http://localhost:8080/species/speciesid/5`);


    return (
        <div className="DetailCharacter" key={data.speciesId} >
            <h1 id = "DetailName">{data.speciesName} </h1>

            <br/>
            <div id="DataMain">

                <div id="CharacterDescription">
                    <h2 id = "DetailHeading">Description</h2>
                    <p className="DetailDesc">{data.speciesDescription}</p>
                    <br/>
                    <h2 id = "DetailHeading">History</h2>
                    <p className="DetailHist">History</p>
                </div>

            </div>

        </div>
    )
}
