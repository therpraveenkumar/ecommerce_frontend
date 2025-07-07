import React, { useState } from 'react';
import '../assets/AuthenticationStyle.css';

export default function Authentication() {
  const [form, setForm] = useState({
    name: '',
    password: '',
    confirmPassword: '',
    email: '',
    address: '',
    state: '',
    city: '',
    pincode: '',
    question: '',
    answer: ''
  });

  const [errors, setErrors] = useState({});

  // Regex patterns
  const alphaRegex = /^[A-Za-z\s]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const pincodeRegex = /^[0-9]{5,6}$/;

  const validate = () => {
    let tempErrors = {};

    if (!form.name.trim()) tempErrors.name = 'Name is required';
    else if (!alphaRegex.test(form.name)) tempErrors.name = 'Name must contain only letters and spaces';

    if (!form.password) tempErrors.password = 'Password is required';
    else if (!passwordRegex.test(form.password))
      tempErrors.password = 'Password must be 8-16 chars, with letters, numbers, and special chars';

    if (!form.confirmPassword) tempErrors.confirmPassword = 'Confirm your password';
    else if (form.password !== form.confirmPassword)
      tempErrors.confirmPassword = 'Passwords do not match';

    if (!form.email) tempErrors.email = 'Email is required';
    else if (!emailRegex.test(form.email)) tempErrors.email = 'Email is invalid';

    if (!form.address.trim()) tempErrors.address = 'Address is required';

    if (!form.state.trim()) tempErrors.state = 'State is required';
    else if (!alphaRegex.test(form.state)) tempErrors.state = 'State must contain only letters and spaces';

    if (!form.city.trim()) tempErrors.city = 'City is required';
    else if (!alphaRegex.test(form.city)) tempErrors.city = 'City must contain only letters and spaces';

    if (!form.pincode.trim()) tempErrors.pincode = 'Pincode is required';
    else if (!pincodeRegex.test(form.pincode)) tempErrors.pincode = 'Pincode must be 5 or 6 digits';

    if (!form.city.trim()) tempErrors.city = 'City is required';
    else if (!alphaRegex.test(form.city)) tempErrors.city = 'City must contain only letters and spaces';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Form submitted successfully!');
      // do something with form data (e.g., send to backend)
    }
  };

  return (
    <div className="container mt-5 mb-6 col-6">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit} noValidate>
        {/* Name */}
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>

        {/* Email */}
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>

        {/* Password */}
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            value={form.password}
            onChange={handleChange}
          />
          {errors.password && <div className="invalid-feedback">{errors.password}</div>}
        </div>

        {/* Confirm Password */}
        <div className="mb-3">
          <label className="form-label">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
            value={form.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
        </div>

        {/* Address */}
        <div className="mb-3">
          <label className="form-label">Address</label>
          <textarea
            name="address"
            className={`form-control ${errors.address ? 'is-invalid' : ''}`}
            rows="3"
            value={form.address}
            onChange={handleChange}
          />
          {errors.address && <div className="invalid-feedback">{errors.address}</div>}
        </div>

        {/* State */}
        <div className="mb-3">
          <label className="form-label">State</label>
          <input
            type="text"
            name="state"
            className={`form-control ${errors.state ? 'is-invalid' : ''}`}
            value={form.state}
            onChange={handleChange}
          />
          {errors.state && <div className="invalid-feedback">{errors.state}</div>}
        </div>

        {/* City */}
        <div className="mb-3">
          <label className="form-label">City</label>
          <input
            type="text"
            name="city"
            className={`form-control ${errors.city ? 'is-invalid' : ''}`}
            value={form.city}
            onChange={handleChange}
          />
          {errors.city && <div className="invalid-feedback">{errors.city}</div>}
        </div>

        {/* Pincode */}
        <div className="mb-3">
          <label className="form-label">Pincode</label>
          <input
            type="text"
            name="pincode"
            className={`form-control ${errors.pincode ? 'is-invalid' : ''}`}
            value={form.pincode}
            onChange={handleChange}
          />
          {errors.pincode && <div className="invalid-feedback">{errors.pincode}</div>}
        </div>

        {/* Question */}
        <div className="mb-3">
          <label className="form-label">Pincode</label>
          <input
            type="text"
            name="Question"
            className={`form-control ${errors.pincode ? 'is-invalid' : ''}`}
            value={form.pincode}
            onChange={handleChange}
          />
          {errors.pincode && <div className="invalid-feedback">{errors.pincode}</div>}
        </div>

        <button type="submit" className="btn btn-primary mb-3">
          Start Shopping
        </button>
      </form>
    </div>
  );
}


