import React from 'react';
import './Navbar2.css'

const Navbar2 = () => {
    return (
        <div className='navbar2'>
            <div className='navbar2-left'>
                <img src='.//logo.png' alt='' style={{width:'120px'}}/>
                <ul>
                    <li><a href='#home2' className='navbar2-anchor'>Home</a></li>
                    <li><a href='#10770' className='navbar2-anchor'>TV Shows</a></li>
                    <li><a href='#movie' className='navbar2-anchor'>Movies</a></li>
                    <li><a href='#np' className='navbar2-anchor'>New & Popular</a></li>
                    <li><a href='#mylist' className='navbar2-anchor'>My List</a></li>
                    <li><a href='#bbl' className='navbar2-anchor'>Browse By Languages</a></li>
                </ul>
            </div>
            <div className='navbar2-right'>
                <img src='https://www.flaticon.com/free-icon/search_11741045?term=search&page=1&position=19&origin=tag&related_id=11741045' alt='' className='nav2-icons'/>
                <p>Children</p>
                <img src='https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3JtNTM1LW5vdGktMDEtYS5wbmc.png' alt='' className='nav2-icons'/>
                <div className='navbar2-profile'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'alt=''className='nav2-profile'/>
                    <img src='https://static-00.iconduck.com/assets.00/select-arrow-icon-512x287-wvt33raz.png'alt='' className='nav2-drop' />
                    <div className='dropdown'>
                       <p>Sign Out of Netflix</p> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar2;
