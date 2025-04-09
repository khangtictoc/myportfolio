import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import personalData from '../data/personal';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // This would normally be where you'd send the form data to a server
    // For demo purposes, we'll just simulate a successful submission
    console.log('Form submitted:', formData);
    
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Message sent successfully! This is a demo - in a real application, this would send your message to the recipient.'
    });
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Reset form status after 5 seconds
    setTimeout(() => {
      setFormStatus({
        submitted: false,
        success: false,
        message: ''
      });
    }, 5000);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Information */}
          <div className="flex-1">
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="text-2xl text-primary mr-4">
                  <FaEnvelope />
                </div>
                <p>{personalData.contact.email}</p>
              </div>
              
              <div className="flex items-center">
                <div className="text-2xl text-primary mr-4">
                  <FaPhone />
                </div>
                <p>{personalData.contact.phone}</p>
              </div>
              
              <div className="flex items-center">
                <div className="text-2xl text-primary mr-4">
                  <FaMapMarkerAlt />
                </div>
                <p>{personalData.contact.location}</p>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-5 mt-8">
              <a 
                href={personalData.socialLinks.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-secondary hover:-translate-y-1"
              >
                <FaGithub className="text-xl" />
              </a>
              <a 
                href={personalData.socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-secondary hover:-translate-y-1"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a 
                href={personalData.socialLinks.twitter} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-secondary hover:-translate-y-1"
              >
                <FaTwitter className="text-xl" />
              </a>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="flex-1">
            {formStatus.submitted && (
              <div className={`p-4 mb-6 rounded-lg ${formStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {formStatus.message}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Name" 
                  required 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border-color rounded-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              
              <div>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Your Email" 
                  required 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border-color rounded-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              
              <div>
                <input 
                  type="text" 
                  name="subject" 
                  placeholder="Subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border-color rounded-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              
              <div>
                <textarea 
                  name="message" 
                  placeholder="Your Message" 
                  rows="5" 
                  required 
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border-color rounded-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 