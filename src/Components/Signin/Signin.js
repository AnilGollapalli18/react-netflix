 
import React, {useState } from 'react';
import './Signin.css'
import { useLocation, useNavigate } from 'react-router-dom';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate()
  const location = useLocation();

  useState(() => {
    if (location.state && location.state.email) {
      setEmail(location.state.email);
    }
  }, [location]);

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email));
  };
  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formErrors = {}

    if (!validateEmail(email)) {
      formErrors.email = "Please enter a valid email address.";
    }
    
    if (!validatePassword(password)) {
      formErrors.password = "Password must be at least 6 characters long.";
    }
     
    setError(formErrors);
      try {
        const response = await fetch('http://localhost:3001/api/users/signin', {
          method: 'POST',
          headers: {
            'content-Type' : 'application/json',
          },
          body: JSON.stringify({ email, password })
        });

        const data = await response.json();
  
        if (response.ok) {
          navigate('/home2');
        } else {
          setError(data.messsage, 'Invalid email or password');
        }
      } catch (error) {
        setError('Failed to sign in. Please try again.');
      }
  }
    return (
    <div className='signin' id='signin'>
        <div>
        <header className="sticky" id='sticky'>
            <span className="logo"><img src="./logo.png" alt=''  className='signin-logo'/></span>
        <div className="bx bx-menu" id="menu-icon"> </div>
        <ul className="navbar">
        </ul>
        </header>

       

       <div className='signin1'> 
           <div>
            <form className='signinform-cont'>
             <h1 className='signin-h1'>Sign in</h1>
              <div className='input-cont1-signin'>
                <input 
                  type="text" 
                  id='email-input'
                  name="email" 
                  value={email} 
                  onChange={(e => setEmail(e.target.value))}
                  required
                  className='home-email-signin'
                />
                <label htmlFor='email-input' className="floating-4label4">Email or Mobile Number</label>
                 {error.email && <span className="error">{error.email}</span>}
              </div>
              <div className='input-cont2-signin'>
                 <input 
                  type="password"
                  id='password-input' 
                  name="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className='home-password-signin'
                 />
                <label htmlFor="password-input" className="floating-5label5">Password</label>
                  {error.password && <span className="error">{error.password}</span>}
                </div>
                <div>
                  <button type="submit" className='signin-submit' onClick={handleSubmit}>Sign in</button>
                 </div> 

                   <h3 className='signin-h3'>OR</h3>
                 <button className='signin-use'>Use a Sign-in code</button>
            </form>
               {error && <p className="error">{error}</p>}
           </div>
        </div>
        
      </div>
    
      <div className='signin-footer'>
        <div className='signin-f'>
        <p>Forgot Password ?</p>
        <p className='signin-check'><input type='checkbox'/> <label htmlFor=''>Remember Me</label></p>
        <p className='signin-new'>New to Netflix? <button onClick={() => navigate('/signup')} className='signin-f-button'>Sign up now.</button></p>
        <p className='signin-learn'>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</p> 
        </div>  
          <h4 className='signin-footer-h4'>Questions? Call 000-800-919-1694</h4>
            <div className='signin-footer-con'>
              <div className='signin-footer-top'>
               <div>
                 <p>FAQ</p>
                 <p>Privacy</p>
                 <select className='signin-lang'>
                   <option value='en' style={{color:'black'}} className='l'>English</option>
                   <option value='hi'style={{color:'black'}} className='l'>Hindi</option>
                 </select>
                </div>   
       
                <div className='signin-middle'>
                  <p>Help Centre</p>
                  <p>Cookie Preferences</p>
                </div>

               </div>

               <div className='signin-footer-down'>
                <div>
                 <p>Netflix Shop</p>
                 <p>Corporate Information</p>
                </div>

                <div>
                  <p>Terms of Use</p>
                </div>
                </div>
            </div>
      </div>

    </div>
    );
};

export default Signin;

