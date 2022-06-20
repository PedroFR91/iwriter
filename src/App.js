import Export from './components/Export';
import Login from './components/Login';
import Text from './components/Text';
import { useState, useRef } from 'react';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import CenterFocusStrongIcon from '@mui/icons-material/CenterFocusStrong';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import ComputerIcon from '@mui/icons-material/Computer';
import Inmersion from './components/Inmersion';

import { FullScreen, useFullScreenHandle } from 'react-full-screen';

function App() {
  const [color, setColor] = useState('black');
  const [backcolor, setBackcolor] = useState('white');

  const [isOpen, setIsOpen] = useState(false);
  function toggleView() {
    setIsOpen(!isOpen);
  }

  const [isActive, setIsActive] = useState(false);

  function toggleAtive() {
    setIsActive(!isActive);
  }

  const handle = useFullScreenHandle();

  return (
    <FullScreen handle={handle}>
      <div className='App' style={{ color: color, backgroundColor: backcolor }}>
        <div
          style={{ position: 'fixed', top: '5%', left: '3%', color: 'black' }}
        >
          i-Writer
        </div>
        <div
          style={{
            position: 'fixed',
            bottom: '5%',
            left: '3%',
            color: 'black',
          }}
        >
          <div
            style={{
              display: 'flex',
              width: '150px',
              cursor: 'pointer',
              marginTop: '20px',
            }}
            onClick={handle.enter}
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
              cursor: 'pointer',
              marginTop: '20px',
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
              cursor: 'pointer',
              marginTop: '20px',
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
              cursor: 'pointer',
              marginTop: '20px',
            }}
            onClick={toggleView}
          >
            <div style={{ marginRight: '15px' }}>
              <ComputerIcon />
            </div>
            <div>INMERSIÓN</div>
          </div>
        </div>
        <Export />
        <Login />
        <Text />
        {isOpen && <Inmersion />}
      </div>
    </FullScreen>
  );
}

export default App;
