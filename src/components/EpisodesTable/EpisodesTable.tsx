import { Table, TableHead, TableBody, TableRow, TableCell } from "@mui/material";
import { PodcastDetail } from "../../types";
import { Link } from "react-router-dom";

interface Props {
  episodes: PodcastDetail[];
}

const EpisodesTable = ({ episodes }: Props) => {
    function formatDate(originalDate: string) {
        const date = new Date(originalDate);
        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const year = date.getFullYear();
      
        return `${day}/${month}/${year}`;
    }

    function formatMinutes(time: number) {
        const minutes = Math.floor(time / 60000);
        const seconds = ((time % 60000) / 1000).toFixed(0);

        if(minutes >= 60) {
            const hours = Math.floor(minutes / 60);
            const leftMinutes = minutes % 60;
            return `${hours}h:${leftMinutes}`;
        }
        return `${minutes}:${seconds.padStart(2, '0')}`;
    }

    return (
        <Table style={{ width: "100%", borderCollapse: "collapse" }}>
        <TableHead>
            <TableRow style={{ backgroundColor: "#f2f2f2" }}>
            <TableCell style={{ padding: 8 }}>Title</TableCell>
            <TableCell style={{ padding: 8 }}>Date</TableCell>
            <TableCell style={{ padding: 8 }}>Duration</TableCell>
            </TableRow>
        </TableHead>

        <TableBody>
            {episodes.map((episode, index) => {
                const backgroundColor = index % 2 === 0 ? `#fff` : `#f2f2f2`;
                return (
                    <TableRow key={episode.trackId} style={{ backgroundColor: backgroundColor }}>  
                        <TableCell style={{ padding: 8, maxWidth: 300 }}>
                            <Link to={`/podcast/${episode.collectionId}/episode/${episode.trackId}`} style={{ color: 'blue' }}>
                                {episode.trackName}
                            </Link>
                        </TableCell>
                        <TableCell style={{ padding: 8 }}>{formatDate(episode.releaseDate)}</TableCell>
                        <TableCell style={{ padding: 8 }}>{formatMinutes(episode.trackTimeMillis)} minutes</TableCell>
                    </TableRow>
                )}
            )}
        </TableBody>
        </Table>
    );
};

export default EpisodesTable;
