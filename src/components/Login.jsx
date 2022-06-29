import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { auth } from '../firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
function Login(props) {
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
        zIndex: 10,
      }}
    >
      <AccountCircleIcon onClick={login} style={{ color: props.color }} />
      {}
    </div>
  );
}

export default Login;
