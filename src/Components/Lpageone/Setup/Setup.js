import React from 'react';
import './Setup.css'
import { useNavigate } from 'react-router-dom';

const Setup = () => {
  const navigate = useNavigate();

  const handlereturn = () => {
    navigate('/signin')
  }
  const handlenext = () => {
    navigate('/signup')
  }
    return (
        <div className='setup' id='setup'>
        <header className="sticky" id='sticky'>
            <a href="./Home.css" className="logo"><img src=".//logo.png" alt='' style={{width:'190px', height:'60px',padding:'0px'}}/></a>
        <div className="bx bx-menu" id="menu-icon"> </div>
        <ul className="navbar">
          <li> <button className='signin-b' onClick={handlereturn}>Sign in</button></li>
        </ul>
        </header>

        

        <div className='setup1' id='setup1'>
            <hr/>
            <img alt='' src='https://www.tutormandarin.net/wp-content/uploads/2017/04/Offline-School-06.png' className='setup1-img'/>
            <p className='p1'>STEP <b>1</b> OF <b>4</b></p>
            <h1 className='setup1-h1'>Finish setting up your account</h1>
            <p className='p2'>Netflix is personalised for you. Create a password to watch on any device at any time.</p>
            <button className='step-next' onClick={handlenext}>Next</button>
        </div>


        <div className='setup1-footer'>
        <h3>Questions? Call 000-800-919-1694</h3>
      <div className='setup1-footer-con'>
      <div>
        <p>FAQ</p>
        <p>Privacy</p>
        <select className='setup1-lang'>
            <option value='en' style={{color:'black'}} className='l'>English</option>
            <option value='hi'style={{color:'black'}} className='l'>Hindi</option>
        </select>
      </div>   
        
      <div>
      <p>Help Centre</p>
      <p>Cookie Preferences</p>
      </div>
      
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
    );
};

export default Setup;