"use client";
import React, { useState } from 'react';
import Image from 'next/image'
import mockData from './mockData';
import SongExplorer from './SongExplorer.tsx';

export default function Home() {
  const [songListVisible, setSongListVisible] = useState(true);
  const [songVisible, setSongVisible] = useState(true);
  const [bothWindowsHidden, setBothWindowsHidden] = useState(true);
  const songs = mockData.songs;
  const [selectedSong, setSelectedSong] = useState(songs[0]);
  const [editorContent, setEditorContent] = useState(songs[0].text);

  const toggleSongList = () => {
    setSongListVisible(!songListVisible);
    setBothWindowsHidden(!songListVisible && !songVisible);
  };

  const toggleSong = () => {
    setSongVisible(!songVisible);
    setBothWindowsHidden(!songListVisible && !songVisible);
  };

  const handleClickSongTitle = (song) => {
    setSelectedSong(song);
    setEditorContent(song.text)
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
      <SongExplorer
        songs={songs}
        selectedSong={selectedSong}
        handleClickSongTitle={handleClickSongTitle}
      />
    )}

    {songVisible && (
      <div className="window" id="song-editor">
        <h2>Song Editor</h2>
        <h3>{selectedSong.title}</h3>
        <textarea
          value={editorContent}
          onChange={e => setEditorContent(e.target.value)}>
        </textarea>
      </div>
    )}
    </div>
    </div>
  );
}
