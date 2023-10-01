"use client";
import React, { useState } from 'react';
import ContentEditable from 'react-contenteditable';
import sanitizeHtml from "sanitize-html"
import Image from 'next/image'
import mockData from './mockData';
import SongExplorer from './SongExplorer.tsx';
import { songproToHtml } from './parser.ts';

export default function Home() {
  const [songListVisible, setSongListVisible] = useState(true);
  const [songVisible, setSongVisible] = useState(true);
  const [bothWindowsHidden, setBothWindowsHidden] = useState(true);
  const songs = mockData.songs;
  const [selectedSong, setSelectedSong] = useState(songs[0]);
  const [editorHtml, setEditorHtml] = useState(songproToHtml(songs[0].text))

  const toggleSongList = () => {
    setSongListVisible(!songListVisible);
    setBothWindowsHidden(!songListVisible && !songVisible);
  };

  const toggleSong = () => {
    setSongVisible(!songVisible);
    setBothWindowsHidden(!songListVisible && !songVisible);
  };

  const handleClickSongTitle = (song) => {
    console.log(song)
    setSelectedSong(song);
    setEditorHtml(songproToHtml(song.text))
  };

  const handleEditorHtmlChange = React.useCallback(evt => {
		const sanitizeConf = {
			allowedTags: ["b", "i", "a", "p", "span", "br"],
			allowedAttributes: { a: ["href"] }
		};

		setEditorHtml(sanitizeHtml(evt.currentTarget.innerHTML, sanitizeConf))
	}, [])
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
        <ContentEditable
          className="text-left"
          html={editorHtml}
          onChange={handleEditorHtmlChange}
        />
        </div>
    )}
      </div>
    </div>
  );
}
