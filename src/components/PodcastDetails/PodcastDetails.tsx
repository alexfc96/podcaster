import { useLocation } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import './PodcastDetails.css';

const PodcastDetails = () => {
  const location = useLocation();
  const podcast = location.state?.podcast || null;

  return (
    <div className="podcast-details">
      {podcast && (
        <Card className="detail-card">
          <CardMedia
            component="img"
            alt="Podcast"
            height="140"
            src={podcast['im:image'][2].label}
            className="card-image"
          />
          <hr className="separator" />
          <CardContent>
            <Typography variant="h5" component="div" className="podcast-title">
              {podcast['im:name'].label}
            </Typography>
            <Typography variant="body2" color="text.secondary" className="artist">
              By {podcast['im:artist'].label}
            </Typography>
            <hr className="separator" />
            <Typography variant="body2" color="text.secondary" className="description-label">
              Description
            </Typography>
            <Typography variant="body2" color="text.secondary" className="description">
              {podcast.summary.label}
            </Typography>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default PodcastDetails;
