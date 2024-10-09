import img from '../assets/img/loading.webp';

export default function LoadScreen() {
  return (
    <div className='flex justify-center items-center min-h-screen min-w-screen'>
      <div
        id='load-content'
        className='flex flex-col gap-2 justify-center items-center'
      >
        <img
          className='rounded-full w-60 motion-safe:animate-bounce'
          src={img}
          alt='walking totoro'
        />
        <div className='text-2xl text-white'>Loading...</div>
      </div>
    </div>
  );
}
