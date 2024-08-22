import {Outlet} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function Root() {

    return (
        <>
            <div className="route-outlet">
            <Navbar expand="sm" className="bg-body-tertiary" style={{position: "sticky"}}   >
                <Container>
                    <Navbar.Brand href="/home">Avorlion</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto" >
                            <Nav.Link href={`/home`}>Home</Nav.Link>
                            <Nav.Link href={`/home`}>Campaigns</Nav.Link>

                            <NavDropdown title="The World" id="basic-nav-dropdown" >
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
                            <NavDropdown title="Characters" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/characters">Characters</NavDropdown.Item>
                                <NavDropdown.Item href="/character">NPC</NavDropdown.Item>
                                <NavDropdown.Item href="/character">Players</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="/character">
                                    New character
                                </NavDropdown.Item>
                            </NavDropdown>


                            <NavDropdown title="Species" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/race">Mortal Races</NavDropdown.Item>
                                <NavDropdown.Item href="/race">Creatures</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="/race">
                                    New Species
                                </NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Items" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/items/weapon">Weapons</NavDropdown.Item>
                                <NavDropdown.Item href="/items/weapon">Armour</NavDropdown.Item>
                                <NavDropdown.Item href="/items/weapon">Tools</NavDropdown.Item>
                                <NavDropdown.Item href="/items/weapon">Plants</NavDropdown.Item>
                                <NavDropdown.Item href="/items/weapon">Books</NavDropdown.Item>
                                <NavDropdown.Item href="/items/weapon">Metals</NavDropdown.Item>
                                <NavDropdown.Item href="/items/weapon">Trinkets</NavDropdown.Item>
                                <NavDropdown.Item href="/items/weapon">Misc</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="/items/weapon">
                                    New item
                                </NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Groups" id="basic-nav-dropdown">
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

                            <NavDropdown title="Gods" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/gods">Greater Deities</NavDropdown.Item>
                                <NavDropdown.Item href="/gods">Deities</NavDropdown.Item>
                                <NavDropdown.Item href="/gods">Lesser Deities</NavDropdown.Item>
                                <NavDropdown.Item href="/gods">Demigods</NavDropdown.Item>
                                <NavDropdown.Item href="/gods">Other Deities</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="/gods">
                                    New God
                                </NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Rules" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/characters">Basics</NavDropdown.Item>
                                <NavDropdown.Item href="/character">Classes</NavDropdown.Item>
                                <NavDropdown.Item href="/character">Combat</NavDropdown.Item>
                                <NavDropdown.Item href="/character">Magic</NavDropdown.Item>
                                <NavDropdown.Item href="/character">Downtime</NavDropdown.Item>
                                <NavDropdown.Divider/>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div id="detail"><Outlet/></div>
            </div>
        </>
    );
}