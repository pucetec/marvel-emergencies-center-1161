import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const data = [{
  id: 1,
  name: 'Frozen yoghurt',
  calories: 159,
  fat: 6.0,
  carbs: 24,
  protein: 4.0
},
{
  id: 2,
  name: 'Ice cream sandwich',
  calories: 237,
  fat: 9.0,
  carbs: 37,
  protein: 4.3
},
{
  id: 3,
  name: 'Eclair',
  calories: 262,
  fat: 16.0,
  carbs: 24,
  protein: 6.0
},
{
  id: 4,
  name: 'Cupcake',
  calories: 305,
  fat: 3.7,
  carbs: 67,
  protein: 4.3
},
{
  id: 5,
  name: 'Gingerbread',
  calories: 356,
  fat: 16.0,
  carbs: 49,
  protein: 3.9
}
]
const EmergencyTable = () => {

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((data) => (
            <TableRow
              key={data.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {data.name}
              </TableCell>
              <TableCell align="right">{data.calories}</TableCell>
              <TableCell align="right">{data.fat}</TableCell>
              <TableCell align="right">{data.carbs}</TableCell>
              <TableCell align="right">{data.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default EmergencyTable;
