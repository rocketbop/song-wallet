"use client";
import React, { useState } from 'react';
import Image from 'next/image'
import mockData from './mockData';

export default function Home() {
  const [songListVisible, setSongListVisible] = useState(true);
  const [songViewVisible, setSongViewVisible] = useState(true);
  const [bothWindowsHidden, setBothWindowsHidden] = useState(true);
  const songs = mockData.songs;
  const [selectedSong, setSelectedSongId] = useState(songs[0]);

  const toggleSongList = () => {
    setSongListVisible(!songListVisible);
    setBothWindowsHidden(!songListVisible && !songViewVisible);
  };

  const toggleSongView = () => {
    setSongViewVisible(!songViewVisible);
    setBothWindowsHidden(!songListVisible && !songViewVisible);
  };

  const handleClickSongTitle = (songId) => {
    setSelectedSongId(songId);
  };

  return (
    <div className={`App`}>
      <div className="menu">
        <button className="btn btn-blue" onClick={toggleSongList}>
          {songListVisible ? 'Hide Song List' : 'Show Song List'}
        </button>
        <button className="btn btn-blue" onClick={toggleSongView}>
          {songViewVisible ? 'Hide Song View' : 'Show Song View'}
        </button>
      </div>

      <div className="windows">
        {songListVisible && (
          <div className="window" id="songList">
            <h2>Song List</h2>
            <ul>
              {songs.map((song) => (
                <li
                  key={song.id}
                  className={song.id === selectedSong.id ? 'font-bold' : ''}
                  onClick={() => handleClickSongTitle(song)}
                >
                  {song.title}
                </li>
              ))}
            </ul>

          </div>
        )}

    {songViewVisible && (
      <div className="window" id="songView">
        <h2>Song View</h2>
        <h3>{selectedSong.title}</h3>
      </div>
    )}
      </div>
    </div>
  );
}
