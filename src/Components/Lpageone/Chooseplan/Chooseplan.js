import React, { useEffect, useMemo, useState } from 'react';
import './Chooseplan.css'
import { useNavigate } from 'react-router-dom';

const Chooseplan = () => {

    const navigate = useNavigate();

    const handlereturn = () => {
      navigate('/signout')
    }

    const handlenext = () => {
        navigate('/signin')
    } 
    const [selectedPlan, setSelectedPlan] = useState(null);
    const plans = useMemo(() => [
        {
            name: 'Premium',
            standard:'4K + HDR',
            price: 649,
            quality: 'Best',
            resolution: '4K (Ultra HD) + HDR',
            audio: 'Included',
            devices: 'TV, computer, mobile phone, tablet',
            streams: 4,
            downloads: 6,
        },
        {
            name: 'Standard',
            standard:'1080p',
            price: 499,
            quality: 'Great',
            resolution: '1080(Full HD)',
            audio: '-',
            devices: 'TV, computer, mobile phone, tablet',
            streams: 2,
            downloads: 2,
        },
        {
            name: 'Basic',
            standard:'720p',
            price: 199,
            quality: 'Good',
            resolution: '720p (HD)',
            audio: '-',
            devices: 'TV, computer, mobile phone, tablet',
            streams: 1,
            downloads: 1,
        },
        {
            name: 'Mobile',
            standard:'480p',
            price: 149,
            quality: 'Fair',
            resolution: '480p',
            audio: '-',
            devices: 'Mobile phone, tablet',
            streams: 1,
            downloads: 1,
        },
    ], []);


    useEffect(() => {
        if(!selectedPlan) {
            setSelectedPlan(plans[0])
        }
    },[selectedPlan, plans])

    const handleSelectPlan = (plan) => {
        setSelectedPlan(plan);
    };

    return (
        <div className='chooseplan' id='chooseplan'>
            <div>
        <header className="sticky" id='sticky'>
            <span className="logo"><img src=".//logo.png" alt='' className='chooseplan-logo'/></span>
        <div className="bx bx-menu" id="menu-icon"> </div>
        <ul className="navbar">
          <li> <button className='cplan-signout' onClick={handlereturn}>Sign Out</button></li>
        </ul>
        </header>

        

        <div className='cplan' id='cplan'>
            <hr className='cplan-hr'/>
            <p className='cplan-p1'>STEP <b>1</b> OF <b>4</b></p>
            <h1 className='cplan-h1'>Choose the plan that’s right for you</h1>
              
             <div className='chooseplans'>
                <div className=''>
                    <div className='choosing'>
                    {plans.map((plan,index) => {
                        return(
                        <div key={index} className={`premium plan ${selectedPlan === plan ? 'selected': ''}`} onClick={() => handleSelectPlan(plan)}>
                            <div className='cblue'>
                    <h3>{plan.name}</h3>
                    <h3>{plan.standard}</h3>
                    </div>
                    <p className='uniq'>Monthly Price</p>
                    <p><b>{plan.price}</b></p>
                    <hr/>
                    <p className='uniq'>Video and sound quality</p>
                    <p><b>{plan.quality}</b></p>
                    <hr/>
                    <p className='uniq'>Resolution</p>
                    <p><b>{plan.resolution}</b></p>
                    <hr/>
                    <p className='uniq'>Spatial audio (immersive sound)</p>
                    <p><b>{plan.audio}</b></p>
                    <hr/>
                    <p className='uniq'>Supported devices</p>
                    <p><b>{plan.devices}</b></p>
                    <hr/>
                    <p className='uniq'>Devices your household can watch at the same time</p>
                    <p><b>{plan.streams}</b></p>
                    <hr/>
                    <p className='uniq'>Download devices</p>
                    <p><b>{plan.downloads}</b></p>
                        </div>
                        )
                    })}
                    </div>
                 </div>
                </div>
                 {selectedPlan && (
                    <div className='selected-plan'>
                        <h2>Selected Plan: {selectedPlan.name}</h2>
                    <button className='selected-plan-button'>
                        Monthly Price: {selectedPlan.price}
                    </button>
                    </div>
                 )}

             </div>


            <p className='cplan-p3'>HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content is available in all resolutions. See our Terms of Use for more details.</p>
            <p className='cplan-p2'>Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard, and 1 with Basic and Mobile.</p>
            <button className='cplan-next' onClick={handlenext}>Next</button>
        </div>


        <div className='cplan-footer'>
        <h3 className='cplan-footer-h3'>Questions? Call 000-800-919-1694</h3>
      <div className='cplan-footer-con'>
        <div className='cplan-footer-top'>
      <div>
        <p>FAQ</p>
        <p>Privacy</p>
        <select className='cplan-lang'>
            <option value='en' style={{color:'black'}} className='l'>English</option>
            <option value='hi'style={{color:'black'}} className='l'>Hindi</option>
        </select>
      </div>   
        
      <div>
      <p>Help Centre</p>
      <p>Cookie Preferences</p>
      </div>
      </div>

    <div className='cplan-footer-down'>
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

export default Chooseplan;