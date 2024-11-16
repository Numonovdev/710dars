import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../App.css';
// rasmlar
import Homesvg from '../assets/home.svg';
import Librarysvg from '../assets/library.svg';
import Createsvg from '../assets/create.svg';
import Likessvg from '../assets/likes.svg';
import Searchsvg from '../assets/search.svg';
import http from '../axios';

function LeftBord() {
  const [madeForYou, setMadeForYou] = useState([]);
  useEffect(() => {
    http
      .get('browse/categories/0JQ5DAqbMKFHOzuVTgTizF/playlists')
      .then((data) => {
        setMadeForYou(data.data.playlists.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div className=' pl-8 flex flex-col'>
        <nav className='flex flex-col gap-4 text-white pt-[50px] border-b-2 border-gray-800 pb-5'>
          <NavLink to='/' className='flex gap-5 navLink items-center'>
            <img src={Homesvg} alt='rasm' />
            <p>Home</p>
          </NavLink>
          <NavLink to='/' className='flex gap-5 navLink items-center'>
            <img src={Searchsvg} alt='rasm' />
            <p>Search</p>
          </NavLink>{' '}
          <NavLink to='/' className='flex gap-5 navLink items-center pb-8'>
            <img src={Librarysvg} alt='rasm' />
            <p>Your Library</p>
          </NavLink>{' '}
          <NavLink to='/' className='flex gap-5 navLink items-center'>
            <img src={Createsvg} alt='rasm' />
            <p>Create Playlist</p>
          </NavLink>
          <NavLink to='/likes' className='flex gap-5 navLink items-center'>
            <img src={Likessvg} alt='rasm' />
            <p>Liked Songs</p>
          </NavLink>
        </nav>
        <div className='tavsiya flex flex-col gap-2 pt-5'>
          {madeForYou.length > 0 &&
            madeForYou.slice(1, 11).map((value, index) => {
              return (
                <Link to='/' key={index}>
                  {value.name}
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default LeftBord;
