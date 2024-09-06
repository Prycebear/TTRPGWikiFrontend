import OpeningText from "./OpeningText.tsx";

export default function Home(){



    return(
            <main className="align-middle">
                <div className="px-4 py-5 my-5 text-center">
                    <h1 className="display-5 fw-bold">Title</h1>
                    <div className="col-lg-6 mx-auto">
                        <OpeningText/>
                    </div>
                </div>
            </main>
    )
}