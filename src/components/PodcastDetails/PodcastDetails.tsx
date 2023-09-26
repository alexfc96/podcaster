import { useLocation, useParams } from 'react-router-dom';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import './PodcastDetails.css';
import { useEffect, useState } from 'react';
import { PodcastDetail } from '../../types';

const PodcastDetails = () => {
  const [podcast, setPodcast] = useState<PodcastDetail[]>([])

  const location = useLocation();
  const podcastInfo = location.state?.podcast || null;
  const { podcastId } = useParams();

  useEffect(() =>{
    fetch(`https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`)
      .then(async response => await response.json())
      .then(res => {
        setPodcast(res.results);
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  console.log("po", podcast)

  return (
    <div className="podcast-details">
      {podcastInfo && (
        <Card className="detail-card">
          <CardMedia
            component="img"
            alt="Podcast"
            height="140"
            src={podcastInfo['im:image'][2].label}
            className="card-image"
            />
          <hr className="separator" />
          <CardContent>
            <Typography variant="h5" component="div" className="podcast-title">
              {podcastInfo['im:name'].label}
            </Typography>
            <Typography variant="body2" color="text.secondary" className="artist">
              By {podcastInfo['im:artist'].label}
            </Typography>
            <hr className="separator" />
            <Typography variant="body2" color="text.secondary" className="description-label">
              Description
            </Typography>
            <Typography variant="body2" color="text.secondary" className="description">
              {podcastInfo.summary.label}
            </Typography>
          </CardContent>
        </Card>
      )}
      {podcast.length > 0 && (
        <div className="episode-count">
          <Box
                sx={{
                    boxShadow: 7,
                    width: '140px',
                    p: 1,
                }}
            >
            Episodes: {podcast[0].trackCount }
          </Box>
        </div> 
      )}
    </div>
  );
};

export default PodcastDetails;
