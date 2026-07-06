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

function EmployeeTable({ employees, onEdit, onDelete }) {
  return (
    <TableContainer component={Paper} elevation={3}>
      <Table>

        <TableHead>
          <TableRow sx={{ backgroundColor: "#1976d2" }}>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>
              Employee ID
            </TableCell>

            <TableCell sx={{ color: "white", fontWeight: "bold" }}>
              Name
            </TableCell>

            <TableCell sx={{ color: "white", fontWeight: "bold" }}>
              Email
            </TableCell>

            <TableCell sx={{ color: "white", fontWeight: "bold" }}>
              Phone
            </TableCell>

            <TableCell sx={{ color: "white", fontWeight: "bold" }}>
              Department
            </TableCell>

            <TableCell sx={{ color: "white", fontWeight: "bold" }}>
              Designation
            </TableCell>

            <TableCell sx={{ color: "white", fontWeight: "bold" }}>
              Salary
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

          {employees.length === 0 ? (
            <TableRow>
              <TableCell colSpan={9} align="center">
                No Employees Found
              </TableCell>
            </TableRow>
          ) : (
            employees.map((employee) => (
              <TableRow key={employee.id} hover>

                <TableCell>{employee.employeeId}</TableCell>

                <TableCell>{employee.name}</TableCell>

                <TableCell>{employee.email}</TableCell>

                <TableCell>{employee.phone}</TableCell>

                <TableCell>{employee.department}</TableCell>

                <TableCell>{employee.designation}</TableCell>

                <TableCell>
                  ₹ {employee.salary}
                </TableCell>

                <TableCell>
                  <Chip
                    label={employee.status}
                    color={
                      employee.status === "Active"
                        ? "success"
                        : "error"
                    }
                  />
                </TableCell>

                <TableCell align="center">

                  <IconButton
                    color="primary"
                    onClick={() => onEdit(employee)}
                  >
                    <EditIcon />
                  </IconButton>

                  <IconButton
                    color="error"
                    onClick={() => onDelete(employee.id)}
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

export default EmployeeTable;