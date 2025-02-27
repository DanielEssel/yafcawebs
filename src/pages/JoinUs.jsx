import React, { useState } from 'react';

const JoinUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to backend)
    alert("Thank you for joining! We will get in touch with you soon.");
  };

  return (
    <div className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <h2 className="text-4xl font-extrabold text-center mb-10">Join Us</h2>
        <p className="text-lg text-center mb-6">
          We're excited that you want to be part of our mission! Please fill out the form below.
        </p>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-semibold">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 bg-white border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-semibold">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 bg-white border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-lg font-semibold">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-4 bg-white border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div>
            <label htmlFor="interest" className="block text-lg font-semibold">Why do you want to join us?</label>
            <textarea
              id="interest"
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              rows="4"
              className="w-full p-4 bg-white border border-gray-300 rounded-lg"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JoinUs;
