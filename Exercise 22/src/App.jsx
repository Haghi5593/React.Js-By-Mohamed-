import React, { useState } from 'react';

function SimpleForm() {
  // State to manage form data
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    subscribe: false,
    country: ''
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Display form data in console
    console.log('=== FORM SUBMISSION DATA ===');
    console.log('Username:', formData.username);
    console.log('Email:', formData.email);
    console.log('Password:', formData.password);
    console.log('Subscribe to newsletter:', formData.subscribe);
    console.log('Country:', formData.country);
    
    // Display as a single object
    console.log('Complete form data:', formData);
    
    // Formatted table view
    console.table({
      Username: formData.username,
      Email: formData.email,
      Password: '••••••••',
      'Newsletter Subscription': formData.subscribe ? 'Subscribed' : 'Not Subscribed',
      Country: formData.country
    });
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h2>Registration Form</h2>
      
      <form onSubmit={handleSubmit}>
        {/* Username Input */}
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>

        {/* Email Input */}
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>

        {/* Password Input */}
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>

        {/* Checkbox */}
        <div style={{ marginBottom: '15px' }}>
          <label>
            <input
              type="checkbox"
              name="subscribe"
              checked={formData.subscribe}
              onChange={handleInputChange}
              style={{ marginRight: '10px' }}
            />
            Subscribe to newsletter
          </label>
        </div>

        {/* Select Dropdown */}
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="country">Country:</label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            required
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          >
            <option value="">Select your country</option>
            <option value="us">United States</option>
            <option value="uk">United Kingdom</option>
            <option value="ca">Canada</option>
            <option value="au">Australia</option>
            <option value="de">Germany</option>
            <option value="fr">France</option>
            <option value="jp">Japan</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px',
            width: '100%'
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default SimpleForm;