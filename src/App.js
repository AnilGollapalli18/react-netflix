import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Lpageone/Home/Home';
import Setup from './Components/Lpageone/Setup/Setup';
import Signin from './Components/Signin/Signin';
import Signup from './Components/Signup/Signup';
import Verifyemail from './Components/Lpageone/Verification/Verifyemail';
import Signout from './Components/Signout/Signout';
import Planc from './Components/Lpageone/Plan/Planc';
import Chooseplan from './Components/Lpageone/Chooseplan/Chooseplan';
import Choosepay from './Components/Lpageone/Choosepay/Choosepay';
import Card from './Components/Lpageone/Paymentcard/Paymentcard';
import Paymentupi from './Components/Lpageone/Paymentupi/Paymentupi';
import Home2 from './Components/LandingPage2/Home2/Home2';




const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/step1' element={<Setup/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/verifyemail' element={<Verifyemail/>}/>
          <Route path='/signout' element={<Signout/>}/>
          <Route path='/planc' element={<Planc/>}/>
          <Route path='/chooseplan' element={<Chooseplan/>}/>
          <Route path='/choosepay' element={<Choosepay/>}/>
          <Route path='/card' element={<Card/>}/>
          <Route path='/upi' element={<Paymentupi/>}/>
          <Route path='/home2' element={<Home2/>}/>
          {/* <Route path='/genres' element={<Genres/>}/>
          <Route path='/displaygenre' element={<DispalyGenre/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;