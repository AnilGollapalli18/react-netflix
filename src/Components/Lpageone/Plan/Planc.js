import React from 'react';
import './Planc.css'
import { useNavigate } from 'react-router-dom';

const Planc = () => {

    const navigate = useNavigate();

    const handlenext = () => {
        navigate('/chooseplan')
    } 
    const handlereturn = () => {
        navigate('/signout')
    }

    return (
        <div className='planc' id='planc'>
            <div>
        <header className="sticky" id='sticky'>
            <span className="logo"><img src=".//logo.png" alt='' className='planc-logo'/></span>
        <div className="bx bx-menu" id="menu-icon"> </div>
        <ul className="navbar">
          <li> <button className='plan-signout'onClick={handlereturn}>Sign Out</button></li>
        </ul>
        </header>

        

        <div className='plan' id='plan'>
            <hr/>
            <img alt='' src='https://5.imimg.com/data5/BD/AR/GLADMIN-25100507/customs-clearance-250x250.jpg' className='plan-img'/>
            <p className='plan-p1'>STEP <b>1</b> OF <b>4</b></p>
            <h1 className='plan-h1'>Choose your plan.</h1>
            <p className='plan-p3'>
                <img alt='' src='https://static.vecteezy.com/system/resources/previews/017/667/331/non_2x/checkmark-icon-raster-illustration-on-white-background-vector.jpg' className='plan-icon'/>
                No commitments, cancel anytime.</p>
            <p className='plan-p2'>
                <img alt='' src='https://static.vecteezy.com/system/resources/previews/017/667/331/non_2x/checkmark-icon-raster-illustration-on-white-background-vector.jpg' className='plan-icon'/>
                Everything on Netflix for one low price.</p>
            <p className='plan-p4'>
                <img alt='' src='https://static.vecteezy.com/system/resources/previews/017/667/331/non_2x/checkmark-icon-raster-illustration-on-white-background-vector.jpg' className='plan-icon'/>
                No ads and no extra fees. Ever.</p>
            <button className='plan-next' onClick={handlenext}>Next</button>
        </div>


        <div className='plan-footer'>
        <h3>Questions? Call 000-800-919-1694</h3>
      <div className='plan-footer-con'>
      <div>
        <p>FAQ</p>
        <p>Privacy</p>
        <select className='plan-lang'>
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
        </div>
    );
};

export default Planc;