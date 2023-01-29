import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./ImageCard.css"


export default function ImageCard() {
  return (
    <Card sx={{ width: 650, background: 'rgba(0,0,0,0.5)' }} className="root-2">
      <CardMedia
        sx={{ height: 440 }}
        image={process.env.PUBLIC_URL + 'https://images.pexels.com/photos/2346015/pexels-photo-2346015.jpeg?auto=compress&cs=tinysrgb&w=1600'}
        title="green iguana"
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h1" className='title' fontFamily="Nunito">
          Lizard
        </Typography>
        <Typography variant="body2" fontFamily="Nunito" className="description">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      
    </Card>
  );
}