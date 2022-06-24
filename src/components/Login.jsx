import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { auth } from '../firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
function Login() {
  const login = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((re) => {
        console.log(re);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div
      style={{
        position: 'fixed',
        top: '5%',
        right: '3%',
        cursor: 'pointer',
        color: 'black',
        zIndex: 10,
      }}
    >
      <AccountCircleIcon onClick={login} />
      {}
    </div>
  );
}

export default Login;
