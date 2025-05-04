import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const specifications = [
  {
    model: "LiveWire One",
    range: "146 miles (city)",
    power: "105 hp",
    torque: "86 ft-lb",
    chargingTime: "0-100% in 60 minutes (DC Fast Charge)",
    weight: "562 lbs",
    topSpeed: "110+ mph"
  },
  {
    model: "LiveWire S2 Del Mar",
    range: "110 miles (city)",
    power: "80 hp",
    torque: "184 ft-lb",
    chargingTime: "75 minutes (Level 2)",
    weight: "431 lbs",
    topSpeed: "103 mph"
  }
];

export default function Specifications() {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          component="h2" 
          sx={{ 
            mb: 6, 
            textAlign: 'center',
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
          }}
        >
          Technical Specifications
        </Typography>
        <TableContainer 
          component={Paper}
          sx={{
            overflowX: 'auto',
            '& .MuiTable-root': {
              minWidth: 650
            }
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Model</TableCell>
                <TableCell>Range</TableCell>
                <TableCell>Power</TableCell>
                <TableCell>Torque</TableCell>
                <TableCell>Charging Time</TableCell>
                <TableCell>Weight</TableCell>
                <TableCell>Top Speed</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {specifications.map((spec) => (
                <TableRow key={spec.model}>
                  <TableCell>{spec.model}</TableCell>
                  <TableCell>{spec.range}</TableCell>
                  <TableCell>{spec.power}</TableCell>
                  <TableCell>{spec.torque}</TableCell>
                  <TableCell>{spec.chargingTime}</TableCell>
                  <TableCell>{spec.weight}</TableCell>
                  <TableCell>{spec.topSpeed}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
}