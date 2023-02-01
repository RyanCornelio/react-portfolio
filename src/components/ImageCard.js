import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./ImageCard.css"
import places from "./static/places";
import { Grid } from '@mui/material';

const ImageCard = () => {
  return (
    places.map((p) => (
      <Grid>

        <Card key={p.key} sx={{ background: 'rgba(0,0,0,0.5)', margin: '20px' }} className='card'>
          <CardMedia className='media'>
            <img src={p.imageUrl} alt="projects" />
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
              <div className="stack">
                <img src={p.stack1}></img>
                <img src={p.stack2}></img>
                <img src={p.stack3}></img>
                <img src={p.stack4}></img>
              </div>

            </Typography>
          </CardContent>
        </Card>

      </Grid>
    )
    ))

}

export default ImageCard;