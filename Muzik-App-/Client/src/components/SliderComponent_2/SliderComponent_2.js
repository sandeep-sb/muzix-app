import React from 'react'
import { useState } from "react";
import './SliderComponent_2.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Modal} from "@mantine/core";
import { CardActionArea } from '@mui/material';
import Login from '../../img/login.PNG'
import AddToPlaylistModal from '../AddToPlaylistModal/AddToPlaylistModal';

export default function SliderComponent_2() {

  const [opened, setOpened] = useState(false);

  const [SongData, setSongData] = React.useState([]);


  React.useEffect(() => {
    
    fetch("http://localhost:8000/api/GetTopArtist")
      .then(res => res.json())
      .then(data => {
        setSongData(data.tracks);
        //console.log(data.tracks);
      }
      )
  }, []);



  return (
    <div className='SliderComponent_2'>
      <Modal
        className="CreatePlaylistDiv"
        opened={opened}
        onClose={() => setOpened(false)}
        title=  "Create PlayList"
      >
        <AddToPlaylistModal/>
      </Modal>
        <h2 className='SliderComponentHeading SongComponentHeading'>Top Artists</h2>
      <div className='Sub-SliderComponent'>
        {SongData?.map((track) =>
          <div className="SliderComponent_2_card" key={track.id}>
            
          <Card className='cards-layout'
          sx={{backgroundColor: "#485461",
            backgroundImage: "linear-gradient(315deg, #485461 0%, #28313b 74%)"}}>
          
          <CardActionArea>
          
            <img src={track.album.images[1].url} id="image"  alt="green iguana" />
           
            

            <CardContent >
              <Typography gutterBottom variant="h5" component="div">
               
              {track.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              {track.artists.name}
              <audio controls>
                <source src={track.preview_url} type="audio/mpeg" />
              </audio>

              </Typography>
            </CardContent>
          </CardActionArea>
          <i class="slider-component2_heart fa-solid fa-plus float-end text-end"></i>

          <i class="slider-component2_heart fa-regular fa-heart float-end text-end" onClick={() => setOpened(true)}></i>
          
          
        </Card>
        </div>)}


      

    </div>
    </div>
  )
}
