import logo from '../assets/img/ghibli-logo.png';
import { motion } from 'framer-motion';

export default function StartScreen({ setGameLevel }) {
  return (
    <div className='flex flex-col gap-6 min-h-screen relative self-center justify-center items-center'>
      <motion.img
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className='w-3/6'
        src={logo}
        alt='logo image'
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className='flex gap-6 text-lg'
      >
        <button
          onClick={() => {
            setGameLevel({difficulty: 'easy', cardNum: 5})
          }}
          className='rounded-sm bg-sky-100 hover:bg-sky-200 w-24 h-12'
        >
          Easy
        </button>
        <button
          onClick={() => {
            setGameLevel({difficulty: 'medium', cardNum: 7})
          }}
          className='rounded-sm bg-violet-100 hover:bg-violet-200 w-24 h-12'
        >
          Medium
        </button>
        <button
          onClick={() => {
            setGameLevel({difficulty: 'hard', cardNum: 10})
          }}
          className='rounded-sm bg-red-100 hover:bg-red-200 w-24 h-12'
        >
          Hard
        </button>
      </motion.div>
    </div>
  );
}
