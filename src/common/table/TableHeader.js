import React from "react";
import { TableHead, TableRow, TableCell } from "@mui/material";

const TableHeader = ({ headers }) => (
  <TableHead>
    <TableRow>
      {headers.map((header, index) => (
        <TableCell key={index}>{header}</TableCell>
      ))}
    </TableRow>
  </TableHead>
);

export default TableHeader;
