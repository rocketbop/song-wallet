function SongExplorer({ songs, selectedSong, handleClickSongTitle }) {
  return (
    <div className="window" id="song-explorer-window">
      <div className="bg-slate-50" id="song-explorer-menu">
        <h2>Song Explorer</h2>
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
  )
}

export default SongExplorer
