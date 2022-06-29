import Export from './components/Export';
import Login from './components/Login';
import Text from './components/Text';
import { useState } from 'react';
import useSound from 'use-sound';
import './assets/backgrounds/StarryNight.css';
import './assets/backgrounds/NearMoon.css';
import './assets/backgrounds/HallOfTime.css';
import './assets/backgrounds/EndlessVoyage.css';
import './assets/backgrounds/BewitchedForest.css';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import StarryNights from './components/StarryNights';
import NearMoon from './components/NearMoon';
import HallOfTime from './components/HallOfTime';
import EndlessVoyage from './components/EndlessVoyage';
import BewitchedForest from './components/BewitchedForest';
import mysound from './assets/audio/9744__horn__typewriter.wav';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import Title from './components/Title';
import Menu from './components/Menu';
import Inmersion from './components/Inmersion';
import pinkSound from './assets/audio/pinknoise.mp3';
function App(props) {
  const handle = useFullScreenHandle();

  const [color, setColor] = useState('#5b5c6580');

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
    setForest(false);
  }
  const [moon, setMoon] = useState(false);

  function viewMoon(e) {
    e.preventDefault();
    setBackcolor('transparent');
    setMoon(true);
    setStarry(false);
    setHall(false);
    setVoyage(false);
    setForest(false);
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
    setForest(false);
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
    setForest(false);
  }
  const [forest, setForest] = useState(false);

  function viewForest(e) {
    e.preventDefault();
    console.log('ey voyage');
    setBackcolor('transparent');
    setVoyage(false);
    setStarry(false);
    setMoon(false);
    setHall(false);
    setForest(true);
  }
  const [sound] = useSound(mysound);
  const [pinksound] = useSound(pinkSound);

  const [showMusic, setShowMusic] = useState(false);

  const [song, setSong] = useState('Aventura');
  return (
    <FullScreen handle={handle}>
      <div
        className={'App'}
        onKeyDown={sound}
        style={{
          background: backcolor,
        }}
      >
        {/*TITLE*/}
        <Title color={color} />
        {/*MENU*/}

        <Menu color={color} toggleView={toggleView} toggleClick={toggleClick} />

        {/*EXPORT*/}
        <Export color={color} />
        {/*LOGIN*/}
        <Login color={color} />
        {/*TEXT EDITOR*/}
        <Text color={color} />
        {/*INMERSION*/}
        {isOpen && (
          <Inmersion
            setShowFonts={setShowFonts}
            showFonts={showFonts}
            setFont={setFont}
            selectFont={selectFont}
            color={color}
            setColor={setColor}
            backcolor={backcolor}
            setBackcolor={setBackcolor}
            setStarry={setStarry}
            setMoon={setMoon}
            setHall={setHall}
            setVoyage={setVoyage}
            setForest={setForest}
            font={font}
            showMusic={showMusic}
            setShowMusic={setShowMusic}
            song={song}
            setSong={setSong}
            pinksound={pinksound}
          />
        )}
        {starry && <StarryNights />}
        {moon && <NearMoon />}
        {hall && <HallOfTime />}
        {voyage && <EndlessVoyage />}
        {forest && <BewitchedForest />}
      </div>
    </FullScreen>
  );
}

export default App;
