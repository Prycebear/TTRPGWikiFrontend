import useFetch from "../../Functions/UseFetch.ts";

export default function RaceCards(){

    const [data] = useFetch("http://localhost:8080/species/all");



    return(
        <>
            <h1>Race Cards</h1>
            {data &&
                data.map((item) => {
                    return <div className="RaceCard" key={item.speciesId}>
                        <h3>{item.speciesName}</h3>
                        <p>{item.speciesDescription}</p>
                    </div>
                })}
        </>
    )
}