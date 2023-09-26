import { Table, TableHead, TableBody, TableRow, TableCell } from "@mui/material";
import { PodcastDetail } from "../../types";

interface Props {
  episodes: PodcastDetail[];
}

const EpisodesTable = ({ episodes }: Props) => {
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
                        <TableCell style={{ padding: 8, maxWidth: 300 }}>{episode.trackName}</TableCell>
                        <TableCell style={{ padding: 8 }}>{episode.releaseDate}</TableCell>
                        <TableCell style={{ padding: 8 }}>{`${(episode.trackTimeMillis / 60000).toFixed(2)} minutes`}</TableCell>
                    </TableRow>
                )}
            )}
        </TableBody>
        </Table>
    );
};

export default EpisodesTable;
