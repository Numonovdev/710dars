import React from 'react';
// rasmlar
import Pause from '../assets/pause.svg';
import NextPlay from '../assets/nextPlay.svg';
import Replais from '../assets/replais.svg';
import Volume from '../assets/volume.svg';

function MusicPlayer() {
  return (
    <div className='flex items-center justify-between mx-auto px-10 text-white pt-2'>
      <div className='name '>Jaloliddin </div>
      <div className='player flex flex-col gap-1 justify-center items-center'>
        <div className='pause flex gap-8 '>
          <button>
            <img src={NextPlay} alt='Next music' />
          </button>
          <button>
            <img src={Pause} alt='Pause music' />
          </button>
          <button>
            <img src={Replais} alt='Replais music' />
          </button>
        </div>
        <div className='music flex gap-2 items-center'>
          <span>0</span>
          <audio src='https://open.spotify.com/playlist/37i9dQZF1DWZEmUK7BVkZM'></audio>
          <span>2.39</span>
        </div>
      </div>
      <div className='volume flex gap-2'>
        <img src={Volume} alt='Volume music' />
        <input type='range' min={0} max={100} step={1} />
      </div>
    </div>
  );
}

export default MusicPlayer;
