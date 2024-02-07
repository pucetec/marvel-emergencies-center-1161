import React from "react";
import { TableRow, TableCell } from "@mui/material";

const TableRowComponent = ({ cells }) => (
  <TableRow>
    {cells.map((cell, cellIndex) => (
      <TableCell key={cellIndex}>{cell}</TableCell>
    ))}
  </TableRow>
);

export default TableRowComponent;
