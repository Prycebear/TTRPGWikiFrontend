import {useState} from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {redirect, useNavigate} from "react-router-dom";

export default function SignUpPage()
{
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

// Handle form input changes
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };


// Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent page refresh

        // Define custom headers
        const headers = {
            'Content-Type': 'application/json',
        };

        try {
            const response = await axios.post(
                'http://localhost:8080/auth/signup',
                formData,
                {headers} // Pass the headers here
            );
            console.log('Success:', response.data);
            redirect('/');
        } catch (error) {
            console.error('Error:', error);
        }

    };

    return (
        <Container>
            <h1 className="my-4">Create New User</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formUsername" className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Enter your username"
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formPassword" className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        required
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Create User
                </Button>
            </Form>
        </Container>
    );
}