import React from 'react';
import './Choosepay.css'
import { useNavigate } from 'react-router-dom';

const Choosepay = () => {
  const navigate = useNavigate();

    const handlereturn = () => {
      navigate('/signout')
    }
    return (
        <div className='choosepay' id='choosepay'>
        <header className="sticky" id='sticky'>
            <span className="logo"><img src=".//logo.png" alt='' className='choosepay-logo'/></span>
        <div className="bx bx-menu" id="menu-icon"> </div>
        <ul className="navbar">
          <li> <button className='choosepay-signout' onClick={handlereturn}>Sign Out</button></li>
        </ul>
        </header>

        

        <div className='choosepay1' id='choosepay1'>
            <hr/>
            <img alt='' src='https://www.veracode.com/sites/default/files/2022-09/icon-lock-shield-interface-essential-50.svg' className='choosepay-img'/>
            <p className='choosepay-p1'>STEP <b>4</b> OF <b>4</b></p>
            <h1 className='choosepay-h1'>Choose how to pay</h1>
            <p className='choosepay-p2'>Your payment is encrypted and you can change your payment method at anytime.</p>
            <p className='choosepay-p3'>Secure for peace of mind.   Cancel easily online.</p>
            <p className='choosepay-p4'>End-to-end encrypted</p>
            <a href='./card'>
               <button className='choosepay-next'>Credit or Debit Card
                <img alt='' src='https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/VISA.png' className='payicon'/>
                <img alt='' src='https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/MASTERCARD.png' className='payicon'/>
                <img alt='' src='https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/DINERS.png' className='payicon'/>
                </button></a> <br/>
            <a href='./upi'>
            <button className='choosepay-next'>UPI AutoPay
            <img alt='' src='https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/BHIM.png' className='payicon'/>
            <img alt='' src='https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/PAYTM.png' className='payicon'/>
            <img alt='' src='https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/PHONEPE.png' className='payicon'/>
            <img alt='' src='https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/AMAZONPAY.png' className='payicon'/>
            <img alt='' src='https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/GPAY.png' className='payicon'/>
            </button></a>
        </div>


        <div className='choosepay-footer'>
        <h3>Questions? Call 000-800-919-1694</h3>
      <div className='choosepay-footer-con'>
      <div>
        <p>FAQ</p>
        <p>Privacy</p>
        <select className='choosepay-lang'>
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

export default Choosepay;