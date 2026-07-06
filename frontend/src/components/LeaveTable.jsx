import {
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Chip,
  IconButton,
} from "@mui/material";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

function LeaveTable({
  leaves = [],
  onApprove,
  onReject,
}) {
  return (
    <TableContainer component={Paper} elevation={3}>
      <Table>

        <TableHead>
          <TableRow sx={{ backgroundColor: "#1976d2" }}>
            <TableCell sx={{ color: "white" }}>ID</TableCell>

            <TableCell sx={{ color: "white" }}>
              Employee
            </TableCell>

            <TableCell sx={{ color: "white" }}>
              Leave Type
            </TableCell>

            <TableCell sx={{ color: "white" }}>
              From
            </TableCell>

            <TableCell sx={{ color: "white" }}>
              To
            </TableCell>

            <TableCell sx={{ color: "white" }}>
              Status
            </TableCell>

            <TableCell sx={{ color: "white" }}>
              Actions
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>

          {leaves.map((leave) => (
            <TableRow key={leave.id} hover>

              <TableCell>{leave.id}</TableCell>

              <TableCell>{leave.employee}</TableCell>

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

              <TableCell>

                <IconButton
                  color="success"
                  onClick={() => onApprove(leave)}
                >
                  <CheckCircleIcon />
                </IconButton>

                <IconButton
                  color="error"
                  onClick={() => onReject(leave)}
                >
                  <CancelIcon />
                </IconButton>

              </TableCell>

            </TableRow>
          ))}

        </TableBody>

      </Table>
    </TableContainer>
  );
}

export default LeaveTable;