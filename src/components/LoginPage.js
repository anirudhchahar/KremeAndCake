import React from 'react';
import LoginForm from './LoginForm';
import './LoginForm.css'; // Import CSS file for LoginForm

const LoginPage = () => {
  const handleLogin = (formData) => {
    // Here you can handle form submission, such as sending data to an API
    console.log('Login form submitted:', formData);
    // For simplicity, we'll just log the form data to the console
  };

  return (
    <div className="CAKE-Home">
     
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;
