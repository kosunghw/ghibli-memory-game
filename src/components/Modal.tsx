import win from '../assets/img/win.webp';
import lose from '../assets/img/lose.webp';
import { motion } from 'framer-motion';

function Modal({ gameStatus, handleLogoClick, handlePlayAgain }) {
  const containerClass =
    gameStatus === 'win'
      ? 'flex flex-col gap-10 justify-center z-10 items-center bg-white/70  w-96 h-auto py-5 rounded-3xl shadow-2xl shadow-indigo-500'
      : 'flex flex-col gap-10 justify-center z-10 items-center bg-white/70  w-96 h-auto py-5 rounded-3xl shadow-2xl shadow-red-500';

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
        className={containerClass}
      >
        <div className='text-3xl'>
          {gameStatus === 'win' ? <>You Win!</> : <>You Lose...</>}
        </div>
        <img src={gameStatus === 'win' ? win : lose} className='w-52' />
        <div className='flex gap-5'>
          <button
            onClick={handlePlayAgain}
            className='bg-indigo-500 w-28 h-8 rounded-sm hover:bg-indigo-400'
          >
            Play Again
          </button>
          <button
            onClick={handleLogoClick}
            className='bg-violet-500 w-28 h-8 rounded-sm hover:bg-violet-400'
          >
            Menu
          </button>
        </div>
      </motion.div>
    </>
  );
}

export default Modal;
