import React from 'react';
import StarryNightsImg from '../assets/images/StarryNights.jpg';
import HallOfTimeImg from '../assets/images/HallOfTime.jpg';
import NearMoonImg from '../assets/images/NearMoon.jpg';
import BeWitchedForestImg from '../assets/images/BeWitchedForest.jpg';
import EndlessVoyageImg from '../assets/images/EndlessVoyage.jpg';

function Inmersion(props) {
  return (
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
        <div onClick={() => props.setShowFonts(true)}>{props.font}</div>
        {props.showFonts && (
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
                onClick={() => {
                  props.setFont('Lora');
                  props.setShowFonts(false);
                }}
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
                onClick={() => {
                  props.setFont('Domine');
                  props.setShowFonts(false);
                }}
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
                onClick={() => {
                  props.setFont('EB Garamond');
                  props.setShowFonts(false);
                }}
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
                onClick={() => {
                  props.setFont('Alegreya');
                  props.setShowFonts(false);
                }}
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
                onClick={() => {
                  props.setFont('Libre Bodoni');
                  props.setShowFonts(false);
                }}
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
                onClick={() => {
                  props.setFont('Rokkitt');
                  props.setShowFonts(false);
                }}
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
                onClick={() => {
                  props.setFont('Literata');
                  props.setShowFonts(false);
                }}
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
                onClick={() => {
                  props.setFont('Sora');
                  props.setShowFonts(false);
                }}
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
                onClick={() => {
                  props.setFont('Work Sans');
                  props.setShowFonts(false);
                }}
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
                onClick={() => {
                  props.setFont('Rubik');
                  props.setShowFonts(false);
                }}
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
                onClick={() => {
                  props.setFont('Josefin Sans');
                  props.setShowFonts(false);
                }}
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
                onClick={() => {
                  props.setFont('Arimo');
                  props.setShowFonts(false);
                }}
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
                onClick={() => {
                  props.setFont('Lexend Deca');
                  props.setShowFonts(false);
                }}
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
                onClick={() => {
                  props.setFont('Anybody');
                  props.setShowFonts(false);
                }}
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
                onClick={() => {
                  props.setFont('Space Grotesk');
                  props.setShowFonts(false);
                }}
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
                onClick={() => {
                  props.setFont('Space Mono');
                  props.setShowFonts(false);
                }}
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
                onClick={() => {
                  props.setFont('Spline Sans Mono');
                  props.setShowFonts(false);
                }}
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
        <div onClick={() => props.setShowMusic(true)}>{props.song}</div>
        {props.showMusic && (
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
                onClick={() => {
                  props.setSong('White Sound');
                  props.setShowMusic(false);
                }}
              >
                White Sound
              </li>
              <li
                style={{
                  color: 'black',
                  width: '90%',
                  height: '40px',
                  margin: '20px',
                  borderBottom: '1px solid black',
                }}
                onClick={() => {
                  props.setSong('Pink Sound');
                  props.setShowMusic(false);
                  props.pinksound();
                }}
              >
                Pink Sound
              </li>
              <li
                style={{
                  color: 'black',
                  width: '90%',
                  height: '40px',
                  margin: '20px',
                  borderBottom: '1px solid black',
                }}
                onClick={() => {
                  props.setSong('Brown Sound');
                  props.setShowMusic(false);
                }}
              >
                Brown Sound
              </li>
              <li
                style={{
                  color: 'black',
                  width: '90%',
                  height: '40px',
                  margin: '20px',
                  borderBottom: '1px solid black',
                }}
                onClick={() => {
                  props.setSong('Binaural Sound');
                  props.setShowMusic(false);
                }}
              >
                Binaural Sound
              </li>
              <li
                style={{
                  color: 'black',
                  width: '90%',
                  height: '40px',
                  margin: '20px',
                  borderBottom: '1px solid black',
                }}
                onClick={() => {
                  props.setSong('Rain on Windows');
                  props.setShowMusic(false);
                }}
              >
                Rain on Windows
              </li>
              <li
                style={{
                  color: 'black',
                  width: '90%',
                  height: '40px',
                  margin: '20px',
                  borderBottom: '1px solid black',
                }}
                onClick={() => {
                  props.setSong('Candela');
                  props.setShowMusic(false);
                }}
              >
                Candela
              </li>
              <li
                style={{
                  color: 'black',
                  width: '90%',
                  height: '40px',
                  margin: '20px',
                  borderBottom: '1px solid black',
                }}
                onClick={() => {
                  props.setSong('Jazz Piano');
                  props.setShowMusic(false);
                }}
              >
                Jazz Piano
              </li>
              <li
                style={{
                  color: 'black',
                  width: '90%',
                  height: '40px',
                  margin: '20px',
                  borderBottom: '1px solid black',
                }}
                onClick={() => {
                  props.setSong('Slow Piano Next-Gen');
                  props.setShowMusic(false);
                }}
              >
                Slow Piano Next-Gen
              </li>
              <li
                style={{
                  color: 'black',
                  width: '90%',
                  height: '40px',
                  margin: '20px',
                  borderBottom: '1px solid black',
                }}
                onClick={() => {
                  props.setSong('Garden');
                  props.setShowMusic(false);
                }}
              >
                Garden
              </li>
              <li
                style={{
                  color: 'black',
                  width: '90%',
                  height: '40px',
                  margin: '20px',
                  borderBottom: '1px solid black',
                }}
                onClick={() => {
                  props.setSong('Mediterranean Waves');
                  props.setShowMusic(false);
                }}
              >
                Mediterranean Waves
              </li>
              <li
                style={{
                  color: 'black',
                  width: '90%',
                  height: '40px',
                  margin: '20px',
                  borderBottom: '1px solid black',
                }}
                onClick={() => {
                  props.setSong('Firefly Nights');
                  props.setShowMusic(false);
                }}
              >
                Firefly Nights
              </li>
              <li
                style={{
                  color: 'black',
                  width: '90%',
                  height: '40px',
                  margin: '20px',
                  borderBottom: '1px solid black',
                }}
                onClick={() => {
                  props.setSong('Apocalyptic Ambience');
                  props.setShowMusic(false);
                }}
              >
                Apocalyptic Ambience
              </li>
            </ul>
          </div>
        )}
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
          {/*STANDAR */}
          <div
            onClick={(e) => {
              props.setColor('#5B5C65');
              props.setBackcolor('#FDFDFD');
              props.setStarry(false);
              props.setMoon(false);
              props.setHall(false);
              props.setVoyage(false);
              props.setForest(false);
            }}
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              backgroundColor: '#FDFDFD',
            }}
          ></div>
          {/*PRIMARY LIGHT */}
          <div
            onClick={(e) => {
              props.setColor('#D37F68');
              props.setBackcolor('#FEE8D3');
              props.setStarry(false);
              props.setMoon(false);
              props.setHall(false);
              props.setVoyage(false);
              props.setForest(false);
            }}
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              backgroundColor: '#fee8d3',
            }}
          ></div>
          {/*SECONDARY LIGHT */}
          <div
            onClick={(e) => {
              props.setColor('#9EA49F');
              props.setBackcolor('#f2f2f7');
              props.setStarry(false);
              props.setMoon(false);
              props.setHall(false);
              props.setVoyage(false);
              props.setForest(false);
            }}
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              backgroundColor: '#f2f2f7',
            }}
          ></div>
          {/*GARDEN LIGHT */}
          <div
            onClick={(e) => {
              props.setColor('#11571F');
              props.setBackcolor('#D7F7C6');
              props.setStarry(false);
              props.setMoon(false);
              props.setHall(false);
              props.setVoyage(false);
              props.setForest(false);
            }}
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              backgroundColor: '#D7F7C6',
            }}
          ></div>
          {/*AGUAMARINA LIGHT */}
          <div
            onClick={(e) => {
              props.setColor('#1D7685');
              props.setBackcolor('#D8FBEE');
              props.setStarry(false);
              props.setMoon(false);
              props.setHall(false);
              props.setVoyage(false);
              props.setForest(false);
            }}
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              backgroundColor: '#D8FBEE',
            }}
          ></div>
          {/*AMARILLO LIGHT */}
          <div
            onClick={(e) => {
              props.setColor('#D4980E');
              props.setBackcolor('#FEF7CF');
              props.setStarry(false);
              props.setMoon(false);
              props.setHall(false);
              props.setVoyage(false);
              props.setForest(false);
            }}
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              backgroundColor: '#FEF7CF',
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
          {/*DARK */}
          <div
            onClick={(e) => {
              props.setColor('#FDFDFD');
              props.setBackcolor('#5B5C65');
              props.setStarry(false);
              props.setMoon(false);
              props.setHall(false);
              props.setVoyage(false);
              props.setForest(false);
            }}
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              backgroundColor: '#5b5c65',
            }}
          ></div>
          {/*PRIMARY DARK */}
          <div
            onClick={(e) => {
              props.setColor('#FEE8D3');
              props.setBackcolor('#d37f68');
              props.setStarry(false);
              props.setMoon(false);
              props.setHall(false);
              props.setVoyage(false);
              props.setForest(false);
            }}
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              backgroundColor: '#d37f68',
            }}
          ></div>
          {/*SECONDARY DARK */}
          <div
            onClick={(e) => {
              props.setColor('#F2F2F7');
              props.setBackcolor('#9ea49f');
              props.setStarry(false);
              props.setMoon(false);
              props.setHall(false);
              props.setVoyage(false);
              props.setForest(false);
            }}
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              backgroundColor: '#9ea49f',
            }}
          ></div>
          {/*GARDEN DARK */}
          <div
            onClick={(e) => {
              props.setColor('#D7F7C6');
              props.setBackcolor('#469C42');
              props.setStarry(false);
              props.setMoon(false);
              props.setHall(false);
              props.setVoyage(false);
              props.setForest(false);
            }}
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              backgroundColor: '#469C42',
            }}
          ></div>
          {/*AGUAMARINA DARK */}
          <div
            onClick={(e) => {
              props.setColor('#D8FBEE');
              props.setBackcolor('#3AB9B5');
              props.setStarry(false);
              props.setMoon(false);
              props.setHall(false);
              props.setVoyage(false);
              props.setForest(false);
            }}
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              backgroundColor: '#3AB9B5',
            }}
          ></div>
          {/*AMARILLO DARK */}
          <div
            onClick={(e) => {
              props.setColor('#FEF7CF');
              props.setBackcolor('#F8B90A');
              props.setStarry(false);
              props.setMoon(false);
              props.setHall(false);
              props.setVoyage(false);
              props.setForest(false);
            }}
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              backgroundColor: '#F8B90A',
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
            onClick={(e) => {
              props.setStarry(true);
              props.setMoon(false);
              props.setHall(false);
              props.setVoyage(false);
              props.setForest(false);
            }}
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              backgroundImage: `url(${StarryNightsImg})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          ></div>
          <div
            onClick={() => {
              props.setStarry(false);
              props.setMoon(true);
              props.setHall(false);
              props.setVoyage(false);
              props.setForest(false);
            }}
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              backgroundImage: `url(${NearMoonImg})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          ></div>
          <div
            onClick={() => {
              props.setStarry(false);
              props.setMoon(false);
              props.setHall(true);
              props.setVoyage(false);
              props.setForest(false);
            }}
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              backgroundImage: `url(${HallOfTimeImg})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          ></div>
          <div
            onClick={() => {
              props.setStarry(false);
              props.setMoon(false);
              props.setHall(false);
              props.setVoyage(true);
              props.setForest(false);
            }}
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              backgroundImage: `url(${EndlessVoyageImg})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          ></div>
          <div
            onClick={() => {
              props.setStarry(false);
              props.setMoon(false);
              props.setHall(false);
              props.setVoyage(false);
              props.setForest(true);
            }}
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              backgroundImage: `url(${BeWitchedForestImg})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
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
  );
}

export default Inmersion;
