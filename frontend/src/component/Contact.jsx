import React, { useState } from 'react';
import bgImage from './bgimg.jpg'; 
import emailjs from 'emailjs-com';

function Contact() {
  const [email, setEmail] = useState('');
  const [college, setCollege] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_21z1nm7', 'template_ynumypo', e.target, 'eCkPlgD22Tn-TT-vg')
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.error('Error sending message:', error);
        alert('Failed to send message. Please try again later.');
      });

    // Clear the form fields after submission
    setEmail('');
    setCollege('');
    setMessage('');
  };

  return (
    <div className='ab' style={{width:"100%",height:"510px",backgroundImage: `url(${bgImage})`,backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'}}>
   <center> <div style={{ width: '500px',background:"#d2d2d2" ,padding: '30px 20px 20px 20px', border: '1px solid #ccc', borderRadius: '35px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px', color: '#007bff' }}>Contact Us</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ marginBottom: '5px', color: '#333', fontWeight: 'bold' }}>Email:</label>
          <input
            type="email"
            name="email"
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ marginBottom: '5px', color: '#333', fontWeight: 'bold' }}>College Name:</label>
          <input
            type="text"
            name="college"
            placeholder='Enter your college name'
            value={college}
            onChange={(e) => setCollege(e.target.value)}
            style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ marginBottom: '5px', color: '#333', fontWeight: 'bold' }}>Message:</label>
          <textarea
            name="message"
            placeholder='Enter your message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
            required
          ></textarea>
        </div>
       <center><button type="submit" style={{ width: '50%', padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Submit</button></center> 
      </form>
    </div>
    </center>
    </div>
  );
}

export default Contact;
