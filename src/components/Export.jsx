import React from 'react';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
function Export() {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: '5%',
        right: '3%',
        display: 'flex',
        cursor: 'pointer',
        color: 'black',
        zIndex: 10,
      }}
    >
      <div style={{ marginRight: '15px' }}>Export</div>
      <div>
        <SystemUpdateAltIcon />
      </div>
    </div>
  );
}

export default Export;
