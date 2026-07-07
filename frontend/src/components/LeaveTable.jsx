import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Chip,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function LeaveTable({
  leaves = [],
  onEdit,
  onDelete,
}) {
  return (
    <TableContainer component={Paper} elevation={3}>
      <Table>

        <TableHead>

          <TableRow sx={{ backgroundColor: "#1976d2" }}>

            <TableCell sx={{ color: "white", fontWeight: "bold" }}>
              Leave ID
            </TableCell>

            <TableCell sx={{ color: "white", fontWeight: "bold" }}>
              Employee ID
            </TableCell>

            <TableCell sx={{ color: "white", fontWeight: "bold" }}>
              Employee Name
            </TableCell>

            <TableCell sx={{ color: "white", fontWeight: "bold" }}>
              Department
            </TableCell>

            <TableCell sx={{ color: "white", fontWeight: "bold" }}>
              Leave Type
            </TableCell>

            <TableCell sx={{ color: "white", fontWeight: "bold" }}>
              From
            </TableCell>

            <TableCell sx={{ color: "white", fontWeight: "bold" }}>
              To
            </TableCell>

            <TableCell sx={{ color: "white", fontWeight: "bold" }}>
              Status
            </TableCell>

            <TableCell
              align="center"
              sx={{ color: "white", fontWeight: "bold" }}
            >
              Actions
            </TableCell>

          </TableRow>

        </TableHead>

        <TableBody>

          {leaves.length === 0 ? (

            <TableRow>
              <TableCell colSpan={9} align="center">
                No Leave Records Found
              </TableCell>
            </TableRow>

          ) : (

            leaves.map((leave) => (

              <TableRow key={leave.id} hover>

                <TableCell>{leave.leaveId}</TableCell>

                <TableCell>{leave.employeeId}</TableCell>

                <TableCell>{leave.employeeName}</TableCell>

                <TableCell>{leave.department}</TableCell>

                <TableCell>{leave.leaveType}</TableCell>

                <TableCell>{leave.fromDate}</TableCell>

                <TableCell>{leave.toDate}</TableCell>

                <TableCell>

                  <Chip
                    label={leave.status}
                    color={
                      leave.status === "Approved"
                        ? "success"
                        : leave.status === "Rejected"
                        ? "error"
                        : "warning"
                    }
                  />

                </TableCell>

                <TableCell align="center">

                  <IconButton
                    color="primary"
                    onClick={() => onEdit(leave)}
                  >
                    <EditIcon />
                  </IconButton>

                  <IconButton
                    color="error"
                    onClick={() => onDelete(leave.id)}
                  >
                    <DeleteIcon />
                  </IconButton>

                </TableCell>

              </TableRow>

            ))

          )}

        </TableBody>

      </Table>
    </TableContainer>
  );
}

export default LeaveTable;