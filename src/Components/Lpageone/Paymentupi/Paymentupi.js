import React from 'react';
import './Paymentupi.css'
import { useNavigate } from 'react-router-dom';

const Paymentupi = () => {
  const navigate = useNavigate();
      
  const handlereturn= () => {
    navigate('/signout')
  }
    return (
        <div>
            <div className='upi1' id='upi1'>
        <header className="sticky" id='sticky'>
            <a href="./Home.css" className="logo"><img src=".//logo.png" alt='' style={{width:'190px', height:'60px',padding:'0px'}}/></a>
        <div className="bx bx-menu" id="menu-icon"> </div>
        <ul className="navbar">
          <li> <button className='upi-b' onClick={handlereturn}>Sign Out</button></li>
        </ul>
        </header>

        

        <div className='upi' id='upi'>
            <hr/>
            <p className='p1'>STEP <b>4</b> OF <b>4</b></p>
            <h1 className='upi-h1'>Set up UPI AutoPay</h1>
            <p className='p2'>You can change this recurring payment any time in your settings.</p>
            <form>
                <select className='upi-option'>
                    <optgroup >
                    <option value="" disabled selected hidden>Select your UPI app</option>
                    <option value='bhim-pay'>
                       <img alt='' src='https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/BHIM.png' className='upi-icon'/>
                        BHIM</option>
                    <option value='phone-pay'>
                      <img alt='' src='https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/PHONEPE.png' className='upi-icon'/>
                        Phone Pay</option>
                    <option value='google-pay'>
                      <img alt='' src='https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/GPAY.png' className='upi-icon'/>
                        Google Pay</option>
                    <option value='paytm'>
                       <img alt='' src='https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/PAYTM.png' className='upi-icon'/>
                        Paytm</option>
                    <option value='amazon-pay'>
                       <img alt='' src='https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/AMAZONPAY.png' className='payicon'/>
                        Amazon Pay</option>
                     </optgroup>
                </select>
            </form>
        </div>


        <div className='upi-footer'>
        <h3>Questions? Call 000-800-919-1694</h3>
      <div className='upi-footer-con'>
      <div>
        <p>FAQ</p>
        <p>Privacy</p>
        <select className='upi-lang'>
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

export default Paymentupi;