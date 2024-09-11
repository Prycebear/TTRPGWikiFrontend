import {useState} from "react";
import axios from 'axios';
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function PostNewSpecies(){

    const [formData, setFormData] = useState({
        speciesName: '',
        speciesDescription: '',
        speciesShortDescription: ''
    });

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent page refresh

        const token = localStorage.getItem('authToken');
        if (token === null){
            alert('Youre not logged in.')
        }
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        };

        try {
            const response = await axios.post(
                'http://localhost:8080/species/add',
                formData,
                { headers }
            );
            console.log('Success:', response.data);
            setFormData({
                speciesName: '',
                speciesDescription: '',
                speciesShortDescription: ''
            });
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <Container>
            <h1 className="my-4">Post new species</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName" className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="speciesName"
                        value={formData.speciesName}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formDescription" className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        name="speciesDescription"
                        value={formData.speciesDescription}
                        onChange={handleChange}
                        placeholder="Enter a detailed description"
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formShortDescription" className="mb-3">
                    <Form.Label>Short Description</Form.Label>
                    <Form.Control
                        type="text"
                        name="speciesShortDescription"
                        value={formData.speciesShortDescription}
                        onChange={handleChange}
                        placeholder="Enter a short description"
                        required
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

