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

function AttendanceTable({
  attendance = [],
  onEdit,
  onDelete,
}) {
  return (
    <TableContainer component={Paper} elevation={3}>
      <Table>

        <TableHead>
          <TableRow sx={{ backgroundColor: "#1976d2" }}>

            <TableCell sx={{ color: "white", fontWeight: "bold" }}>
              Attendance ID
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
              Date
            </TableCell>

            <TableCell sx={{ color: "white", fontWeight: "bold" }}>
              Check In
            </TableCell>

            <TableCell sx={{ color: "white", fontWeight: "bold" }}>
              Check Out
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

          {attendance.length === 0 ? (

            <TableRow>
              <TableCell colSpan={9} align="center">
                No Attendance Records Found
              </TableCell>
            </TableRow>

          ) : (

            attendance.map((item) => (

              <TableRow key={item.id} hover>

                <TableCell>{item.attendanceId}</TableCell>

                <TableCell>{item.employeeId}</TableCell>

                <TableCell>{item.employeeName}</TableCell>

                <TableCell>{item.department}</TableCell>

                <TableCell>{item.date}</TableCell>

                <TableCell>{item.checkIn}</TableCell>

                <TableCell>{item.checkOut}</TableCell>

                <TableCell>
                  <Chip
                    label={item.status}
                    color={
                      item.status === "Present"
                        ? "success"
                        : item.status === "Absent"
                        ? "error"
                        : "warning"
                    }
                  />
                </TableCell>

                <TableCell align="center">

                  <IconButton
                    color="primary"
                    onClick={() => onEdit(item)}
                  >
                    <EditIcon />
                  </IconButton>

                  <IconButton
                    color="error"
                    onClick={() => onDelete(item.id)}
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

export default AttendanceTable;