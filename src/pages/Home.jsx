import React, { useEffect, useState } from 'react';
import '../App.css';
import http from '../axios';
import { useNavigate } from 'react-router-dom';

const CategorySection = ({ title, data, seeAll, handleSeeAll, handleItemClick }) => (
  <div className="category-section">
    <div className="flex justify-between">
      <h3 className="text-3xl text-white font-bold pb-6">{title}</h3>
      <button
        className="text-[#ADADAD] font-bold"
        onClick={handleSeeAll}
      >
        {seeAll ? 'SHOW LESS' : 'SEE ALL'}
      </button>
    </div>
    <div className="grid grid-cols-4 gap-8">
      {(seeAll ? data : data.slice(0, 4)).map((item) => (
        <div
          key={item.id}
          className="card p-5 rounded-md shadow-2xl w-[225px] bg-[#252323] hover:bg-[#292929]"
          onClick={() => handleItemClick(item.id)}
        >
          {item.images.map((img, idx) => (
            <img
              key={idx}
              src={img.url}
              alt="rasm"
              width={182}
              className="pb-6 rounded-md"
            />
          ))}
          <h3 className="text-white text-xl font-bold">{item.name}</h3>
          <p className="text-[#B3B3B3] pt-2 w-[185px]">
            {item.description.includes('<a') ? item.description.slice(41, 80) : item.description}
          </p>
        </div>
      ))}
    </div>
  </div>
);

function Home() {
  const [categories, setCategories] = useState({});
  const [seeAllStates, setSeeAllStates] = useState({});
  const navigate = useNavigate();

  const fetchData = (endpoint, key) => {
    http
      .get(endpoint)
      .then((data) =>
        setCategories((prev) => ({
          ...prev,
          [key]: data.data.playlists.items,
        }))
      )
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchData('/browse/featured-playlists', 'featured');
    fetchData('/browse/categories/toplists/playlists', 'topMixes');
    fetchData('/browse/categories/0JQ5DAqbMKFHOzuVTgTizF/playlists', 'madeForYou');
    fetchData('/browse/categories/0JQ5DAqbMKFQ00XGBls6ym/playlists', 'recentlyPlayed');
    fetchData('/browse/categories/0JQ5DAqbMKFLVaM30PMBm4/playlists', 'jumpBackIn');
    fetchData('/browse/categories/0JQ5DAqbMKFCbimwdOYlsl/playlists', 'uniquelyYours');
  }, []);

  const toggleSeeAll = (key) => {
    setSeeAllStates((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleItemClick = (id) => {
    navigate(`details/${id}`);
  };

  return (
    <div className="w-full">
      <div className="contain">
        <div className="text-white pt-6">
          <h2 className="text-[39px] font-bold">Good afternoon</h2>
          <div className="wrapper grid gap-16 grid-cols-2 gap-y-6 pt-4">
            {categories.featured?.slice(0, 6).map((item) => (
              <div
                key={item.id}
                className="w-[440px] flex gap-6 items-center bg-[#b3b3b32e] rounded-md"
                onClick={() => handleItemClick(item.id)}
              >
                <img src={item.images[0]?.url} alt="" width={66} />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#121212]">
        <div className="contain pt-8 flex flex-col">
          <CategorySection
            title="Your top mixes"
            data={categories.topMixes || []}
            seeAll={seeAllStates.topMixes || false}
            handleSeeAll={() => toggleSeeAll('topMixes')}
            handleItemClick={handleItemClick}
          />
          <CategorySection
            title="Made for you"
            data={categories.madeForYou || []}
            seeAll={seeAllStates.madeForYou || false}
            handleSeeAll={() => toggleSeeAll('madeForYou')}
            handleItemClick={handleItemClick}
          />
          <CategorySection
            title="Recently played"
            data={categories.recentlyPlayed || []}
            seeAll={seeAllStates.recentlyPlayed || false}
            handleSeeAll={() => toggleSeeAll('recentlyPlayed')}
            handleItemClick={handleItemClick}
          />
          <CategorySection
            title="Jump back in"
            data={categories.jumpBackIn || []}
            seeAll={seeAllStates.jumpBackIn || false}
            handleSeeAll={() => toggleSeeAll('jumpBackIn')}
            handleItemClick={handleItemClick}
          />
          <CategorySection
            title="Uniquely yours"
            data={categories.uniquelyYours || []}
            seeAll={seeAllStates.uniquelyYours || false}
            handleSeeAll={() => toggleSeeAll('uniquelyYours')}
            handleItemClick={handleItemClick}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
