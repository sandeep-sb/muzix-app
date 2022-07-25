import React from "react";
import "./NavbarBottom.css";
import { useState } from "react";
import { Modal} from "@mantine/core";
import AddIcon from '@mui/icons-material/Add';
import CreatePlayListModal from "../CreatePlayListModal/CreatePlayListModal";

export default function NavbarBottom() {
  const [opened, setOpened] = useState(false);
  //playlist state
  const [playlist, setPlaylist] = useState([]);
  React.useEffect(() => {
    // get playlists
fetch('https://muzixplaylist.herokuapp.com/api/getPlaylist', {
  method: 'GET',
  headers: {
      'Content-Type': 'application/json'
  }
}).then(res => res.json())
  .then(data => {console.log(data)
    setPlaylist(data);});
  }, []);
  //end of playlist state




  return (
    <div className="NavbarBottom">
      <Modal
        className="CreatePlaylistDiv"
        opened={opened}
        onClose={() => setOpened(false)}
        title=  "Create PlayList"
      >
        <CreatePlayListModal/>
      </Modal>
      <div className=" NavIcon createPlaylist">
        <h4 onClick={() => setOpened(true)}>
          <i className="navTop-icon fa-solid fa-square-plus"></i>Create Playlist
        </h4>
      </div>
      <div className=" NavIcon LikedSongs">
        <h4>
          <i className="navTop-icon fa-hart fa-solid fa-heart"></i>Liked Songs
        </h4>
      </div>
      <div className="LastLine"></div>

      {playlist.map((playlist) => (
        <div className="Playlists">
        <div className="playlist-list">
          <h4>{playlist.playlistName}</h4>
        </div>
        
      </div>
      ))}
    </div>
  );
}
