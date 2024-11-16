import React, { useEffect, useRef, useState } from 'react';
import http from '../axios';
import '../App.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../redux/likesSlice';



// rasmlar
import Play from '../assets/play.svg';
import BushYurak from '../assets/bushLike.svg';
import Dowload from '../assets/dowloand.svg';
import Nuqta from '../assets/nuqtalar.svg';
import PastkiST from '../assets/pastki.svg';
import Search from '../assets/search.svg';
import Clock from '../assets/clock.svg';
import Yurak from '../assets/yashilYurak.svg';
import BorderYurak from '../assets/borderYurak.svg';
import Pause from '../assets/pause.svg';

function Details() {
  const [playlist, setPlaylist] = useState([]);
  const [trac, setTrac] = useState([]);
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(null);
  const audioRef = useRef(null);

  const dispatch = useDispatch();
  const { id } = useParams();

  // Redux'dan likes olish
  const likes = useSelector((state) => state.likes.value);

  useEffect(() => {
    http
      .get(`playlists/${id}`)
      .then((resp) => {
        console.log(resp.data);
        setPlaylist(resp.data);
        setTrac(resp.data.tracks.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

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
    const isLiked = likes.find((item) => item.id === value.track.id);
    if (isLiked) {
      dispatch(remove(value.track));
    } else {
      dispatch(add(value.track));
    }
  }

  return (
    <div className='details'>
      <div className=''>
        <div className='contain'></div>
        <div className='contain'>
          <div className='div pt-8 flex gap-8 backdrop-blur-2xl'>
            {playlist?.images?.length && (
              <img
                src={playlist?.images[0]?.url}
                alt=''
                className='w-[297px] h-[300px]'
              />
            )}
            <div className='text pt-16'>
              {playlist.public ? (
                <h3 className='text-white '>PUBLIC PLAYLIST</h3>
              ) : (
                <h3 className='text-white '>PUBLIC PLAYLIST</h3>
              )}
              <h3 className='text-white font-bold text-6xl pb-8'>
                {playlist.name
                  ?.split(' ')
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(' ')}
              </h3>
              <p className='text-white pb-1'>
                {playlist.description ? (
                  playlist.description.length > 20 ? (
                    <>
                      {playlist.description.slice(0, 30)}
                      <span className='text-gray-500'>... and more</span>
                    </>
                  ) : (
                    playlist.description
                  )
                ) : (
                  ''
                )}
              </p>
              <p className='text-white'>
                Made for davedirect3 - 34 songs, 2hr 01 min
              </p>
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
              {trac.length > 0 &&
                trac.map((value, index) => {
                  const isLiked = likes.find(
                    (item) => item.id === value.track.id
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
                            src={value.track.album.images[0].url}
                            alt=''
                            width={52}
                          />
                          <div className='name'>
                            <p>{value.track.name}</p>
                            <p>{value.track.artists[0].name}</p>
                          </div>
                        </div>
                      </div>
                      <div className='album'>
                        <p className=''>{value.track.name}</p>
                      </div>
                      <div className='data flex items-center gap-4'>
                        <button onClick={() => handleLikes(value)}>
                          {isLiked ? (
                            <img src={Yurak} alt='' width={30} />
                          ) : (
                            <img src={BorderYurak} alt='' width={25} />
                          )}
                        </button>
                        <span>
                          {Math.floor(value.track.duration_ms / 60000)}:
                          {(
                            '0' +
                            Math.floor((value.track.duration_ms % 60000) / 1000)
                          ).slice(-2)}
                        </span>
                        <button
                          onClick={() =>
                            handlePause(value.track.preview_url, value.track)
                          }
                        >
                          {current?.id === value.track.id && playing ? (
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

export default Details;
