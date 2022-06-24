import Export from './components/Export';
import Login from './components/Login';
import Text from './components/Text';
import { useState, useRef } from 'react';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import CenterFocusStrongIcon from '@mui/icons-material/CenterFocusStrong';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import ComputerIcon from '@mui/icons-material/Computer';
import Inmersion from './components/Inmersion';
import './assets/backgrounds/StarryNight.css';
import './assets/backgrounds/NearMoon.css';
import './assets/backgrounds/HallOfTime.css';
import './assets/backgrounds/EndlessVoyage.css';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import StarryNights from './components/StarryNights';
import NearMoon from './components/NearMoon';
import HallOfTime from './components/HallOfTime';
import EndlessVoyage from './components/EndlessVoyage';

function App() {
  const handle = useFullScreenHandle();
  const [color, setColor] = useState('#5B5C65');
  const [backcolor, setBackcolor] = useState('#FDFDFD');

  const [isOpen, setIsOpen] = useState(false);
  function toggleView() {
    setIsOpen(!isOpen);
    setShowFonts(false);
  }
  const [font, setFont] = useState('Lexend Deca');
  function selectFont() {
    setFont('Lora');
    setShowFonts(false);
  }
  const [showFonts, setShowFonts] = useState(false);

  function viewFonts() {
    setShowFonts(true);
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
  const [starry, setStarry] = useState(false);

  function viewStarry(e) {
    e.preventDefault();
    setBackcolor('transparent');
    setColor('#fdfdfd');
    setStarry(true);
    setMoon(false);
    setHall(false);
    setVoyage(false);
  }
  const [moon, setMoon] = useState(false);

  function viewMoon(e) {
    e.preventDefault();
    setBackcolor('transparent');
    setMoon(true);
    setStarry(false);
    setHall(false);
    setVoyage(false);
  }
  const [hall, setHall] = useState(false);

  function viewHall(e) {
    e.preventDefault();
    console.log('ey');
    setBackcolor('transparent');
    setHall(true);
    setStarry(false);
    setMoon(false);
    setVoyage(false);
  }
  const [voyage, setVoyage] = useState(false);

  function viewVoyage(e) {
    e.preventDefault();
    console.log('ey voyage');
    setBackcolor('transparent');
    setVoyage(true);
    setStarry(false);
    setMoon(false);
    setHall(false);
  }

  return (
    <FullScreen handle={handle}>
      <div
        className='App'
        style={{
          color: color,
          background: backcolor,
        }}
      >
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
            zIndex: 10,
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
          <div className='inmersion-container dark'>
            <div
              style={{
                width: '95%',
                margin: '2px auto',
                height: '16%',
                borderBottom: '1px solid black',
              }}
            >
              <div>Fuente</div>
              <div onClick={viewFonts}>{font}</div>
              {showFonts && (
                <div className='font-container'>
                  <ul
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <li
                      style={{
                        color: 'black',
                        width: '90%',
                        height: '40px',
                        margin: '20px',
                        borderBottom: '1px solid black',
                      }}
                      onClick={selectFont}
                    >
                      Lora
                    </li>
                    <li
                      style={{
                        color: 'black',
                        width: '90%',
                        height: '40px',
                        margin: '20px',
                        borderBottom: '1px solid black',
                      }}
                      onClick={selectFont}
                    >
                      Domine
                    </li>
                    <li
                      style={{
                        color: 'black',
                        width: '90%',
                        height: '40px',
                        margin: '20px',
                        borderBottom: '1px solid black',
                      }}
                      onClick={selectFont}
                    >
                      EB Garamond
                    </li>
                    <li
                      style={{
                        color: 'black',
                        width: '90%',
                        height: '40px',
                        margin: '20px',
                        borderBottom: '1px solid black',
                      }}
                      onClick={selectFont}
                    >
                      Alegreya
                    </li>
                    <li
                      style={{
                        color: 'black',
                        width: '90%',
                        height: '40px',
                        margin: '20px',
                        borderBottom: '1px solid black',
                      }}
                      onClick={selectFont}
                    >
                      Libre Bodoni
                    </li>
                    <li
                      style={{
                        color: 'black',
                        width: '90%',
                        height: '40px',
                        margin: '20px',
                        borderBottom: '1px solid black',
                      }}
                      onClick={selectFont}
                    >
                      Rokkitt
                    </li>
                    <li
                      style={{
                        color: 'black',
                        width: '90%',
                        height: '40px',
                        margin: '20px',
                        borderBottom: '1px solid black',
                      }}
                      onClick={selectFont}
                    >
                      Literata
                    </li>
                    <li
                      style={{
                        color: 'black',
                        width: '90%',
                        height: '40px',
                        margin: '20px',
                        borderBottom: '1px solid black',
                      }}
                      onClick={selectFont}
                    >
                      Sora
                    </li>
                    <li
                      style={{
                        color: 'black',
                        width: '90%',
                        height: '40px',
                        margin: '20px',
                        borderBottom: '1px solid black',
                      }}
                      onClick={selectFont}
                    >
                      Work Sans
                    </li>
                    <li
                      style={{
                        color: 'black',
                        width: '90%',
                        height: '40px',
                        margin: '20px',
                        borderBottom: '1px solid black',
                      }}
                      onClick={selectFont}
                    >
                      Rubik
                    </li>
                    <li
                      style={{
                        color: 'black',
                        width: '90%',
                        height: '40px',
                        margin: '20px',
                        borderBottom: '1px solid black',
                      }}
                      onClick={selectFont}
                    >
                      Josefin Sans
                    </li>

                    <li
                      style={{
                        color: 'black',
                        width: '90%',
                        height: '40px',
                        margin: '20px',
                        borderBottom: '1px solid black',
                      }}
                      onClick={selectFont}
                    >
                      Arimo
                    </li>
                    <li
                      style={{
                        color: 'black',
                        width: '90%',
                        height: '40px',
                        margin: '20px',
                        borderBottom: '1px solid black',
                      }}
                      onClick={selectFont}
                    >
                      Lexend Deca
                    </li>
                    <li
                      style={{
                        color: 'black',
                        width: '90%',
                        height: '40px',
                        margin: '20px',
                        borderBottom: '1px solid black',
                      }}
                      onClick={selectFont}
                    >
                      Anybody
                    </li>
                    <li
                      style={{
                        color: 'black',
                        width: '90%',
                        height: '40px',
                        margin: '20px',
                        borderBottom: '1px solid black',
                      }}
                      onClick={selectFont}
                    >
                      Space Grotesk
                    </li>
                    <li
                      style={{
                        color: 'black',
                        width: '90%',
                        height: '40px',
                        margin: '20px',
                        borderBottom: '1px solid black',
                      }}
                      onClick={selectFont}
                    >
                      Space Mono
                    </li>
                    <li
                      style={{
                        color: 'black',
                        width: '90%',
                        height: '40px',
                        margin: '20px',
                        borderBottom: '1px solid black',
                      }}
                      onClick={selectFont}
                    >
                      Spline Sans Mono
                    </li>
                  </ul>
                </div>
              )}
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
                    setStarry(false);
                    setMoon(false);
                    setHall(false);
                    setVoyage(false);
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
                    setColor('#D37F68');
                    setBackcolor('#FEE8D3');
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
                  onClick={viewStarry}
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    backgroundColor: '#47b9b6',
                  }}
                ></div>
                <div
                  onClick={viewMoon}
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    backgroundColor: '#47b9b6',
                  }}
                ></div>
                <div
                  onClick={viewHall}
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    backgroundColor: '#47b9b6',
                  }}
                ></div>
                <div
                  onClick={viewVoyage}
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
        {starry && <StarryNights />}
        {moon && <NearMoon />}
        {hall && <HallOfTime />}
        {voyage && <EndlessVoyage />}
      </div>
    </FullScreen>
  );
}

export default App;
