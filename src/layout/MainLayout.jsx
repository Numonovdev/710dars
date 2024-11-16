import React, { useState } from 'react';
import LeftBord from '../components/LeftBord';
import RightBord from '../components/RightBord';
import MusicPlayer from '../components/MusicPlayer';
import Close from '../assets/close.svg';
import User from '../assets/user.svg';
import Settings from '../assets/settings.svg';
import '../App.css';

function MainLayout({ children }) {
  const [settinges, setSettinges] = useState(true);

  function handleSetting() {
    setSettinges(!settinges);
  }

  return (
    <div>
      <div className='left-bord fixed z-10 w-[17vw] bg-black left-0 top-0  h-[100vh] text-white'>
        <LeftBord />
      </div>

      <div
        className={`mx-auto  z-0 right-0   asosiy    text-black  ${
          settinges ? 'w-[66vw] pr-4' : 'w-[83vw]    absolute right-0 '
        }`}
      >
        {children}
      </div>

      {settinges ? (
        <div className='right-bord fixed w-[18vw] bg-black right-0 top-0 h-[100vh] text-white 	'>
          <RightBord>
            <div className='top-0 h-20 flex justify-between items-center '>
              <p>Friend Activity</p>
              <div className='im flex gap-2'>
                <img src={User} alt='rasm' width={40} />
                <button onClick={handleSetting}>
                  <img src={Close} alt='rasm' width={50} />
                </button>
              </div>
            </div>
          </RightBord>
        </div>
      ) : (
        <button onClick={handleSetting} className=' fixed   top-5 right-7'>
          <img src={Settings} alt='rasm' />
        </button>
      )}

      <div className='musicPlayer fixed h-[6vw] bg-[#181818] z-50 bottom-0 w-full'>
        <MusicPlayer />
      </div>
    </div>
  );
}

export default MainLayout;
