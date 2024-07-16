import React from 'react';
import './Paymentcard.css'
import { useNavigate } from 'react-router-dom';

const Card = () => {
    // const [cardnumber,setCardnumber] = useState('')
    const navigate = useNavigate();

    const handlereturn = () => {
      navigate('/signout')
    }
    return (
        <div className='card' id='card'>
        <header className="sticky" id='sticky'>
            <span className="logo"><img src=".//logo.png" alt='' className='paymentcard-logo'/></span>
        <div className="bx bx-menu" id="menu-icon"> </div>
        <ul className="navbar">
          <li> <button className='card-signout' onClick={handlereturn}>Sign Out</button></li>
        </ul>
        </header>

        

        <div className='card1' id='card1'>
            <hr/>
            <p className='card-p1'>STEP <b>4</b> OF <b>4</b></p>
            <h1 className='card-h1'>Set up your credit or debit card</h1>

             <form>
             <input
              type='text'
              name='number'
            //   value={cardnumber}
              placeholder='Card number'
              required
              className='card-input'
             /> <br/>
              <input
              type='text'
              name='number'
            //   value={cardnumber}
              placeholder='Expiration date'
              required
              className='card-inp'
             />
             <input
              type='text'
              name='number'
            //   value={cardnumber}
              placeholder='CVV'
              required
              className='card-inp'
             /> <br/>
             <input
              type='text'
              name='name'
            //   value={cardnumber}
              placeholder='Name on Card'
              required
              className='card-input'
             />
             </form>
             <p className='card-next1'>199/month<a href='./chooseplan'>Change</a></p>
            
            <p className='card-p2'>Any payment above ₹ 2000 shall need additional authentication.</p>
            <p className='card-p2'>By checking the checkbox below, you agree to our Terms of Use, Privacy Statement, and that you are over 18. Netflix will automatically continue your membership and charge the membership fee (currently ₹199/month) to your payment method until you cancel. You may cancel at any time to avoid future charges.</p>
            
            <p className='card-checkb'><input type='checkbox' className='card-check'/> I agree</p>
           
            <button className='card-next2'>Start Membership</button>

            <p className='card-p2'>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</p>

        </div>


        <div className='card-footer'>
        <h3>Questions? Call 000-800-919-1694</h3>
      <div className='card-footer-con'>
      <div>
        <p>FAQ</p>
        <p>Privacy</p>
        <select className='card-lang'>
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

export default Card;