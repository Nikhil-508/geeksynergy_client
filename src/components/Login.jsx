import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [errorMessage, setErrorMessage] = useState(''); // State for error message
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
        setErrorMessage(''); // Clear error message on input change
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post('http://localhost:8080/login', credentials);
            console.log("Response data:", res.data);
            navigate('/'); // Navigate on successful login
        } catch (err) {
            console.error("Login error:", err);
            // Check if the error response has a message and set it
            if (err.response && err.response.data) {
                setErrorMessage(err.response.data.message || 'Login failed. Please try again.'); // Set the error message
            } else {
                setErrorMessage('An unexpected error occurred.'); // Handle unexpected errors
            }
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6">Login</h2>
                {errorMessage && ( // Conditionally render the error message
                    <div className="mb-4 text-red-500">
                        {errorMessage}
                    </div>
                )}
                <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input type="email" name="email" onChange={handleChange} required className="w-full p-2 border rounded"/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Password</label>
                    <input type="password" name="password" onChange={handleChange} required className="w-full p-2 border rounded"/>
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Login</button>
            </form>
        </div>
    );
}
