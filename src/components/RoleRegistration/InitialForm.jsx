import React, { useState } from 'react';
import './InitialForm.css';
import {
  submitInitialRoleForm,
  submitFullRoleForm,
} from '../../API/connections'; // ✅ correct import

const InitialForm = () => {
  const [collegeId, setCollegeId] = useState('');
  const [fullName, setFullName] = useState('');
  const [collegeEmail, setCollegeEmail] = useState('');

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [showFullForm, setShowFullForm] = useState(false);

  // Full form fields
  const [year, setYear] = useState('');
  const [gender, setGender] = useState('');
  const [dept, setDept] = useState('');
  const [wingname, setWingname] = useState('');
  const [reason, setReason] = useState('');
  const [experience, setExperience] = useState('');

  const handleInitialSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      const response = await submitInitialRoleForm({
        college_id: collegeId,
        name: fullName,
        mail: collegeEmail,
      });

      if (response.status === true) {
        // Not registered → open full form
        setShowFullForm(true);
      } else {
        // Already registered
        alert('You are already registered!');
      }
    } catch (error) {
      setErrorMessage('Unexpected error occurred. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleFullFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      const fullData = {
        college_id: collegeId,
        name: fullName,
        mail: collegeEmail,
        year,
        gender,
        dept,
        wingname,
        reason,
        experience,
      };

      const response = await submitFullRoleForm(fullData);

      if (response.status === true) {
        alert('Your registration has been submitted!');
        // Optionally reset form here
        setShowFullForm(false);
        setCollegeId('');
        setFullName('');
        setCollegeEmail('');
        setYear('');
        setGender('');
        setDept('');
        setWingname('');
        setReason('');
        setExperience('');
      } else {
        setErrorMessage('Failed to submit full details. Please try again.');
      }
    } catch (error) {
      setErrorMessage('Submission failed. Please check your inputs.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="initial-form-container">
      <h2>Role Registration</h2>

      {loading && <div className="loading">Please wait...</div>}

      {!showFullForm ? (
        <form className="initial-form" onSubmit={handleInitialSubmit}>
          <div className="form-group">
            <label htmlFor="collegeId">College ID:</label>
            <input
              type="text"
              id="collegeId"
              value={collegeId}
              onChange={(e) => setCollegeId(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="fullName">Full Name:</label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="collegeEmail">College Email:</label>
            <input
              type="email"
              id="collegeEmail"
              value={collegeEmail}
              onChange={(e) => setCollegeEmail(e.target.value)}
              required
            />
          </div>

          {errorMessage && <div className="error-message">{errorMessage}</div>}

          <button type="submit" className="submit-btn">
            Next
          </button>
        </form>
      ) : (
        <form className="full-form" onSubmit={handleFullFormSubmit}>
          <h3>Additional Details</h3>

          <div className="form-group">
            <label htmlFor="year">Year:</label>
            <input
              type="number"
              id="year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              required
              min="1"
              max="5"
            />
          </div>

          <div className="form-group">
            <label htmlFor="gender">Gender:</label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="dept">Department:</label>
            <input
              type="text"
              id="dept"
              value={dept}
              onChange={(e) => setDept(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="wingname">Wing Name:</label>
            <input
              type="text"
              id="wingname"
              value={wingname}
              onChange={(e) => setWingname(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="reason">Why do you want to join?</label>
            <textarea
              id="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="experience">Past Experience:</label>
            <textarea
              id="experience"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
            />
          </div>

          {errorMessage && <div className="error-message">{errorMessage}</div>}

          <button type="submit" className="submit-btn">
            Submit Full Form
          </button>
        </form>
      )}
    </div>
  );
};

export default InitialForm;
