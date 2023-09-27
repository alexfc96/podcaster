import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

import './Header.css';

interface Props {
  isLoading: boolean;
}

const Header = ({ isLoading }: Props) => {
  return (
    <header className="header-container">
      <Link to={`/`} className="link">
        <Typography variant="h5" className="header-title">
          Podcaster
        </Typography>
      </Link>
      {isLoading && (
          <CircularProgress />
      )}
    </header>
  );
};

export default Header;