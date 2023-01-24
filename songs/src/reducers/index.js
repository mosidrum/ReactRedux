import {combineReducers}from 'redux';

const songsReducer = () => {
    return [
        {
            title: 'No Scrubs',
            duration : '4:31'
        },
        {
            title: 'Arise',
            duration : '6:29'
        },
        {
            title: 'Increased Glory',
            duration : '5:55'
        },
        {
            title: 'Excess Love',
            duration : '6:06'
        }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers ({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});