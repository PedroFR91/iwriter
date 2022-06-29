import React, { useState } from 'react';
import { useFullScreenHandle } from 'react-full-screen';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import CenterFocusStrongIcon from '@mui/icons-material/CenterFocusStrong';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import ComputerIcon from '@mui/icons-material/Computer';

function Menu(props) {
  const handle = useFullScreenHandle();

  const [isClicked, setIsClicked] = useState(false);
  function toggleClick() {
    setIsClicked(!isClicked);
    if (!isClicked) {
      handle.enter();
    } else {
      handle.exit();
    }
  }

  const [isHoveringFS, setIsHoveringFS] = useState(false);

  const handleMouseEnterFS = () => {
    setIsHoveringFS(true);
  };

  const handleMouseLeaveFS = () => {
    setIsHoveringFS(false);
  };
  const [isHoveringFC, setIsHoveringFC] = useState(false);

  const handleMouseEnterFC = () => {
    setIsHoveringFC(true);
  };

  const handleMouseLeaveFC = () => {
    setIsHoveringFC(false);
  };

  const [isHoveringAI, setIsHoveringAI] = useState(false);

  const handleMouseEnterAI = () => {
    setIsHoveringAI(true);
  };

  const handleMouseLeaveAI = () => {
    setIsHoveringAI(false);
  };

  const [isHoveringIM, setIsHoveringIM] = useState(false);

  const handleMouseEnterIM = () => {
    setIsHoveringIM(true);
  };

  const handleMouseLeaveIM = () => {
    setIsHoveringIM(false);
  };
  return (
    <div
      style={{
        position: 'fixed',
        bottom: '5%',
        left: '3%',
        zIndex: 10,
      }}
    >
      <div
        className={`fullscreen ${
          isClicked ? 'red' : isHoveringFS ? 'dark' : 'darklight'
        }`}
        onClick={() => props.toggleClick(props.isClicked)}
        onMouseEnter={handleMouseEnterFS}
        onMouseLeave={handleMouseLeaveFS}
      >
        <div
          style={{
            marginRight: '15px',
          }}
        >
          <OpenInFullIcon />
        </div>
        <div> F11</div>
      </div>
      <div
        style={{
          display: 'flex',
          width: '150px',
          cursor: 'pointer',
          marginTop: '20px',
          color: isHoveringFC ? '#5b5c65' : '#5b5c6580',
        }}
        onMouseEnter={handleMouseEnterFC}
        onMouseLeave={handleMouseLeaveFC}
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
          cursor: 'pointer',
          marginTop: '20px',
          color: isHoveringAI ? '#5b5c65' : '#5b5c6580',
        }}
        onMouseEnter={handleMouseEnterAI}
        onMouseLeave={handleMouseLeaveAI}
      >
        <div
          style={{
            marginRight: '15px',
          }}
        >
          <RecordVoiceOverIcon />
        </div>
        <div>LECTOR IA</div>
      </div>
      <div
        className={`inmersion ${props.isOpen ? 'red' : ''}`}
        onClick={() => props.toggleView(props.isOpen)}
        style={{ color: isHoveringIM ? '#5b5c65' : '#5b5c6580' }}
        onMouseEnter={handleMouseEnterIM}
        onMouseLeave={handleMouseLeaveIM}
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
