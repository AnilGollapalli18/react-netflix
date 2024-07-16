import React, { useRef, useState } from 'react';
import './Home.css'
import Accordion from '../Accordian/Accordian';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const title = useRef('Unlimited movies, TV shows and more')
    const watch = useRef('Watch anywhere. Cancel anytime.')
    const ready = useRef('Ready to watch? Enter your email to create or restart your membership.')

    const items = [
      {
        title: 'What is Netflix?',
        content: 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. Theres always something new to discover, and new TV shows and movies are added every wee'
      },
      {
        title: 'How much does Netflix cost?',
        content: 'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.'
      },
      {
        title: 'Where can I watch?',
        content: 'Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.    You can also download your favourite shows with the iOS or Android app. Use downloads to watch while youre on the go and without an internet connection. Take Netflix with you anywhere.'
      },
      {
        title: 'How do I cancel?',
        content: 'Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.'
      },
      {
        title: 'What can I watch on Netflix?',
        content: 'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want'
      },
      {
        title: 'Is Netflix good for kids?',
        content:'The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.'
      }
    ];

    const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleCheckEmail = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/users/check-email', {
         method: 'POST',
         headers: {
          'content-Type': 'application/json',
         },
         body: JSON.stringify({ email }),
      });


    if (response.status !== 200 ) {
      throw new Error('Failed to load users');
    }

      const data = await response.json();
      console.log(data);

      if (data.userExists) {
        navigate('/signin', { state: { email } });
      } else {
        navigate('/signup', { state: { email } });
      }
    } catch (error) {
      console.error(error); 
      setError('Failed to check email. Please try again.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Email address is invalid');
      return;
    }
    setError('');
    handleCheckEmail();
  };

  const SigninPageLink = () => {
     navigate('./signin')
  }

    return (
        <div className='home' id='home'>
        <header className="sticky" id='sticky'>
            <span className="logo"><img src=".//logo.png" alt='' className='home-img1'/></span>
        <div className="bx bx-menu" id="menu-icon"> </div>
        <ul className="navbar">
            <li><a href="#languages">
                 <select className='lang-o'>
                   <option value='en' style={{color:'black'}} >English</option>
                   <option value='hi'style={{color:'black'}} >Hindi</option>
                  </select>
                </a>
            </li>
          <li> <button className='signin-b' onClick={SigninPageLink}>Sign in</button></li>
        </ul>
     </header>
     <div className="home1" >
        <div className="home-text">
          <h1 className='home-title'>{title.current}</h1>
          <h3 className='home-watch'>{watch.current}</h3>
          <h3 className='home-ready'>{ready.current}</h3>
        </div>
        <div className='home-form'>
        <form className="home-formcon" onSubmit={handleSubmit}>
           <div className="input-container">
            <input
               type="text"
               id="home-input"
               name="email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               required
               className="home-input1"
            />
            <label htmlFor="home-input" className="floating-label">Email address</label>
             <button type="submit" className='home-gets'>Get Started</button>
            </div>
            {error && <p style={{color:'red'}}>{error}</p>}
        </form>
        </div>
      </div>


      <hr style={{padding:'2px',backgroundColor:'grey'}}></hr>


        <div className='page-2'>
        <div className='page-2text'>
        <h1 className='page2-h1'>Enjoy on your TV</h1>
        <p className='page2-p'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
        </div>

        <div className='page-2img'>
           <img alt="" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" className='page2-img1'/>
             <div className='page-2vi'>
             <video className='page2-vi1'>
               <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" />
             </video>
             </div>
        </div>
    </div>


      <hr style={{padding:'2px',backgroundColor:'grey'}}></hr>


      <div className='page-3'>
       <div className='page-3img'>
       <img alt="" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" className='page3-image1'/>
       <div className='page3-str'>
        <div>
        <img alt="" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" className='page3-vi2'/>
        </div>
         <div className="p3-std">
           <div className='p3-str'>Stranger Things</div>
           <div className='p3-dw' >Downloading...</div>
         </div>
         </div>
       </div>
      <div className='page-3con'>
       <h1 className='page3-h1'>Download your shows to watch offline</h1>
       <p className='page3-p'>Save your favourites easily and always have something to watch.</p>
       </div>
      </div>

      <hr style={{padding:'2px',backgroundColor:'grey'}}></hr>


      <div className='page-4'>
      <div className='page-4con'>
        <h1 className='page4-h1'>Watch everywhere</h1>
        <p className='page4-p'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
        </div>
        <div className='p4-imgv'>
        <img alt="" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" className='p4-img'/>
      <div>
        <video className='p4-video'>
        <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" type="video/mp4"/>
        </video>
      </div>
        </div>
      </div>

      <hr style={{padding:'2px',backgroundColor:'grey'}}></hr>

      <div className='page-5'>
        <div className='page-5img'>
        <img alt="" src="https://occ-0-4857-2186.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d" className='page5-img'/>
        </div>
        <div className='page-5con'>
        <h1 className='page5-h1'>Create profiles for kids</h1>
        <p className='page5-p'>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
        </div>
      </div>


      <hr style={{padding:'2px',backgroundColor:'grey'}}></hr>


    <div className="accordian">
      <div>
      <h1 className='acc-h1'>Frequently Asked Questions</h1>
      <Accordion items={items} />
      </div>
      <div className='form-below'>
    <p className='formbelow-p'>Ready to watch? Enter your email to create or restart your membership.</p>
    <form className='form-2'>
    <div className="input-container2">
            <input
               type="text"
               id="home-input"
               name="email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               required
               className="home-input2"
            />
            <label htmlFor="home-input" className="floating-label2">Email address</label>
             <button type="submit" className="home-gets2" >Get Started</button>
            </div>
            {error && <p style={{color:'red'}}>{error}</p>}
    </form> 

    <hr style={{padding:'2px',backgroundColor:'grey'}}></hr>


    <div className='footer1'>
        <h3 className='footer-h3-1'>Questions? Call 000-800-919-1694</h3>
      <div className='footer-con1'>
        <div className='footer-home'>
      <div>
        <p>FAQ</p>
        <p>Investor Relations</p>
        <p>Privacy</p>
        <p>Speed Test</p>
        <select className='lang-d'>
            <option value='en' style={{color:'black'}} className='l'>English</option>
            <option value='hi'style={{color:'black'}} className='l'>Hindi</option>
        </select>
        <h4 className='footer-home-h4'>Netflix India</h4>
      </div>   
        
      <div className='foot-hm'>
      <p>Help Centre</p>
      <p>Jobs</p>
      <p>Cookie Preferences</p>
      <p>Legal Notices</p>
      </div>
      </div>

    <div className='footer-home-down'>
      <div>
       <p>Account</p>
       <p>Ways to Watch</p>
       <p>Corporate Information</p>
       <p>Only on Netflix</p>
      </div>

      <div>
        <p>Media Centre</p>
        <p>Terms of Use</p>
        <p>Contact Us</p>
      </div>
      </div>
      </div>
    </div>
  </div>

    </div>
    </div>
  );
};
        

export default Home;