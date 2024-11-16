import React from 'react';



// rasmlar\
import User from '../assets/had.svg';
import Loader from '../assets/loader.svg';

function RightBord({ children }) {
  return (
    <div className='px-2'>
      {children}
      <p className='text-[#CCCCCC] text-[18px] font-semibold'>
        Let friends and followers on Spotify see what you’re listening to.
      </p>
      <div className='users flex flex-col gap-4 pt-6'>
        <div className='user flex gap-5'>
          <img src={User} alt='rasm' />
          <img src={Loader} alt='rasm' />
        </div>

        <div className='user flex gap-5'>
          <img src={User} alt='rasm' />
          <img src={Loader} alt='rasm' />
        </div>

        <div className='user flex gap-5'>
          <img src={User} alt='rasm' />
          <img src={Loader} alt='rasm' />
        </div>
      </div>
      <p className='text-[#CCCCCC] text-[18px] font-semibold py-4'>
        Go to Settings Social and enable “Share my listening activity on
        Spotify.’ You can turn this off at any time.
      </p>
      <button className='rounded-2xl bg-white py-3 px-5 font-bold  text-black w-[200px] mx-auto text-center  flex justify-center items-center'>
        SETTINGS
      </button>
    </div>
  );
}

export default RightBord;
