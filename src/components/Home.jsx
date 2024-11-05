import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:8080/home');
            setUsers(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    const editUser = (id) => {
        navigate(`/editUser/${id}`); 
    };

    const handleDelete = async (userId) => {
        try {
            await axios.delete(`http://localhost:8080/home/${userId}`);
            fetchUsers();
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">User List</h1>
            <table className="min-w-full bg-white shadow-md rounded">
                <thead>
                    <tr>
                        <th className="px-4 py-2 border">Name</th>
                        <th className="px-4 py-2 border">Email</th>
                        <th className="px-4 py-2 border">Phone</th>
                        <th className="px-4 py-2 border">Profession</th>
                        <th className="px-4 py-2 border">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user._id}>
                            <td className="px-4 py-2 border">{user.name}</td>
                            <td className="px-4 py-2 border">{user.email}</td>
                            <td className="px-4 py-2 border">{user.phone}</td>
                            <td className="px-4 py-2 border">{user.profession}</td>
                            <td className="px-4 py-2 border">
                                <button
                                    className="bg-yellow-500 text-white px-3 py-1 rounded mx-1"
                                    onClick={() => editUser(user._id)}>Edit</button>
                                <button
                                    className="bg-red-500 text-white px-3 py-1 rounded mx-1"
                                    onClick={() => handleDelete(user._id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
