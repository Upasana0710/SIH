import React, { useState } from 'react';
import AnimatedPage from './AnimatedPage';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
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
    // You can add your form submission logic here
    console.log('Form submitted with data:', formData);
    // You can also make an API call to send this data to a server
    // Reset the form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <AnimatedPage>
    <div>
    <section id="section5">
      <h2 id="contact">CONTACT US</h2>
      <div id="form-design">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <br/>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <br/>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <br/>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="submit-btn">
          <button type="submit">Submit</button>
        </div>
      </form>
      </div>
     </section>
     <div>
      <footer>
        <h5>made by Team LET</h5>
      </footer>
     </div>
     </div>
     </AnimatedPage>
    
  );
}

export default ContactUs;
