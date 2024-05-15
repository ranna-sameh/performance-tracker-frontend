import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { API_URL } from "../../api";
import SortingTableHead from "./Components/SortingTableHead";
import { useNavigate } from "react-router-dom";

const SortingTable = ({ headCells, url, isCampaign, setCampaignDetails }) => {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("id");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [rows, setRows] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_URL}/${url}`, {
        params: {
          page: page + 1,
          page_size: rowsPerPage,
          ordering: `${order === "desc" ? "-" : ""}${orderBy}`,
        },
      })
      .then((response) => {
        const data = response.data;
        let results = data.results;
        if (isCampaign) {
          setCampaignDetails(results.campaign);
          results = results.ads;
        }
        setRows(results);
        setTotalCount(data.count);
      })
      .catch();
  }, [page, rowsPerPage, orderBy, order, isCampaign, setCampaignDetails, url]);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  console.log("testttt", rows);
  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size="medium"
          >
            <SortingTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              headCells={headCells}
            />
            <TableBody>
              {rows?.map((row, index) => {
                return (
                  <TableRow
                    hover
                    onClick={(event) => navigate(`/campaigns/${row.id}`)}
                    key={index}
                  >
                    {headCells.map((headCell) => (
                      <TableCell align="right">{row[headCell.id]}</TableCell>
                    ))}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={totalCount}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          nextIconButtonProps={{
            disabled: (page + 1) * rowsPerPage >= totalCount,
          }}
          backIconButtonProps={{
            disabled: page === 0,
          }}
        />
      </Paper>
    </Box>
  );
};
export default SortingTable;
