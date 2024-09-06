import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import Form from 'react-bootstrap/Form';



export default function LoginModal() {
    const [show, setShow] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // For redirecting after successful login

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function refreshPage() {
        // @ts-expect-error just works
        window.location.reload(false);
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const handleLogin = async (e: Event): Promise<never> => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/auth/signin',
                {
                    username, // Using state variable for the request body
                    password
                },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true
                })

            // Destructuring the response data and renaming 'username' to 'user'
            const {accessToken, id, roles, tokenType, username: user} = response.data;

            // Save the token and other data to localStorage
            localStorage.setItem('authToken', accessToken);
            localStorage.setItem('userId', id);
            localStorage.setItem('userRoles', JSON.stringify(roles));
            localStorage.setItem('tokenType', tokenType);
            localStorage.setItem('username', user);

            console.log(user)
            console.log(tokenType)
            console.log(accessToken)
            console.log(roles)

            alert('Logged in successfully!')
            setUsername('');
            setPassword('');
            navigate('/home');
            refreshPage();
        } catch (error) {
            console.error('Login failed:', error);
            alert('Login failed, try again!')
        }
    };
    
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Log in
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleLogin}>
                    <div style={{margin:10}}>
                        <Form.Label>Username:</Form.Label>
                        <Form.Control
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div style={{margin:10}}>
                        <Form.Label>Password:</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <Button type="submit" style={{margin:10}} onClick={handleClose}>Login</Button>
                </Form>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
