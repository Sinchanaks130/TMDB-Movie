import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Contact.css';
import Loader from '../../../Movie/Components/Loader/Loader';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [errors, setErrors] = useState({});

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!name) {
      newErrors.name = 'Please enter your name.';
    } else if (name[0] !== name[0].toUpperCase()) {
      newErrors.name = 'The first letter of your name must be uppercase.';
    }

    if (!email) {
      newErrors.email = 'Email is required to proceed.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!message) {
      newErrors.message = 'Your message cannot be empty.';
    } else if (message.split(' ').length < 11) {
      newErrors.message = 'Please enter at least 11 words in your message.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setIsSending(true); // Start sending animation
      setTimeout(() => {
        setIsSending(false); // End sending animation
        setName(''); // Clear fields
        setEmail('');
        setMessage('');
        setShowPopup(true); // Show popup after fields are cleared
        setTimeout(() => {
          setShowPopup(false); // Hide popup after 5 seconds
          setIsLoading(true); // Start loader animation
          setTimeout(() => {
            setIsLoading(false); // End loader animation
            // Reset the form and state without refreshing the page
            setErrors({});
          }, 3000); // Loader duration
        }, 5000); // Popup duration
      }, 3000); // Sending animation duration
    }
  };

  useEffect(() => {
    setTimeout(() => {
      document.querySelector('h2').classList.add('visible');
    }, 200);
  }, []);

  return (
    <div className="contact-container">
      <motion.section
        className="contact-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>Contact Me</h2>
        <p>Feel free to send me a message. I will respond as soon as possible!</p>

        {isSending ? (
          <div className="sending-animation">
            <p>Sending your message...</p>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleContactSubmit}>
            <div className="input-container">
              <label htmlFor="name">Your Good Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter Your Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                disabled={showPopup || isLoading || isSending}
                autoComplete="name" // Add autocomplete attribute
              />
              <AnimatePresence>
                {errors.name && (
                  <motion.div
                    className="error-popup"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {errors.name}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="input-container">
              <label htmlFor="email">Reach Out Via Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="yourname@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={showPopup || isLoading || isSending}
                autoComplete="email" // Add autocomplete attribute
              />
              <AnimatePresence>
                {errors.email && (
                  <motion.div
                    className="error-popup"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {errors.email}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="input-container">
              <label htmlFor="message">Share Your Thoughts</label>
              <textarea
                id="message"
                name="message"
                placeholder="Type your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                disabled={showPopup || isLoading || isSending}
                autoComplete="off" // Add autocomplete attribute
              ></textarea>
              <AnimatePresence>
                {errors.message && (
                  <motion.div
                    className="error-popup"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {errors.message}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button type="submit" disabled={showPopup || isLoading || isSending}>
              Contact Me
            </button>
          </form>
        )}
      </motion.section>

      {showPopup && (
        <motion.div
          className="popup"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="popup-content">
            <h3>Thank You!</h3>
            <p>Your message has been received. I'll get back to you soon.</p>
          </div>
        </motion.div>
      )}

      {isLoading && <Loader showText={false} />}
    </div>
  );
};

export default Contact;