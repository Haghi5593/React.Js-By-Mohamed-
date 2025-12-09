import { useForm } from 'react-hook-form';

const StudentRegistration = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    // Here you would typically send the data to a server
    alert('Registration successful!\n' + JSON.stringify(data, null, 2));
  };

  // Style objects
  const containerStyle = {
    maxWidth: '28rem',
    margin: '2.5rem auto',
    padding: '1.5rem',
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
  };

  const headingStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem'
  };

  const labelStyle = {
    display: 'block',
    fontSize: '0.875rem',
    fontWeight: '500',
    marginBottom: '0.25rem'
  };

  const inputStyle = {
    width: '100%',
    padding: '0.5rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.25rem'
  };

  const errorTextStyle = {
    color: '#ef4444',
    fontSize: '0.875rem',
    marginTop: '0.25rem'
  };

  const checkboxContainerStyle = {
    marginBottom: '0.5rem'
  };

  const checkboxLabelStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '0.5rem'
  };

  const checkboxInputStyle = {
    marginRight: '0.5rem'
  };

  const submitButtonStyle = {
    width: '100%',
    backgroundColor: '#f43f5e',
    color: 'white',
    padding: '0.5rem 0',
    borderRadius: '0.25rem',
    border: 'none',
    cursor: 'pointer'
  };

  const submitButtonHoverStyle = {
    backgroundColor: '#e11d48'
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  };

  const formGroupStyle = {
    marginBottom: '0'
  };

  const selectStyle = {
    ...inputStyle,
    backgroundColor: 'white'
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Student Registration</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} style={formStyle}>
        {/* Student Name */}
        <div style={formGroupStyle}>
          <label style={labelStyle}>
            Student Name
          </label>
          <input
            {...register('studentName', {
              required: 'Name is required',
              minLength: {
                value: 2,
                message: 'Name must be at least 2 characters'
              }
            })}
            style={inputStyle}
          />
          {errors.studentName && (
            <p style={errorTextStyle}>
              {errors.studentName.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div style={formGroupStyle}>
          <label style={labelStyle}>
            Email
          </label>
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Invalid email format'
              }
            })}
            style={inputStyle}
          />
          {errors.email && (
            <p style={errorTextStyle}>
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Grade Level */}
        <div style={formGroupStyle}>
          <label style={labelStyle}>
            Grade Level
          </label>
          <select
            {...register('gradeLevel', {
              required: 'Please select a grade'
            })}
            style={selectStyle}
          >
            <option value="">Select Grade</option>
            <option value="9">Grade 9</option>
            <option value="10">Grade 10</option>
            <option value="11">Grade 11</option>
            <option value="12">Grade 12</option>
          </select>
          {errors.gradeLevel && (
            <p style={errorTextStyle}>
              {errors.gradeLevel.message}
            </p>
          )}
        </div>

        {/* Subjects Interest */}
        <div style={formGroupStyle}>
          <label style={labelStyle}>
            Subjects Interest
          </label>
          <div style={checkboxContainerStyle}>
            <label style={checkboxLabelStyle}>
              <input
                type="checkbox"
                {...register('subjects', {
                  required: 'Select at least one subject'
                })}
                value="math"
                style={checkboxInputStyle}
              />
              Mathematics
            </label>
            <label style={checkboxLabelStyle}>
              <input
                type="checkbox"
                {...register('subjects')}
                value="science"
                style={checkboxInputStyle}
              />
              Science
            </label>
            <label style={checkboxLabelStyle}>
              <input
                type="checkbox"
                {...register('subjects')}
                value="english"
                style={checkboxInputStyle}
              />
              English
            </label>
          </div>
          {errors.subjects && (
            <p style={errorTextStyle}>
              {errors.subjects.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          style={submitButtonStyle}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = submitButtonHoverStyle.backgroundColor;
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = submitButtonStyle.backgroundColor;
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default StudentRegistration;