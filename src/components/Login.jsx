import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function Login() {
  return (
    <div
      style={{
        position: 'fixed',
        top: '5%',
        right: '3%',
        cursor: 'pointer',
        color: 'black',
      }}
    >
      <AccountCircleIcon />
    </div>
  );
}

export default Login;
