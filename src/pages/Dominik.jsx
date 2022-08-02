import { Typography, Container } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import stack from "../assets/tech-alt.png"

import "./Dominik.css"

function createData(
  info, description
) {
  return { info, description };
}

const rows = [
  createData('Title', 'MERN Developer'),
  createData('Site Location', 'Pittsburgh'),
  createData('Favorite Band', 'Nekrogoblikon'),
  createData('Favorite Move', 'Space Balls'),
  createData('Fun Fact', 'Can overhead press his wife'),
  createData('Tech Stack', <img style={{ maxHeight: 30 }} src={stack} alt="Tech Stack" />)
];

export default function Dominik(props) {
  return (
    <div className="cloud-bg">
      <Typography sx={{marginBottom: 6, color: 'white'}} variant="h1">Dominik</Typography>
      <Container>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="h5">Info</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h5">Description</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell>{row.info}</TableCell>
                  <TableCell>{row.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
};
