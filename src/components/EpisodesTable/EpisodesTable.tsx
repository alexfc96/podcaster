import { Table, TableHead, TableBody, TableRow, TableCell } from "@mui/material";
import { PodcastDetail } from "../../types";
import { Link } from "react-router-dom";
import { formatDate, formatMinutes } from "../../services/dateFormatter";

interface Props {
  episodes: PodcastDetail[];
}

const EpisodesTable = ({ episodes }: Props) => {

    return (
        <Table style={{ width: "100%", borderCollapse: "collapse" }}>
        <TableHead>
            <TableRow style={{ backgroundColor: "#fff" }}>
            <TableCell style={{ padding: 8 }}>Title</TableCell>
            <TableCell style={{ padding: 8 }}>Date</TableCell>
            <TableCell style={{ padding: 8 }}>Duration</TableCell>
            </TableRow>
        </TableHead>

        <TableBody>
            {episodes.map((episode, index) => {
                const backgroundColor = index % 2 === 0 ? `#f2f2f2` : `#fff`;
                return (
                    <TableRow key={episode.trackId} style={{ backgroundColor: backgroundColor }}>  
                        <TableCell style={{ padding: 8, maxWidth: 300 }}>
                            <Link to={`/podcast/${episode.collectionId}/episode/${episode.trackId}`}  state={{ episode }} style={{ color: 'blue' }}>
                                {episode.trackName}
                            </Link>
                        </TableCell>
                        <TableCell style={{ padding: 8 }}>{formatDate(episode.releaseDate)}</TableCell>
                        <TableCell style={{ padding: 8 }}>{formatMinutes(episode.trackTimeMillis)}</TableCell>
                    </TableRow>
                )}
            )}
        </TableBody>
        </Table>
    );
};

export default EpisodesTable;
