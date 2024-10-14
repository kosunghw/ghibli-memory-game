import music from '../assets/img/music.png';
import mute from '../assets/img/mute.png';
import bgm from '../assets/audios/BGM.mp3';
import { useState } from 'react';
import ReactHowler from 'react-howler';

export default function BGM() {
  const [isPlaying, setIsPlaying] = useState(false);
  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
  };
  const imgStyle = 'w-12';
  const musicPause = 'music-pause';

  return (
    <>
      <ReactHowler src={bgm} playing={isPlaying} loop />
      <button
        onClick={toggleMusic}
        className='flex justify-center items-center fixed top-6 left-6 cursor-pointer bg-white/50 rounded-full w-12 h-12 '
      >
        {isPlaying ? <img src={music} /> : <img src={mute} />}
      </button>
    </>
  );
}
