import React, { useEffect, useState } from 'react';
import '../App.css';
// Img

import http from '../axios';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [featured, setFeatured] = useState([]);
  const [mixes, setMixes] = useState([]);
  const [made, setMade] = useState([]);
  const [recent, setRecent] = useState([]);
  const [jump, setJump] = useState([]);
  const [uniq, setUniq] = useState([]);
  const [seeAll, setSeeAll] = useState(false);
  const [seeAllMade, setSeeAllMade] = useState(false);
  const [seeAllRecent, setSeeAllRecent] = useState(false);
  const [seeAllJump, setSeeAllJump] = useState(false);
  const [seeAllUniq, setSeeAllUniq] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    http
      .get('browse/featured-playlists')
      .then((data) => {
        // console.log(data.data.playlists.items);
        setFeatured(data.data.playlists.items);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    http
      .get('browse/categories/toplists/playlists')
      .then((data) => {
        // console.log(data.data.playlists);
        setMixes(data.data.playlists.items);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    http
      .get('browse/categories/0JQ5DAqbMKFHOzuVTgTizF/playlists')
      .then((data) => {
        // console.log(data.data.playlists.items);
        setMade(data.data.playlists.items);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    http
      .get('browse/categories/0JQ5DAqbMKFQ00XGBls6ym/playlists')
      .then((data) => {
        // console.log(data.data.playlists.items);
        setRecent(data.data.playlists.items);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    http
      .get('browse/categories/0JQ5DAqbMKFLVaM30PMBm4/playlists')
      .then((data) => {
        // console.log(data.data.playlists.items);
        setJump(data.data.playlists.items);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    http
      .get('browse/categories/0JQ5DAqbMKFCbimwdOYlsl/playlists')
      .then((data) => {
        // console.log(data.data.playlists.items);
        setUniq(data.data.playlists.items);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleSeeAll() {
    setSeeAll(!seeAll);
  }
  function handleSeeAllMade() {
    setSeeAllMade(!seeAllMade);
  }
  function handleSeeAllRecent() {
    setSeeAllRecent(!seeAllRecent);
  }
  function handleSeeAllJump() {
    setSeeAllJump(!seeAllJump);
  }

  function handleSeeAllUniq() {
    setSeeAllUniq(!seeAllUniq);
  }
  function handleFeat(id) {
    console.log(id);
  }
  function handleMixes(id) {
    navigate(`details/${id}`);
  }
  function handleRecent(id) {
    navigate(`details/${id}`);
  }
  function handleJump(id) {
    navigate(`details/${id}`);
  }
  function handleUniq(id) {
    navigate(`details/${id}`);
  }
  function handleMade(id) {
    navigate(`details/${id}`);
  }
  return (
    <div className='w-full '>
      <div className='contain'>
        <div className='text-white  pt-6'>
          <h2 className='text-[39px] font-bold'>Good afternoon</h2>
          <div className='wrapper grid gap-16  grid-cols-2 gap-y-6 pt-4'>
            {featured.length > 0 &&
              featured.slice(1, 7).map((value, index) => {
                return (
                  <div
                    className='w-[440px] flex  gap-6 items-center bg-[#b3b3b32e] rounded-md'
                    key={index}
                    onClick={() => handleFeat(value.id)}
                  >
                    {value.images.map((value) => {
                      return <img src={value.url} alt='' width={66} />;
                    })}
                    <p>{value.name}</p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <div className='bg-[#121212]'>
        <div className=' contain malum pt-8   flex flex-col '>
          <div className='flex justify-between'>
            <h3 className='text-3xl text-white font-bold pb-6'>
              Your top mixes
            </h3>
            <button className='text-[#ADADAD] font-bold' onClick={handleSeeAll}>
              SEE ALL
            </button>
          </div>

          <div className='mixes grid grid-cols-4 gap-8'>
            {seeAll
              ? mixes.map((value) => {
                  return (
                    <div
                      className='card p-5 rounded-md shadow-2xl w-[225px]  bg-[#252323] hover:bg-[#292929]'
                      onClick={() => handleMixes(value.id)}
                    >
                      {value.images.map((value) => {
                        return (
                          <img
                            src={value.url}
                            alt='rasm'
                            width={182}
                            className='pb-6 rounded-md'
                          />
                        );
                      })}
                      <h3 className='text-white text-xl font-bold'>
                        {value.name}
                      </h3>
                      <p className='text-[#B3B3B3] pt-2'>{value.description}</p>
                    </div>
                  );
                })
              : mixes.slice(0, 4).map((value) => {
                  return (
                    <div
                      onClick={() => handleMixes(value.id)}
                      className='card p-5 rounded-md shadow-2xl w-[225px]  bg-[#252323] hover:bg-[#292929]'
                    >
                      {value.images.map((value) => {
                        return (
                          <img
                            src={value.url}
                            alt='rasm'
                            width={182}
                            className='pb-6 rounded-md'
                          />
                        );
                      })}
                      <h3 className='text-white text-xl font-bold'>
                        {value.name}
                      </h3>
                      <p className='text-[#B3B3B3] pt-2'>{value.description}</p>
                    </div>
                  );
                })}
          </div>
          {/* MADE */}
          <div className='flex pt-8 justify-between'>
            <h3 className='text-3xl text-white font-bold pb-6'>Made for you</h3>
            <button
              className='text-[#ADADAD] font-bold'
              onClick={handleSeeAllMade}
            >
              SEE ALL
            </button>
          </div>
          <div className='made grid grid-cols-4 gap-8'>
            {seeAllMade
              ? made.map((value) => {
                  return (
                    <div
                      className='card p-5 rounded-md shadow-2xl w-[225px]  bg-[#252323] hover:bg-[#292929]'
                      onClick={() => handleMade(value.id)}
                    >
                      {value.images.map((value) => {
                        return (
                          <img
                            src={value.url}
                            alt='rasm'
                            width={182}
                            className='pb-6 rounded-md'
                          />
                        );
                      })}
                      <h3 className='text-white text-xl font-bold'>
                        {value.name}
                      </h3>
                      <p className='text-[#B3B3B3] pt-2 w-[185px]'>
                        {value.description.includes('<a')
                          ? value.description.slice(41, 80)
                          : value.description}
                      </p>
                    </div>
                  );
                })
              : made.slice(0, 4).map((value) => {
                  return (
                    <div
                      onClick={() => handleMade(value.id)}
                      className='card p-5 rounded-md shadow-2xl w-[225px]  bg-[#252323] hover:bg-[#292929]'
                    >
                      {value.images.map((value) => {
                        return (
                          <img
                            src={value.url}
                            alt='rasm'
                            width={182}
                            className='pb-6 rounded-md'
                          />
                        );
                      })}
                      <h3 className='text-white text-xl font-bold'>
                        {value.name}
                      </h3>
                      <p className='text-[#B3B3B3] pt-2 w-[185px]'>
                        {value.description.includes('<a')
                          ? value.description.slice(41, 80)
                          : value.description}
                      </p>{' '}
                    </div>
                  );
                })}
          </div>
          {/* RECENT */}
          <div className='flex  pt-8 justify-between'>
            <h3 className='text-3xl text-white font-bold pb-6'>
              Recently played
            </h3>
            <button
              className='text-[#ADADAD] font-bold'
              onClick={handleSeeAllRecent}
            >
              SEE ALL
            </button>
          </div>

          <div className='recent grid grid-cols-4 gap-8'>
            {seeAllRecent
              ? recent.map((value) => {
                  return (
                    <div
                      onClick={() => handleRecent(value.id)}
                      className='card p-5 rounded-md shadow-2xl w-[225px]  bg-[#252323] hover:bg-[#292929]'
                    >
                      {value.images.map((value) => {
                        return (
                          <img
                            src={value.url}
                            alt='rasm'
                            width={182}
                            className='pb-6 rounded-md'
                          />
                        );
                      })}
                      <h3 className='text-white text-xl font-bold'>
                        {value.name}
                      </h3>
                      <p className='text-[#B3B3B3] pt-2 w-[185px]'>
                        {value.description.includes('<a')
                          ? value.description.slice(41, 80)
                          : value.description}
                      </p>
                    </div>
                  );
                })
              : recent.slice(0, 4).map((value) => {
                  return (
                    <div
                      onClick={() => handleRecent(value.id)}
                      className='card p-5 rounded-md shadow-2xl w-[225px]  bg-[#252323] hover:bg-[#292929]'
                    >
                      {value.images.map((value) => {
                        return (
                          <img
                            src={value.url}
                            alt='rasm'
                            width={182}
                            className='pb-6 rounded-md'
                          />
                        );
                      })}
                      <h3 className='text-white text-xl font-bold'>
                        {value.name}
                      </h3>
                      <p className='text-[#B3B3B3] pt-2 w-[185px]'>
                        {value.description.includes('<a')
                          ? value.description.slice(41, 80)
                          : value.description}
                      </p>{' '}
                    </div>
                  );
                })}
          </div>

          {/* JUMP */}

          <div className='flex pt-8 justify-between'>
            <h3 className='text-3xl text-white font-bold pb-6'>Jump back in</h3>
            <button
              className='text-[#ADADAD] font-bold'
              onClick={handleSeeAllJump}
            >
              SEE ALL
            </button>
          </div>

          <div className='jump grid grid-cols-4 gap-8'>
            {seeAllJump
              ? jump.map((value) => {
                  return (
                    <div
                      onClick={() => handleJump(value.id)}
                      className='card p-5 rounded-md shadow-2xl w-[225px]  bg-[#252323] hover:bg-[#292929]'
                    >
                      {value.images.map((value) => {
                        return (
                          <img
                            src={value.url}
                            alt='rasm'
                            width={182}
                            className='pb-6 rounded-md'
                          />
                        );
                      })}
                      <h3 className='text-white text-xl font-bold'>
                        {value.name}
                      </h3>
                      <p className='text-[#B3B3B3] pt-2 w-[185px]'>
                        {value.description.includes('<a')
                          ? value.description.slice(41, 80)
                          : value.description}
                      </p>
                    </div>
                  );
                })
              : jump.slice(0, 4).map((value) => {
                  return (
                    <div
                      onClick={() => handleJump(value.id)}
                      className='card p-5 rounded-md shadow-2xl w-[225px]  bg-[#252323] hover:bg-[#292929]'
                    >
                      {value.images.map((value) => {
                        return (
                          <img
                            src={value.url}
                            alt='rasm'
                            width={182}
                            className='pb-6 rounded-md'
                          />
                        );
                      })}
                      <h3 className='text-white text-xl font-bold'>
                        {value.name}
                      </h3>
                      <p className='text-[#B3B3B3] pt-2 w-[185px]'>
                        {value.description.includes('<a')
                          ? value.description.slice(41, 80)
                          : value.description}
                      </p>{' '}
                    </div>
                  );
                })}
          </div>

          {/* UNIQ */}

          <div className='flex pt-8 justify-between'>
            <h3 className='text-3xl text-white font-bold pb-6'>
              Uniquely yours
            </h3>
            <button
              className='text-[#ADADAD] font-bold'
              onClick={handleSeeAllUniq}
            >
              SEE ALL
            </button>
          </div>

          <div className='uniq pb-32 grid grid-cols-4 gap-8'>
            {seeAllUniq
              ? uniq.map((value) => {
                  return (
                    <div
                      onClick={() => handleUniq(value.id)}
                      className='card p-5 rounded-md shadow-2xl w-[225px]  bg-[#252323] hover:bg-[#292929]'
                    >
                      {value.images.map((value) => {
                        return (
                          <img
                            src={value.url}
                            alt='rasm'
                            width={182}
                            className='pb-6 rounded-md'
                          />
                        );
                      })}
                      <h3 className='text-white text-xl font-bold'>
                        {value.name}
                      </h3>
                      <p className='text-[#B3B3B3] pt-2 w-[185px]'>
                        {value.description.includes('<a')
                          ? value.description.slice(41, 80)
                          : value.description}
                      </p>
                    </div>
                  );
                })
              : uniq.slice(0, 4).map((value) => {
                  return (
                    <div
                      onClick={() => handleUniq(value.id)}
                      className='card p-5 rounded-md shadow-2xl w-[225px]  bg-[#252323] hover:bg-[#292929]'
                    >
                      {value.images.map((value) => {
                        return (
                          <img
                            src={value.url}
                            alt='rasm'
                            width={182}
                            className='pb-6 rounded-md'
                          />
                        );
                      })}
                      <h3 className='text-white text-xl font-bold'>
                        {value.name}
                      </h3>
                      <p className='text-[#B3B3B3] pt-2 w-[185px]'>
                        {value.description.includes('<a')
                          ? value.description.slice(41, 80)
                          : value.description}
                      </p>{' '}
                    </div>
                  );
                })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
