import video from './assets/videos/background-video.mp4';
import './styles/index.css';
import { useState, useEffect } from 'react';
import LoadScreen from './components/LoadScreen';
import StartScreen from './components/StartScreen';
import characters from './components/characters';
import Game from './components/Game';
import BGM from './components/BGM';

function App() {
  const [loaded, setLoaded] = useState(false);
  const [gameLevel, setGameLevel] = useState(null);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [playingCharacters, setPlayingCharacters] = useState([]);
  const [gameStatus, setGameStatus] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);

  useEffect(() => {
    if (gameLevel) {
      shuffle(characters);
      setPlayingCharacters(characters.slice(0, gameLevel.cardNum));
    }
  }, [gameLevel]);

  function shuffle(array) {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
  }

  function handleLogoClick() {
    setGameLevel(null);
    setScore(0);
    playingCharacters.forEach((character) => {
      character.clicked = false;
    });
    setPlayingCharacters([]);
    setGameStatus('');
  }

  function handleCardClick(character) {
    if (character.clicked) {
      setGameStatus('lose');
    } else {
      character.clicked = true;
      const temp = [...playingCharacters]; // Shallow copying playingCharacters
      shuffle(temp);
      setPlayingCharacters(temp);
      setScore(score + 1);
    }
  }

  function handlePlayAgain() {
    setScore(0);
    playingCharacters.forEach((character) => {
      character.clicked = false;
    });
    setPlayingCharacters([]);
    setGameStatus('');
    shuffle(characters);
    setPlayingCharacters(characters.slice(0, gameLevel.cardNum));
  }

  return (
    <>
      <video
        className={
          gameStatus !== ''
            ? 'fixed -z-10 min-w-full min-h-full brightness-50'
            : 'fixed -z-10 min-w-full min-h-full'
        }
        autoPlay
        loop
        muted
      >
        <source src={video} type='video/mp4'></source>
      </video>
      {!loaded ? (
        <LoadScreen />
      ) : (
        <>
          {!gameLevel ? (
            <StartScreen setGameLevel={setGameLevel} />
          ) : (
            <Game
              handleLogoClick={handleLogoClick}
              playingCharacters={playingCharacters}
              handleCardClick={handleCardClick}
              score={score}
              bestScore={bestScore}
              gameLevel={gameLevel}
              setBestScore={setBestScore}
              gameStatus={gameStatus}
              setGameStatus={setGameStatus}
              handlePlayAgain={handlePlayAgain}
            />
          )}
        </>
      )}
      <BGM />
    </>
  );
}

export default App;
