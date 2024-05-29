import useFetch from "../../Functions/UseFetch.ts";





export default function Character(){



    const [data] = useFetch("http://localhost:8080/species/all");


    return (
        <div className="CharacterWrap">
            {data &&
                data.map((item) => {
                    return <div className="CharacterCard" key={item.speciesId}>

                            <div id="card-interior">
                                <div className="CardContent">
                                    <h3 id='CharacterName'>{item.speciesId} </h3>
                                    <h3 id='CharacterName'>{item.speciesName} </h3>


                                </div>
                            </div>

                    </div>


                })}
        </div>

    )
}