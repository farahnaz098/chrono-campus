import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';


const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="signup-container">
      <h2>Create Account</h2>
      <div className="external-login">
        <button className="google">
          <FontAwesomeIcon icon={faGoogle} /> Signup with Google
        </button>
        <p>_OR_</p>
        <button className="facebook">
          <FontAwesomeIcon icon={faFacebook} style={{ marginRight: '5px' }} /> Signup with Facebook
        </button>
      </div>
      <form>
        <div className="form-group">
          <input type="text" id="institute-name" name="institute-name" required  placeholder='Institute Name'/>
        </div>
        <div className="form-group">
          <input type="email" id="institute-email" name="institute-email" required  placeholder='Institute Email'/>
        </div>
        <div className="form-group">
        <input 
            type={showPassword ? 'text' : 'password'} 
            id="password" 
            name="password" 
            required  
            placeholder='Password'
          />
          
        </div>
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}

export default Signup;
