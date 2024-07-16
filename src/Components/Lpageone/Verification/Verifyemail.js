import React from 'react';
import './Verifyemail.css'
import { useNavigate } from 'react-router-dom';

const Verifyemail = () => {

  const navigate = useNavigate();
   
  const handlenext = () => {
    navigate('/planc')
  }
  
  const handlereturn = () => {
    navigate('/signout')
  }
    return (
        <div className='verifyemail' id='verifyemail'>
            <div>
        <header className="sticky" id='sticky'>
            <span className="logo"><img src=".//logo.png" alt='' className='verify-logo'/></span>
        <div className="bx bx-menu" id="menu-icon"> </div>
        <ul className="navbar">
          <li> <button className='verify-b' onClick={handlereturn}>Sign Out</button></li>
        </ul>
        </header>

        

        <div className='verify1' id='verify1'>
            <hr className='verify-hr'/>
            <img alt='' src='https://images.squarespace-cdn.com/content/v1/5eb5805091ee9764247d5c9d/1589376064467-FUF6WLH87F975C61B8OC/Artboard+14+copy+2%403x.png?format=500w' className='verify-img'/>
            <p className='verify-p1'>STEP <b>1</b> OF <b>3</b></p>
            <h1 className='verify-h1'>Great, now let us verify your email</h1>
            <p className='verify-p3'>Click the link we sent to <b>anilnaniage21@gmail.com</b> to verify.</p>
            <p className='verify-p2'>Verifying your email will improve account security and help you receive important Netflix communications.</p>
            <button className='verify-next' onClick={handlenext} >Skip</button>
        </div>


        <div className='verify-footer'>
        <h3 className='verify-footer-h3'>Questions? Call 000-800-919-1694</h3>
      <div className='verify-footer-con'>
        <div className='verify-footer-top'>
      <div>
        <p>FAQ</p>
        <p>Privacy</p>
        <select className='verify-lang'>
            <option value='en' style={{color:'black'}} className='l'>English</option>
            <option value='hi'style={{color:'black'}} className='l'>Hindi</option>
        </select>
      </div>   
        
      <div className='verify-footer-mid'>
      <p>Help Centre</p>
      <p>Cookie Preferences</p>
      </div>
      </div>
      
        <div className='verify-footer-down'>
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
    );
};

export default Verifyemail;