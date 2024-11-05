import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const naviagate = useNavigate()
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
      });
      const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
      }

      const handleSubmit = (e) => {
        e.preventDefault()
        try {
          console.log(formData,"from dattaa")
          axios.post('http://localhost:8080/register',formData)
          .then(res => console.log(res.data),"dataaaa")
          naviagate('/login')
        } catch (error) {
          console.log(error,"register erorr")
        }
            
      }

  return (
    
    <div className="flex justify-center items-center h-screen bg-gray-100">
    <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-8">Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="username">
            name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="phone">
            Phone
          </label>
          <input
            type="phone"
            name="phone"
            id="phone"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="profession">
            Profession
          </label>
          <input
            type="profession"
            name="profession"
            id="profession"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            value={formData.profession}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          Register
        </button>
      </form>
    </div>
  </div>
);
};


export default Register
