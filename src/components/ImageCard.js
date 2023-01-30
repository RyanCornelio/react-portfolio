import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./ImageCard.css"
import places from "./static/places";

const ImageCard = () => {
  return (
    places.map((p) => (
        <Card key={p.key}  sx={{ width: 645, background: 'rgba(0,0,0,0.5)', margin: '20px'} }>
          <CardMedia sx={{ height: 440 }} className='media'>
            <img src={p.imageUrl} alt="projects" sx={{ width: 645}}/>
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h1" className='title' fontFamily="Nunito">
              {p.title}
            </Typography>
            <Typography variant="body2" fontFamily="Nunito" className="description">
              {p.description}
              <br></br>
              <a href={p.url}>Github</a>
              <br></br>
              <a href={p.live}>Preview</a>
            </Typography>
          </CardContent>
        </Card>
    )
  ))
    
  }

export default ImageCard;