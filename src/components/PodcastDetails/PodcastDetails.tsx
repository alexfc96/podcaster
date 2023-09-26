import { useLocation } from 'react-router-dom';
import './PodcastDetails.css';

const PodcastDetails = () => {
  const location = useLocation();
  const podcast = location.state?.podcast || null;

  return (
    <div>
      {podcast && (
        <>
          <h2>{podcast['im:name'].label}</h2>
        </>
      )}
    </div>
  );
};

export default PodcastDetails;
