import React from 'react';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import CenterFocusStrongIcon from '@mui/icons-material/CenterFocusStrong';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import ComputerIcon from '@mui/icons-material/Computer';
function Menu() {
  return (
    <div style={{ position: 'absolute', bottom: '5%', left: '3%' }}>
      <div
        style={{
          display: 'flex',
          width: '150px',
        }}
      >
        <div style={{ marginRight: '15px' }}>
          <OpenInFullIcon />
        </div>
        <div> F11</div>
      </div>
      <div
        style={{
          display: 'flex',
          width: '150px',
        }}
      >
        <div style={{ marginRight: '15px' }}>
          <CenterFocusStrongIcon />
        </div>
        <div>FOCUS</div>
      </div>
      <div
        style={{
          display: 'flex',
          width: '150px',
        }}
      >
        <div style={{ marginRight: '15px' }}>
          <RecordVoiceOverIcon />
        </div>
        <div>LECTOR IA</div>
      </div>
      <div
        style={{
          display: 'flex',
          width: '150px',
        }}
      >
        <div style={{ marginRight: '15px' }}>
          <ComputerIcon />
        </div>
        <div>INMERSIÓN</div>
      </div>
    </div>
  );
}

export default Menu;
