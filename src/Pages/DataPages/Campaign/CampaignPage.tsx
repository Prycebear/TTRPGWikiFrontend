import {useState} from "react";
import Button from "react-bootstrap/Button";
import useFetch from "../../../Functions/UseFetch/UseFetchGet.ts";
import Card from "react-bootstrap/Card";
import {Row} from "reactstrap";
import {Link} from "react-router-dom";

export default function CampaignPage(){

    const mainURL:string  = 'http://localhost:8080/campaign/all/Main'
    const osURL:string  = 'http://localhost:8080/campaign/all/OS'

    const [changeURL, setChangeURL] = useState(mainURL)
    const [campaignType, setCampaignType] = useState("Main Campaign");
    const [campaignButtonType, setCampaignButtonType] = useState("One Shots");


    const changeCampaignType = () => {
        if (campaignType === 'Main Campaign'){
            setCampaignType('One Shots')
            setCampaignButtonType('Main Campaign')
            setChangeURL(osURL);
        }else{
            setCampaignType('Main Campaign')
            setCampaignButtonType('One Shots')
            setChangeURL(mainURL);
        }
    };



    const [campaignData] = useFetch(changeURL)

    return(
        <>
            <div>
                <main className="align-middle">
                    <div className="px-4 py-5 my-2 text-center">
                <h1 className="display-5 fw-bold">{campaignType}</h1>
                <Button onClick={changeCampaignType}>{campaignButtonType}</Button>
                {campaignType === 'Main Campaign' ? (
                    <>
                        <Row className="justify-content-md-center">
                            {campaignData &&
                                campaignData.map((item) => {
                                    // @ts-expect-error items work as intended.
                                    return <div className='cardStyle' style={{margin: '0.5rem', width: '15%'}} key={item.campaignId}>
                                        <Card >
                                            <Link to={'http://localhost:5173/sessions'} style={{textDecoration: 'none' , textDecorationColor: 'white'}}>
                                            <Card.Img variant="top" src="https://static.wikia.nocookie.net/garfield/images/f/fb/Garfieldshow.jpg.jpg/revision/latest?cb=20240429182216"/>
                                            <Card.Body>
                                                {/*// @ts-expect-error items work as intended.*/}
                                                <Card.Title d-flex align-items-center style={{textDecoration: 'none' , color: 'white'}}>{item.campaignName}</Card.Title>
                                                <Button variant="dark" size={"sm"}>Go somewhere</Button>
                                            </Card.Body>
                                            </Link>
                                        </Card>
                                    </div>
                                })}
                        </Row>
                    </>
                ) : (
                    <>
                        <p>{campaignType}</p>
                    </>
                )}
                    </div>
                </main>
            </div>
        </>
    )


}