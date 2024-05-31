import {Outlet} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function Root() {

    return (
        <>
            <Navbar expand="sm" className="bg-body-tertiary" fixed="top" data-bs-theme="dark" >
                <Container>
                    <Navbar.Brand href="#home">Avorlion</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto" >
                            <Nav.Link href={`/home`}>Home</Nav.Link>
                            <Nav.Link href={`/home`}>Campaigns</Nav.Link>

                            <NavDropdown title="The World" id="basic-nav-dropdown" >
                                <NavDropdown.Item href="/characters">History</NavDropdown.Item>
                                <NavDropdown.Item href="/characters">Continents</NavDropdown.Item>
                                <NavDropdown.Item href="/character">Nations</NavDropdown.Item>
                                <NavDropdown.Item href="/character">Sub-Nations</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="/character">Towns and Cities</NavDropdown.Item>
                                <NavDropdown.Item href="/character">Points of interest</NavDropdown.Item>
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
                                <NavDropdown.Item href="/characters">Mortal Races</NavDropdown.Item>
                                <NavDropdown.Item href="/character">Creatures</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="/character">
                                    New Species
                                </NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Items" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/character">Weapons</NavDropdown.Item>
                                <NavDropdown.Item href="/character">Armour</NavDropdown.Item>
                                <NavDropdown.Item href="/character">Tools</NavDropdown.Item>
                                <NavDropdown.Item href="/character">Plants</NavDropdown.Item>
                                <NavDropdown.Item href="/character">Books</NavDropdown.Item>
                                <NavDropdown.Item href="/character">Metals</NavDropdown.Item>
                                <NavDropdown.Item href="/character">Trinkets</NavDropdown.Item>
                                <NavDropdown.Item href="/character">Misc</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="/character">
                                    New item
                                </NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Groups" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/character">Guilds</NavDropdown.Item>
                                <NavDropdown.Item href="/character">Magic schools</NavDropdown.Item>
                                <NavDropdown.Item href="/character">Traders</NavDropdown.Item>
                                <NavDropdown.Item href="/character">Holy order</NavDropdown.Item>
                                <NavDropdown.Item href="/character">Mercenaries</NavDropdown.Item>
                                <NavDropdown.Item href="/character">Cults</NavDropdown.Item>
                                <NavDropdown.Item href="/character">Pirates</NavDropdown.Item>
                                <NavDropdown.Item href="/character">Heroic parties</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="/character">
                                    New group
                                </NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Gods" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/characters">Greater Deities</NavDropdown.Item>
                                <NavDropdown.Item href="/character">Deities</NavDropdown.Item>
                                <NavDropdown.Item href="/character">Lesser Deities</NavDropdown.Item>
                                <NavDropdown.Item href="/character">Demigods</NavDropdown.Item>
                                <NavDropdown.Item href="/character">Other Deities</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="/character">
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
        </>
    );
}