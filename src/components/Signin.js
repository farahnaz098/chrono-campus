import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import welcomeImg from '../images/welcome.png';


 const Signin = () => {
    const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
    return(

           <div className="signin-container">
            <div className="welcome-back">
                <h2>Welcome Back!</h2>
                {/* Add your cartoon character or image here */}
        <img src={welcomeImg} alt=" " />
            </div>
            <form>
        <div className="form1-group">
          <input type="email" id="institute-email" name="institute-email" required  placeholder='Email'/>
        </div>
        <div className="form1-group">
        <input 
            type={showPassword ? 'text' : 'password'} 
            id="password" 
            name="password" 
            required  
            placeholder='Password'
          />
          
        </div>
        <button type="submit-login">Login</button>
      </form>
    </div>
    );
}
 export default Signin;