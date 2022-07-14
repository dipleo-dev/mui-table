import React from "react";
import { useState } from "react";

import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableFooter,
  TableSortLabel,
  SxProps,
  Paper,
} from "@mui/material";
import SAMPLE_DATA from "../SAMPLE_DATA.json";

const tableData = SAMPLE_DATA;
let totalExpense: number = 0;

tableData.forEach(
  (row) => (totalExpense += parseInt(row.amount.replace(/[^0-9.-]+/g, "")))
);

const MuiTable = () => {
  const tableContainerSx: SxProps = {
    border: "1px solid rgba(128,128,128,0.4)",
    width: "max-content",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 4,
    borderRadius: 2,
    maxHeight: 500,
  };

  return (
    <TableContainer component={Paper} sx={tableContainerSx}>
      <Table stickyHeader={true} aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell>
              <TableSortLabel direction={"desc"}>Departments</TableSortLabel>
            </TableCell>
            <TableCell>Project Name</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow key={row.member_name}>
              <TableCell>{row.departments}</TableCell>
              <TableCell>{row.project_name}</TableCell>
              <TableCell>{row.amount}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.member_name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableCell align="right">Total: {totalExpense}€ </TableCell>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

export default MuiTable;
