import { Avatar, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import { Podcast } from '../../types';
import './PodcastCard.css';

interface Props {
  podcast: Podcast
}

const PodcastCard = ({ podcast }: Props) => {
  return (
    <Card className="card">
      <CardHeader
        avatar={
          <Avatar
            alt="Podcast"
            src={podcast['im:image'][0].label}
            sx={{
              width: 100,
              height: 100,
              margin: '0 auto',
            }}
          />
        }
      />
      <div className="media-container">
        <CardMedia
          className="media"
          image={podcast['im:image'][0].label}
          title="Podcast"
        />
      </div>
      <CardContent className="content">
        <Typography variant="h5" component="div">
          {podcast['im:name'].label}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Author: {podcast['im:artist'].label}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PodcastCard;
