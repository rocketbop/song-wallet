"use client";
import React, { useState } from 'react';
import Image from 'next/image'

export default function Home() {
  const [songListVisible, setSongListVisible] = useState(false);
  const [songViewVisible, setSongViewVisible] = useState(false);

  const toggleSongList = () => {
    setSongListVisible(!songListVisible);
  };

  const toggleSongView = () => {
    setSongViewVisible(!songViewVisible);
  };

  return (
    <div className="App">
      <button onClick={toggleSongList}>
        {songListVisible ? 'Hide Song List' : 'Show Song List'}
      </button>
      <button onClick={toggleSongView}>
        {songViewVisible ? 'Hide Song View' : 'Show Song View'}
      </button>

      {songListVisible && (
        <div className="window" id="songList">
          <h2>Song List</h2>
          {/* Content for Song List */}
        </div>
      )}

      {songViewVisible && (
        <div className="window" id="songView">
          <h2>Song View</h2>
          {/* Content for Song View */}
        </div>
      )}
    </div>
  );
}
