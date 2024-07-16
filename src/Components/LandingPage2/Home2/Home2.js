import React from 'react';
import './Home2.css'
import Navbar from '../Navbar2/Navbar2';
import Footer from '../Footer/Footer';
import FinalDisplay from '../FinalDispaly/FinalDisplay';



const Home2 = () => {
    return (
        <div className='home2' id='home2'>
            <Navbar/>
            <div className='hero'>
                <img src='https://wallpapers.com/images/featured/money-heist-segtwbhffwy01w82.jpg' alt='' className='banner-img'/>
                <div className='hero-caption'>
                    <img src='https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABRYwssiYqFQk0AMTz6Sk2gJcynwEXm7Z63r-s6aIkwDimtUWoZefgzIsMjMumecjIZWEPE8uoixk_-Acjx57MGODKOw9AGpXTDdPwzwBjSTR2U4COxyFlrtRISIBmHYYtyuEUIvm__G6eMlm0HfP2gEJeq6LnU5O8cdpioXzGlMxJWq1c-qikw.png?r=768' alt='' className='caption-img '/>
                    <p>Discovering his ties to a secret ancient order , a young man living in modern istanbul 
                     embarks on a qust to save the city from an immortal enemy.
                    </p>
                    <div className='hero-btns'>
                        <button className='btn'><img src='https://cdn-icons-png.flaticon.com/512/0/375.png' alt=''/>Play</button>
                        <button className='btn dark-btn'><img src='https://static.vecteezy.com/system/resources/previews/005/747/906/non_2x/info-icon-template-information-icon-colorful-free-vector.jpg' alt=''/>More info</button>
                    </div>
                    <FinalDisplay/>
                </div>
                <Footer/>
            </div>
        </div>
    );
};

export default Home2;