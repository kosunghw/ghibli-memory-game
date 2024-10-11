import video from './assets/videos/background-video.mp4';
import logo from './assets/img/ghibli-logo.png';
import './styles/index.css';
import { useState, useEffect } from 'react';
import LoadScreen from './components/LoadScreen'
import StartScreen from './components/StartScreen'
import characters from './components/characters'
import Game from './components/Game'

function App() {
  const [loaded, setLoaded] = useState(false);
  const [gameLevel, setGameLevel] = useState(null);

  useEffect(()=> {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);

  function shuffle(array) {
    let currentIndex = array.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }

  function handleLogoClick() {
    setGameLevel(null);
  }

  return (
    <>
    <video
          className='fixed -z-10 min-w-full min-h-full'
          autoPlay
          loop
          muted
        >
          <source src={video} type='video/mp4'></source>
      </video>
      {!loaded
        ? <LoadScreen />
        : (
          <>
            {!gameLevel
              ? <StartScreen setGameLevel={setGameLevel} />
              : <Game handleLogoClick={handleLogoClick} gameLevel={gameLevel} characters={characters} shuffle={shuffle}/>}
          </>
        )}
      
    </>
      // {!loaded
      //   ? <LoadScreen />
      //   : (
      //     <>
      //       {!gameLevel[0]
      //         ? <StartScreen handleClick={handleClick} />
      //         : <Game handleLogoClick={handleLogoClick} gameLevel={gameLevel} characters={characters} shuffle={shuffle}>}
      //     </>
      //   )}
      /* <div className='relative flex items-center justify-center h-screen overflow-hidden'>
        <video
          className='absolute -z-50 w-auto min-w-full min-h-full max-w-none'
          autoPlay
          loop
          muted
        >
          <source src={video} type='video/mp4'></source>
        </video>
        <img className='absolute w-80 top-8 left-8' src={logo} alt='logo image' />
      </div> */
  );
}

export default App;
