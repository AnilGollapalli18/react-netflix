import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Signup.css'
// import axios from 'axios';

const Signup = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state && location.state.email) {
      setEmail(location.state.email);
    }
  }, [location]);

  const validate = () => {
    const newErrors = {};
    if (!email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email address is invalid';
    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/api/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        setMessage('Signup successful!');
        navigate('/verifyemail');
      } else {
        const errorData  =await response.json();
        setMessage(errorData.message);    //check this signup failed
      }
    } catch (error) {
      setMessage('Signup failed!');
    }
  };


  const handlereturn = () => {
    navigate('/signin')
  }
   
    return (
        <div className='signup' id='signup'>
         <div>
             <div>
        <header className="sticky" id='sticky'>
            <span className="logo"><img src=".//logo.png" alt='' className='signup-logo'/></span>
        <div className="bx bx-menu" id="menu-icon"> </div>
        <ul className="navbar">
          <li> <button className='signup-signin' onClick={handlereturn}>Sign in</button></li>
        </ul>
        </header>

        

        <div className='signup1' id='signup1'>
            <hr className='signup-hr'/>
            <p className='signup-p1'>STEP <b>1</b> OF <b>4</b></p>
            <h1 className='signup-h1'>Create a password to start your membership</h1>
            <p className='signup-p2'>Just a few more steps and you're done! We hate paperwork, too.</p>

            <form onSubmit={handleSubmit} >
               <input
                type='text'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Email'
                required
                readOnly
                className='signup-input'
               /> 
            {errors.email && <p className="error">{errors.email}</p>}
           <br/>
               <input
               type='text'
               name='password'
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               placeholder='Add a Password'
               required
               className='signup-input'
               />
               {errors.password && <p className="error">{errors.password}</p>}
               <br/>
          <button type='submit' className='signup-button'> Next</button>
          {message && <p className="message">{message}</p>}
            </form>
        </div>

  
      <div className='signup-footer'>
        <h3 className='signup-h3'>Questions? Call 000-800-919-1694</h3>
      <div className='signup-foot-con'>
      <div className='signup-footer1'>
      <div>
        <p>FAQ</p>
        <p>Privacy</p>
        <select className='signup-lang'>
            <option value='en' style={{color:'black'}} >English</option>
            <option value='hi'style={{color:'black'}} >Hindi</option>
        </select>
      </div>   
        
      <div className='signup-foot-in'>
      <p>Help Centre</p>
      <p>Cookie Preferences</p>
      </div>
      </div>

      <div className='signup-footer2'>
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
        </div>
        </div>
    );
};

export default Signup;