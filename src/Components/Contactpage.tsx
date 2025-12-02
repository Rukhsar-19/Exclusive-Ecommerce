import React from 'react'
import "../Styles/Contactpage.css";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

// Yup Validation Schema
export const contactSchema = Yup.object({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .required("Full name is required"),

  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),

  subject: Yup.string()
    .min(3, "Subject must be at least 3 characters")
    .required("Subject is required"),

  message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});

// Initial form values
const initialValues = {
  name: '',
  email: '',
  subject: '',
  message: ''
};

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contactpage = () => {
  // Handle form submission
  const handleSubmit = (values: FormValues, { setSubmitting, resetForm }: any) => {
    console.log('Form submitted:', values);
    
    // Here you would typically send data to your backend
    // Example API call:
    // fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(values),
    // })
    
    setTimeout(() => {
      alert('Message sent successfully!');
      resetForm();
      setSubmitting(false);
    }, 1000);
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>Contact Us</h2>
        
        {/* Formik Form */}
        <Formik
          initialValues={initialValues}
          validationSchema={contactSchema}
          onSubmit={handleSubmit}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
            <form onSubmit={handleSubmit} className='contact-form'>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12 mb-3">
                  <label htmlFor="name">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="form-control" 
                    placeholder="Your name" 
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name='name'
                    disabled={isSubmitting}
                  />
                  {errors.name && touched.name && (
                    <p className="error" style={{ color: "red", fontSize: 14, marginTop: "3px" }}>
                      {errors.name}
                    </p>
                  )}
                </div>
                
                <div className="col-lg-6 col-md-6 col-12 mb-3">
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="form-control" 
                    placeholder="Your email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name='email'
                    disabled={isSubmitting}
                  />
                  {errors.email && touched.email && (
                    <p className="error" style={{ color: "red", fontSize: 14, marginTop: "3px" }}>
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>
              
              <div className="row">
                <div className="col-lg-12 mb-3">
                  <label htmlFor="subject">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="form-control" 
                    placeholder="Subject"
                    value={values.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name='subject'
                    disabled={isSubmitting}
                  />
                  {errors.subject && touched.subject && (
                    <p className="error" style={{ color: "red", fontSize: 14, marginTop: "3px" }}>
                      {errors.subject}
                    </p>
                  )}
                </div>
              </div>
              
              <div className="row">
                <div className="col-lg-12 mb-3">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    className="form-control" 
                    placeholder="Write your message..."
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name='message'
                    rows={5}
                    disabled={isSubmitting}
                  ></textarea>
                  {errors.message && touched.message && (
                    <p className="error" style={{ color: "red", fontSize: 14, marginTop: "3px" }}>
                      {errors.message}
                    </p>
                  )}
                </div>
              </div>
              
              <div className="row">
                <div className="col-lg-12">
                  <button 
                    type="submit" 
                    className="redbutton"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default Contactpage
