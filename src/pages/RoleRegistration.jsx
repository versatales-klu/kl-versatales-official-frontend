import React, { useState } from 'react';
import './RoleRegistration.css';

const RoleRegistration = () => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    email: '',
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setMessage('');
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { id, name, email } = formData;

    if (!id || !name || !email) {
      setError('Please fill in all fields.');
      return;
    }

    if (!email.endsWith('@kluniversity.in')) {
      setError('Please use a valid KL University email.');
      return;
    }

    // TODO: Send to backend API
    console.log('Registration submitted:', formData);
    setMessage('Registration successful!');
    setFormData({ id: '', name: '', email: '' });
  };

  return (
    <div className="role-registration-container">
      <div className="form-box">
        <h2 className="form-title">Role Registration</h2>

        {error && <div className="error-message">{error}</div>}
        {message && <div className="success-message">{message}</div>}

        <form onSubmit={handleSubmit} className="role-form">
          <div className="form-group">
            <label>ID:</label>
            <input
              type="text"
              name="id"
              value={formData.id}
              onChange={handleChange}
              placeholder="Enter your ID"
              className="input-field"
              required
            />
          </div>

          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="input-field"
              required
            />
          </div>

          <div className="form-group">
            <label>College Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@kluniversity.in"
              className="input-field"
              required
            />
          </div>

          <button type="submit" className="submit-button">
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default RoleRegistration;
