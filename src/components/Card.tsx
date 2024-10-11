import Tilt from 'react-parallax-tilt';
import cardBack from '../assets/img/card-back.jpeg'

export default function Card({ character, handleCardClick }) {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.4}
      glareColor={'#fff'}
      glarePosition='all'
      className='card'
    >
      
      <div className='card-front flex flex-col cursor-pointer gap-4 items-center h-56 w-44 bg-violet-300/40 rounded-md p-3' 
        onClick={()=> {
          handleCardClick(character);
        }
        }>
        <img className='rounded-md' src={character.src} />
        <h1 className='text-xl text-stone-800'>{character.name}</h1>
      </div>
      
      
      
    </Tilt>
  );
}
