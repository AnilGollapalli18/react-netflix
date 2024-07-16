// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Signout = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const signout = async () => {
//       await new Promise((resolve) => {
//         setTimeout(() => {
//           resolve();
//         }, 1000);
//       });

//       console.log('User signed out.');
//       navigate('/');
//     };

//     signout();
//   }, [navigate]);

//   return null;
// };

// export default Signout;
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Signout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate signout
    console.log('User signed out');
    navigate('/signin');
  }, [navigate]);

  return null;
};

export default Signout;
