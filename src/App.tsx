// import { useState } from 'react';
import video from './assets/videos/background-video.mp4';
import logo from './assets/img/ghibli-logo.png';
import './styles/index.css';

function App() {
  return (
    <div className='relative flex items-center justify-center h-screen overflow-hidden'>
      <video
        className='absolute -z-50 w-auto min-w-full min-h-full max-w-none'
        autoPlay
        loop
        muted
      >
        <source src={video} type='video/mp4'></source>
      </video>
      <img className='absolute w-80 top-8 left-8' src={logo} alt='logo image' />
    </div>
  );
}

export default App;
