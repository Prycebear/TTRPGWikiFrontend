import {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

export default function LoginPage() {


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // For redirecting after successful login

    const handleLogin = async (e:Event) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/auth/signin', {
                    username, // Using state variable for the request body
                    password
                },
                {
                    headers: {
                        'Content-Type': 'application/json'
                        // 'Access-Control-Allow-Origin' is not needed here
                    },
                    withCredentials: true  // Ensures cookies are sent if they exist
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

            // Redirect to the home page or another page after login
            navigate('/home');
        } catch (error) {
            console.error('Login failed:', error);
            // Handle errors (e.g., show an error message to the user)
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <div>
                <label>Username:</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Login</button>
        </form>
    );

}