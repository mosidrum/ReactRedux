import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ mySelectedSong }) => {
  if (!mySelectedSong) {
    return <div>Select a song to display</div>;
  } else {
    return (
      <div>
        <h5>Title:
           {mySelectedSong.title} <br />
        Duration: { mySelectedSong.duration}</h5>
      </div>

    );
  }
};

const mapStateToProps = (state) => {
  return { mySelectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
