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
  const handle = useFullScreenHandle();
  const [color, setColor] = useState('#5B5C65');
  const [backcolor, setBackcolor] = useState('#FDFDFD');

  const [isOpen, setIsOpen] = useState(false);
  function toggleView() {
    setIsOpen(!isOpen);
  }
  const [isClicked, setIsClicked] = useState(false);
  function toggleClick() {
    setIsClicked(!isClicked);
    if (!isClicked) {
      handle.enter();
    } else {
      handle.exit();
    }
  }

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
            className={`fullscreen ${isClicked ? 'red' : 'black'}`}
            onClick={toggleClick}
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
            className={`inmersion ${isOpen ? 'red' : ''}`}
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
        {isOpen && (
          <div className='inmersion-container'>
            <div
              style={{
                width: '95%',
                margin: '2px auto',
                height: '16%',
                borderBottom: '1px solid black',
              }}
            >
              <div>Fuente</div>
              <div></div>
            </div>
            <div
              style={{
                width: '95%',
                margin: '2px auto',
                height: '16%',
                borderBottom: '1px solid black',
              }}
            >
              <div>Sonido de teclado</div>
              <div></div>
            </div>
            <div
              style={{
                width: '95%',
                margin: '2px auto',
                height: '16%',
                borderBottom: '1px solid black',
              }}
            >
              <div>Ambientación</div>
              <div></div>
            </div>
            <div
              style={{
                width: '95%',
                margin: '2px auto',
                height: '32%',
                borderBottom: '1px solid black',
              }}
            >
              <div style={{ marginBottom: '10px' }}>Estilos estáticos</div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-evenly',
                  marginBottom: '10px',
                }}
              >
                <div
                  onClick={(e) => {
                    setColor('#5B5C65');
                    setBackcolor('#FDFDFD');
                  }}
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    backgroundColor: '#fdfdfd',
                  }}
                ></div>
                <div
                  onClick={(e) => {
                    setColor('#5B5C65');
                    setBackcolor('#FDFDFD');
                  }}
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    backgroundColor: '#fee8d3',
                  }}
                ></div>
                <div
                  onClick={(e) => {
                    setColor('#5B5C65');
                    setBackcolor('#FDFDFD');
                  }}
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    backgroundColor: '#f2f2f7',
                  }}
                ></div>
                <div
                  onClick={(e) => {
                    setColor('#5B5C65');
                    setBackcolor('#FDFDFD');
                  }}
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    backgroundColor: '#fef7cf',
                  }}
                ></div>
                <div
                  onClick={(e) => {
                    setColor('#5B5C65');
                    setBackcolor('#FDFDFD');
                  }}
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    backgroundColor: '#d7f7c6',
                  }}
                ></div>
                <div
                  onClick={(e) => {
                    setColor('#5B5C65');
                    setBackcolor('#FDFDFD');
                  }}
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    backgroundColor: '#d8fbee',
                  }}
                ></div>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-evenly',
                  marginBottom: '10px',
                }}
              >
                <div
                  onClick={(e) => {
                    setColor('#FDFDFD');
                    setBackcolor('#5B5C65');
                  }}
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    backgroundColor: '#5b5c65',
                  }}
                ></div>
                <div
                  onClick={(e) => {
                    setColor('#FDFDFD');
                    setBackcolor('#d37f68');
                  }}
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    backgroundColor: '#d37f68',
                  }}
                ></div>
                <div
                  onClick={(e) => {
                    setColor('#FDFDFD');
                    setBackcolor('#9ea49f');
                  }}
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    backgroundColor: '#9ea49f',
                  }}
                ></div>
                <div
                  onClick={(e) => {
                    setColor('#FDFDFD');
                    setBackcolor('#f8b90a');
                  }}
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    backgroundColor: '#f8b90a',
                  }}
                ></div>
                <div
                  onClick={(e) => {
                    setColor('#FDFDFD');
                    setBackcolor('#67b65b');
                  }}
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    backgroundColor: '#67b65b',
                  }}
                ></div>
                <div
                  onClick={(e) => {
                    setColor('#FDFDFD');
                    setBackcolor('#47b9b6');
                  }}
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    backgroundColor: '#47b9b6',
                  }}
                ></div>
              </div>
            </div>
            <div
              style={{
                width: '95%',
                margin: '2px auto',
                height: '16%',
                borderBottom: '1px solid black',
              }}
            >
              <div>Estilos dinámicos</div>
              <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <div
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    backgroundColor: '#47b9b6',
                  }}
                ></div>
                <div
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    backgroundColor: '#47b9b6',
                  }}
                ></div>
                <div
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    backgroundColor: '#47b9b6',
                  }}
                ></div>
                <div
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    backgroundColor: '#47b9b6',
                  }}
                ></div>
                <div
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    backgroundColor: '#47b9b6',
                  }}
                ></div>
                <div
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    backgroundColor: '#47b9b6',
                  }}
                ></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </FullScreen>
  );
}

export default App;
