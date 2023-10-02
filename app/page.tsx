"use client";
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import mockData from './mockData';
import SongExplorer from './SongExplorer.tsx';
import { useEditable } from 'use-editable';

export default function Home() {
  const [songListVisible, setSongListVisible] = useState(true);
  const [songVisible, setSongVisible] = useState(true);
  const [bothWindowsHidden, setBothWindowsHidden] = useState(true);
  const songs = mockData.songs;
  const [selectedSong, setSelectedSong] = useState(songs[0]);

  const [songRaw, setSongRaw] = useState(songs[0].text)
  const editorRef = useRef(null);

  useEditable(editorRef, setSongRaw);

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
    setSongRaw(song.text);
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

        <pre
          ref={editorRef}
        >
          {songRaw.split(/\r?\n/).map((content, i, arr) => (
            <React.Fragment key={i}>
              <span style={{ color: `hsl(${((i % 20) * 17) | 0}, 80%, 50%)` }}>
                {content}
              </span>
              {i < arr.length - 1 ? '\n' : null}
            </React.Fragment>
          ))}
        </pre>
        </div>

    )}
      </div>
    </div>
  );
}
