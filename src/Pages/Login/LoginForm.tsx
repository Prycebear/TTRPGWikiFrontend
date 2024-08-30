import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from "react";
import LoginAlert from "../../Components/Alerts/LoginAlert.tsx";

export default function LoginForm(props) {

    const[password, setPassword] = useState('');

    const handleSubmit = async () =>{
        if(props.username === 'Prycebear' && password === 'Ash'){
            props.setLogin = true;
        }else{
            return(
                <LoginAlert/>
            )
        }
    }

    return (
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

            <Form.Group className="m-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    value={password}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </Form.Group>
            <Button className="m-3" variant="primary" type="submit" onClick={handleSubmit}>
                Submit
            </Button>
        </Form>
    );
}