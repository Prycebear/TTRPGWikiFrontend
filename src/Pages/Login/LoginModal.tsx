import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useState} from "react";
import Form from "react-bootstrap/Form";




export default function LoginModal(props){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const[password, setPassword] = useState('');

    const handleSubmit = async () =>{
        props.setUsername === 'a'
        if(props.username === 'a'){
            props.setLoggedIn = true;
            console.log(props.username)
        }
    }


    return (
        <>
            <Button variant="secondary" onClick={handleShow}>
                {props.loggedIn ? props.username : 'Log in'}
            </Button>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Login page</Modal.Title>
                </Modal.Header>
                <Form>
                    <Form.Group className="m-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="username"
                            placeholder="Enter username"
                            value={props.username}
                            onChange={(e) => props.setUsername(e.target.value)}
                            required
                        />
                        <Form.Text className="text-muted">

                        </Form.Text>
                    </Form.Group>

                    {/*<Form.Group className="m-3" controlId="formBasicPassword">*/}
                    {/*    <Form.Label>Password</Form.Label>*/}
                    {/*    <Form.Control*/}
                    {/*        type="password"*/}
                    {/*        value={password}*/}
                    {/*        placeholder="Password"*/}
                    {/*        onChange={(e) => setPassword(e.target.value)}*/}
                    {/*        required*/}
                    {/*    />*/}
                    {/*</Form.Group>*/}
                    <Button className="m-3" variant="primary" type="submit" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Form>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>
        </>
    );
}