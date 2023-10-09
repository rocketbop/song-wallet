'use client'
import React, { useState, useRef, useCallback } from 'react'
import { useEditable } from 'use-editable'
import SongExplorer from '@/components/SongExplorer'
import { Editable } from '@/components/Editable'
import { ToggleButton } from './ToggleButton'

import { Song } from '@prisma/client'
import { NewSongForm } from './NewSongForm'

export default function Window({ songs }: { songs: Array<Song> }) {
  const [songListVisible, setSongListVisible] = useState(true)
  const [songVisible, setSongVisible] = useState(true)
  const [selectedSong, setSelectedSong] = useState(songs[0])
  const [newSongFormVisible, setNewSongFormVisible] = useState(false)

  const [songRaw, setSongRaw] = useState(songs[0].text)
  const editorRef = useRef(null)

  const onEditableChange = useCallback((songRaw) => {
    setSongRaw(songRaw.slice(0, -1))
  }, [])

  useEditable(editorRef, onEditableChange, {
    disabled: false,
    indentation: 2,
  })

  const toggleSongList = () => {
    setSongListVisible(!songListVisible)
  }

  const toggleSong = () => {
    setSongVisible(!songVisible)
  }

  const handleClickSongTitle = (song: any) => {
    setSelectedSong(song)
    setSongRaw(song.text)
  }

  const newSongButtonClicked = () => {
    const formShouldBeVisible = !newSongFormVisible
    setNewSongFormVisible(formShouldBeVisible)
    setSongListVisible(!formShouldBeVisible)
    setSongVisible(!formShouldBeVisible)
  }

  const handleSaveClick = async (formData: any) => {
    const _response = await fetch(`/api/song`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: formData.title,
      }),
    })
    setNewSongFormVisible(false)
    setSongListVisible(!songListVisible)
    setSongVisible(!songVisible)
  }

  return (
    <div className={`App`}>
      <div className="menu">
        <ToggleButton
          label="Song List"
          visible={songListVisible}
          onClick={toggleSongList}
        />

        <ToggleButton
          label="Song Editor"
          visible={songVisible}
          onClick={toggleSong}
        />
        <button
          className={`btn btn-wide mx-1 ${
            newSongFormVisible ? 'btn-disabled' : 'btn-active'
          }`}
          onClick={newSongButtonClicked}
        >
          New Song
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

        {newSongFormVisible && <NewSongForm onSaveClick={handleSaveClick} />}
      </div>
    </div>
  )
}
