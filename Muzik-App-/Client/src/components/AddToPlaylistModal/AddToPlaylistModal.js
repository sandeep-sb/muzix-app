import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';

export default function AddToPlaylistModal() {
  const [playlist, setPlaylist] = React.useState("");

  const handleChange = (event) => {
    setPlaylist(event.target.value);
  };

  return (
    <div className="AddToPlaylistModal">
      <FormControl
        variant="standard"
        sx={{
          m: 1,
          minWidth: 120,
          width: "80%",
          marginLeft: "10%",
        }}
      >
        <InputLabel id="demo-simple-select-standard-label">
          Playlists
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={playlist}
          onChange={handleChange}
          label="Your Playlist"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"my Playlist"}>my Playlist</MenuItem>
          <MenuItem value={"my Playlist"}>my Playlist</MenuItem>
          <MenuItem value={"demo"}>demo</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" endIcon={<PlaylistAddIcon />}
      sx={{float: "right", right: "10%", top: 5}}>
        Add
      </Button>
    </div>
  );
}
