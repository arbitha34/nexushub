import {
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Chip,
} from "@mui/material";

function AttendanceTable({ attendance = [] }) {
  return (
    <TableContainer component={Paper} elevation={3}>
      <Table>

        <TableHead>
          <TableRow sx={{ backgroundColor: "#1976d2" }}>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>
              Employee ID
            </TableCell>

            <TableCell sx={{ color: "white", fontWeight: "bold" }}>
              Employee Name
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
          </TableRow>
        </TableHead>

        <TableBody>
          {attendance.map((item) => (
            <TableRow key={item.id} hover>

              <TableCell>{item.employeeId}</TableCell>

              <TableCell>{item.employeeName}</TableCell>

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

            </TableRow>
          ))}
        </TableBody>

      </Table>
    </TableContainer>
  );
}

export default AttendanceTable;