'use client'
import React, { useState, useRef, useCallback } from 'react'
import { useEditable } from 'use-editable'
import mockData from './mockData'
import SongExplorer from '@/components/SongExplorer'
import { Editable } from '@/components/Editable'

export default function Home() {
  const [songListVisible, setSongListVisible] = useState(true)
  const [songVisible, setSongVisible] = useState(true)
  const songs = mockData.songs
  const [selectedSong, setSelectedSong] = useState(songs[0])

  const [songRaw, setSongRaw] = useState(songs[0].text)
  const editorRef = useRef(null)

  const onEditableChange = useCallback((songRaw) => {
    setSongRaw(songRaw.slice(0, -1));
  }, []);

  useEditable(editorRef, onEditableChange, {
    disabled: false,
    indentation: 2
  })

  const toggleSongList = () => {
    setSongListVisible(!songListVisible)
    // setBothWindowsHidden(!songListVisible && !songVisible)
  }

  const toggleSong = () => {
    setSongVisible(!songVisible)
    // setBothWindowsHidden(!songListVisible && !songVisible)
  }

  const handleClickSongTitle = (song) => {
    setSelectedSong(song)
    setSongRaw(song.text)
  }

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
            <Editable songRaw={songRaw} editorRef={editorRef} />
          </div>
        )}
      </div>
    </div>
  )
}
