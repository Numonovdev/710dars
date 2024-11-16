import React, { useRef, useState } from 'react';
import '../App.css';
import LikesRasm from '../assets/like-rasm.png';
import Play from '../assets/play.svg';
import BushYurak from '../assets/bushLike.svg';
import Dowload from '../assets/dowloand.svg';
import Nuqta from '../assets/nuqtalar.svg';
import PastkiST from '../assets/pastki.svg';
import Search from '../assets/search.svg';
import Clock from '../assets/clock.svg';
import Yurak from '../assets/yashilYurak.svg';
import Pause from '../assets/pause.svg';
import Brat from '../assets/brat.svg';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../redux/likesSlice';

function Likes() {
  const likes = useSelector((state) => state.likes.value);
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(null);
  const audioRef = useRef(null);
  const dispatch = useDispatch();

  const handlePause = (x, y) => {
    if (audioRef.current.src === x && !audioRef.current.paused) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      if (audioRef.current.src !== x) {
        audioRef.current.src = x;
        setCurrent(y);
      }
      audioRef.current.play();
      setPlaying(true);
    }
  };

  function handleLikes(value) {
    const isLiked = likes.some((item) => item.album.id === value.album.id);

    if (isLiked) {
      dispatch(remove(value));
    } else {
      dispatch(add(value));
    }
  }

  return (
    <div className='likes'>
      <div className=''>
        <div className='contain'>
          <div className='next flex gap-5 py-4 '></div>
        </div>
        <div className='contain'>
          <div className='div pt-8 flex gap-8 '>
            <img src={LikesRasm} alt='' className='w-[297px] h-[300px]' />
            <div className='text pt-16'>
              <h3 className='text-white '>
                PUBLIC <br />
                PLAYLIST
              </h3>
              <h3 className='text-white font-bold text-8xl pb-8'>
                Liked Songs
              </h3>
              <div className='text-white flex gap-3'>
                <img src={Brat} alt='rasm' />
                <p>davedirect3 - 21</p>
              </div>
            </div>
          </div>
        </div>

        <div className='wrapper text-white bg-[#121212] pt-10'>
          <div className='contain'>
            <div className='play flex justify-between items-center'>
              <div className='flex '>
                <img src={Play} alt='' className='pr-8 cursor-pointer' />
                <img src={BushYurak} alt='' className='pr-6 cursor-pointer' />
                <img src={Dowload} alt='' className='pr-3 cursor-pointer' />
                <img src={Nuqta} alt='' className='cursor-pointer' />
              </div>
              <div className='search flex items-center'>
                <img src={Search} alt='' className='pr-6' />
                <p className='pr-5 cursor-pointer'>Custom order</p>
                <img src={PastkiST} alt='' className='cursor-pointer' />
              </div>
            </div>
            <div className='flex justify-between border-b-2 border-gray-600 pb-2 text-[#B3B3B3]'>
              <p className='w-[200px]'>
                <span className='pr-3'>#</span> TITLE
              </p>
              <p>ALBUM</p>
              <p>DATE ADDED</p>
              <p>
                <img src={Clock} alt='' />
              </p>
            </div>
            <div className='trac pt-6 flex flex-col gap-5 pb-36'>
              {likes.length > 0 &&
                likes.map((value, index) => {
                  const isLiked = likes.some(
                    (item) => item.album.id === value.album.id
                  );

                  return (
                    <div
                      className='flex justify-between cursor-pointer bg-[#131313]'
                      key={index}
                    >
                      <div className='nomi flex items-center w-[300px]'>
                        <span className='pr-4'>{index + 1}</span>
                        <div className='flex gap-4 items-center'>
                          <img
                            src={value.album.images[0].url}
                            alt=''
                            width={52}
                          />
                          <div className='name'>
                            <p>{value.name}</p>
                            <p>{value.artists[0].name}</p>
                          </div>
                        </div>
                      </div>
                      <div className='album'>
                        <p className=''>{value.name}</p>
                      </div>
                      <div className='data flex items-center gap-4'>
                        <button onClick={() => handleLikes(value)}>
                          <img src={Yurak} alt='liked' width={30} />
                        </button>
                        <span>
                          {Math.floor(value.duration_ms / 60000)}:
                          {(
                            '0' + Math.floor((value.duration_ms % 60000) / 1000)
                          ).slice(-2)}
                        </span>
                        <button
                          onClick={() => handlePause(value.preview_url, value)}
                        >
                          {current?.id === value.id && playing ? (
                            <img src={Pause} alt='pause' width={50} />
                          ) : (
                            <img src={Play} alt='play' width={50} />
                          )}
                        </button>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      <audio ref={audioRef} />
    </div>
  );
}

export default Likes;
