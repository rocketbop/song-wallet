"use client";
import React, { useState } from 'react';
import Image from 'next/image'
import mockData from './mockData';

export default function Home() {
  const [songListVisible, setSongListVisible] = useState(true);
  const [songVisible, setSongVisible] = useState(true);
  const [bothWindowsHidden, setBothWindowsHidden] = useState(true);
  const songs = mockData.songs;
  const [selectedSong, setSelectedSongId] = useState(songs[0]);

  const toggleSongList = () => {
    setSongListVisible(!songListVisible);
    setBothWindowsHidden(!songListVisible && !songVisible);
  };

  const toggleSong = () => {
    setSongVisible(!songVisible);
    setBothWindowsHidden(!songListVisible && !songVisible);
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
        <button className="btn btn-blue" onClick={toggleSong}>
          {songVisible ? 'Hide Song Editor' : 'Show Song Editor'}
        </button>
      </div>

      <div className="windows">
        {songListVisible && (
          <div className="window" id="song-explorer-window">
            <div className="bg-slate-50" id="song-explorer-menu">
              <h2>Song List</h2>
            </div>
            <div id="song-explorer-list" className="text-left p-2">
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
          </div>
        )}

    {songVisible && (
      <div className="window" id="song-editor">
        <h2>Song Editor</h2>
        <h3>{selectedSong.title}</h3>
      </div>
    )}
      </div>
    </div>
  );
}
