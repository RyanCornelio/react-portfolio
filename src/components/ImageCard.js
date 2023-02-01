import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./ImageCard.css"
import places from "./static/places";
<<<<<<< HEAD
import { Grid } from '@mui/material';
=======
>>>>>>> ec47a206d4ec7bbc4aaaed26520df1e74282bbbb

const ImageCard = () => {
  return (
    places.map((p) => (
<<<<<<< HEAD
      <Grid>

        <Card key={p.key} sx={{ background: 'rgba(0,0,0,0.5)', margin: '20px' }} className='card'>
          <CardMedia className='media'>
            <img src={p.imageUrl} alt="projects" />
=======
        <Card key={p.key}  sx={{ width: 645, background: 'rgba(0,0,0,0.5)', margin: '20px'} } className='card'>
          <CardMedia sx={{ height: 440 }} className='media'>
            <img src={p.imageUrl} alt="projects" sx={{ width: 645}}/>
>>>>>>> ec47a206d4ec7bbc4aaaed26520df1e74282bbbb
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
<<<<<<< HEAD
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
=======
            </Typography>
          </CardContent>
        </Card>
    )
  ))
    
  }
>>>>>>> ec47a206d4ec7bbc4aaaed26520df1e74282bbbb

export default ImageCard;