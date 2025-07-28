import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Admin.css';

const Admin = () => {
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch registration data from backend
  useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/registrations'); // Your backend endpoint
        setRegistrations(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching registrations:', error);
        setLoading(false);
      }
    };

    fetchRegistrations();
  }, []);

  return (
    <div className="admin-page p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Admin Panel - Role Registrations</h1>

      {loading ? (
        <p className="text-center text-lg text-gray-600">Loading registrations...</p>
      ) : registrations.length === 0 ? (
        <p className="text-center text-lg text-gray-600">No registrations found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
            <thead className="bg-blue-700 text-white">
              <tr>
                <th className="py-3 px-4 border-b">#</th>
                <th className="py-3 px-4 border-b">Name</th>
                <th className="py-3 px-4 border-b">Email</th>
                <th className="py-3 px-4 border-b">Role</th>
                <th className="py-3 px-4 border-b">Event</th>
                <th className="py-3 px-4 border-b">Date</th>
              </tr>
            </thead>
            <tbody>
              {registrations.map((reg, index) => (
                <tr key={reg.id} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b text-center">{index + 1}</td>
                  <td className="py-2 px-4 border-b">{reg.name}</td>
                  <td className="py-2 px-4 border-b">{reg.email}</td>
                  <td className="py-2 px-4 border-b">{reg.role}</td>
                  <td className="py-2 px-4 border-b">{reg.event}</td>
                  <td className="py-2 px-4 border-b">{new Date(reg.created_at).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Admin;
