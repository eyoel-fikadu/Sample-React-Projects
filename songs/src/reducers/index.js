import { combineReducers } from "@reduxjs/toolkit";

const songsReducer = () => {
  return [
    {
      title: "No scrubs",
      duration: "4:05",
    },
    {
      title: "Macarena",
      duration: "2:05",
    },
    {
      title: "No Surpice",
      duration: "6:05",
    },
    {
      title: "Home",
      duration: "4:00",
    },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
