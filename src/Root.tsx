import {Outlet} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LoginModal from "./Pages/Login/LoginModal.tsx";
import {useState} from "react";




export default function Root() {


    const [loggedInUser, setLoggedInUser] = useState( localStorage.getItem('username'));
 function LoggedInAreWe(){
     if(!loggedInUser){
         return(
             <LoginModal/>
         )
     }else{
         return <h3>{loggedInUser}</h3>
     }
 }



    return (
        <>
            <div className="route-outlet" style={{zIndex: '100'}}>
            <Navbar expand="xl" className="bg-body-tertiary" style={{position: "sticky", zIndex: '100'}}   >
                <Container>
                    <Navbar.Brand href="/home">Avorlion</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto" >
                            <Nav.Link href={`/home`}>Home</Nav.Link>
                            <Nav.Link href={`/campaigns`}>Campaigns</Nav.Link>
                            <Nav.Link href={`/signup`}>Sign up</Nav.Link>

                            <NavDropdown title="The World" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/world">History</NavDropdown.Item>
                                <NavDropdown.Item href="/world">Continents</NavDropdown.Item>
                                <NavDropdown.Item href="/world">Nations</NavDropdown.Item>
                                <NavDropdown.Item href="/world">Sub-Nations</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="/world">Towns and Cities</NavDropdown.Item>
                                <NavDropdown.Item href="/world">Points of interest</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="/character">
                                    New History
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/character">
                                    New Location
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Characters" id="basic-nav-dropdown" >
                                <NavDropdown.Item href="/characters">Characters</NavDropdown.Item>
                                <NavDropdown.Item href="/npc">NPC</NavDropdown.Item>
                                <NavDropdown.Item href="/players">Players</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="/character">
                                    New character
                                </NavDropdown.Item>
                            </NavDropdown>


                            <NavDropdown title="Species" id="basic-nav-dropdown" >
                                <NavDropdown.Item href="/mortal">Mortal Races</NavDropdown.Item>
                                <NavDropdown.Item href="/race">Creatures</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="/species-post">
                                    New Species
                                </NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Items" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/weapons">Weapons</NavDropdown.Item>
                                <NavDropdown.Item href="/armour">Armour</NavDropdown.Item>
                                <NavDropdown.Item href="/tools">Tools</NavDropdown.Item>
                                <NavDropdown.Item href="/plants">Plants</NavDropdown.Item>
                                <NavDropdown.Item href="/books">Books</NavDropdown.Item>
                                <NavDropdown.Item href="/trinkets">Trinkets</NavDropdown.Item>
                                <NavDropdown.Item href="/metals">Metals</NavDropdown.Item>
                                <NavDropdown.Item href="/misc">Misc</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="/items/weapon">
                                    New item
                                </NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Groups" id="basic-nav-dropdown" >
                                <NavDropdown.Item href="/groups">Guilds</NavDropdown.Item>
                                <NavDropdown.Item href="/groups">Magic schools</NavDropdown.Item>
                                <NavDropdown.Item href="/groups">Traders</NavDropdown.Item>
                                <NavDropdown.Item href="/groups">Holy order</NavDropdown.Item>
                                <NavDropdown.Item href="/groups">Mercenaries</NavDropdown.Item>
                                <NavDropdown.Item href="/groups">Cults</NavDropdown.Item>
                                <NavDropdown.Item href="/groups">Pirates</NavDropdown.Item>
                                <NavDropdown.Item href="/groups">Heroic parties</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="/character">
                                    New group
                                </NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Gods" id="basic-nav-dropdown" >
                                <NavDropdown.Item href="/gods">Gods</NavDropdown.Item>
                                <NavDropdown.Item href="/gods">Pantheons</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="/gods">
                                    New God
                                </NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Rules" id="basic-nav-dropdown" >
                                <NavDropdown.Item href="/characters">Basics</NavDropdown.Item>
                                <NavDropdown.Item href="/character">Classes</NavDropdown.Item>
                                <NavDropdown.Item href="/character">Combat</NavDropdown.Item>
                                <NavDropdown.Item href="/character">Magic</NavDropdown.Item>
                                <NavDropdown.Item href="/character">Downtime</NavDropdown.Item>
                                <NavDropdown.Divider/>
                            </NavDropdown>

                            <NavDropdown title="Randomiser" id="basic-nav-dropdown" >
                                <NavDropdown.Item href="/characters">Basics</NavDropdown.Item>
                                <NavDropdown.Item href="/character">Classes</NavDropdown.Item>
                                <NavDropdown.Item href="/character">Combat</NavDropdown.Item>
                                <NavDropdown.Item href="/character">Magic</NavDropdown.Item>
                                <NavDropdown.Item href="/character">Downtime</NavDropdown.Item>
                                <NavDropdown.Divider/>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end">
                        <LoggedInAreWe />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div id="detail"><Outlet/></div>
            </div>
        </>
    );
}