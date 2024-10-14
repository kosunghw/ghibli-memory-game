import { motion } from 'framer-motion';
import logo from '../assets/img/ghibli-logo.png';
import Card from './Card';
import Modal from './Modal';
import { useEffect } from 'react';

export default function Game({
  handleLogoClick,
  playingCharacters,
  handleCardClick,
  score,
  bestScore,
  setBestScore,
  gameLevel,
  gameStatus,
  setGameStatus,
  handlePlayAgain,
}) {
  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score);
    }
    if (score === gameLevel.cardNum) {
      setGameStatus('win');
    }
  }, [score]);

  return (
    <>
      <div className='flex flex-col relative items-center justify-center min-h-screen min-w-full'>
        <motion.img
          onClick={handleLogoClick}
          whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          className='cursor-pointer absolute top-3 w-80'
          src={logo}
          alt='logo image'
        />
        <div className='flex gap-5 absolute top-36 text-lg'>
          <div>Score: {score}</div>
          <div>Best Score: {bestScore}</div>
        </div>
        {score < gameLevel.cardNum && (
          <div className='absolute top-48 text-lg'>
            {score} / {gameLevel.cardNum}
          </div>
        )}
        <div
          className={
            gameStatus === ''
              ? 'flex flex-wrap justify-center absolute top-60 w-3/4 overflow-hidden gap-5'
              : 'flex flex-wrap justify-center absolute top-60 w-3/4 overflow-hidden gap-5 brightness-50'
          }
        >
          {playingCharacters.map((character) => {
            return (
              <Card character={character} handleCardClick={handleCardClick} />
            );
          })}
        </div>
        {gameStatus !== '' && (
          <Modal
            gameStatus={gameStatus}
            handleLogoClick={handleLogoClick}
            handlePlayAgain={handlePlayAgain}
          />
        )}
      </div>
    </>
  );
}
