import { motion } from 'framer-motion';
import logo from '../assets/img/ghibli-logo.png';
import Card from './Card';

export default function Game({
  handleLogoClick,
  gameLevel,
  characters,
  shuffle,
}) {
  let characterSelected;

  shuffle(characters);

  if (gameLevel.difficulty === 'easy') {
    characterSelected = characters.slice(0, 5);
  } else if (gameLevel.difficulty === 'medium') {
    characterSelected = characters.slice(0, 7);
  } else if (gameLevel.difficulty === 'hard') {
    characterSelected = characters.slice(0, 10);
  }

  return (
    <>
      <div className='flex flex-col relative items-center min-h-screen min-w-full'>
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
        <div className='flex flex-wrap justify-center absolute top-52 w-3/4 overflow-hidden gap-3'>
          {characterSelected.map((character) => {
            return <Card character={character} />;
          })}
        </div>
      </div>
    </>
  );
}
