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

function TaskTable({ tasks = [], onEdit, onDelete }) {
  return (
    <TableContainer component={Paper} elevation={3}>
      <Table>

        <TableHead>
          <TableRow sx={{ backgroundColor: "#1976d2" }}>

            <TableCell sx={{ color: "white", fontWeight: "bold" }}>
              Task ID
            </TableCell>

            <TableCell sx={{ color: "white", fontWeight: "bold" }}>
              Title
            </TableCell>

            <TableCell sx={{ color: "white", fontWeight: "bold" }}>
              Description
            </TableCell>

            <TableCell sx={{ color: "white", fontWeight: "bold" }}>
              Assigned Employee
            </TableCell>

            <TableCell sx={{ color: "white", fontWeight: "bold" }}>
              Project
            </TableCell>

            <TableCell sx={{ color: "white", fontWeight: "bold" }}>
              Due Date
            </TableCell>

            <TableCell sx={{ color: "white", fontWeight: "bold" }}>
              Priority
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

          {tasks.length === 0 ? (
            <TableRow>
              <TableCell colSpan={9} align="center">
                No Tasks Found
              </TableCell>
            </TableRow>
          ) : (
            tasks.map((task) => (
              <TableRow key={task.id} hover>

                <TableCell>{task.taskId}</TableCell>

                <TableCell>{task.title}</TableCell>

                <TableCell>{task.description}</TableCell>

                <TableCell>{task.assignedEmployee}</TableCell>

                <TableCell>{task.projectName}</TableCell>

                <TableCell>{task.dueDate}</TableCell>

                <TableCell>
                  <Chip
                    label={task.priority}
                    color={
                      task.priority === "High"
                        ? "error"
                        : task.priority === "Medium"
                        ? "warning"
                        : "success"
                    }
                  />
                </TableCell>

                <TableCell>
                  <Chip
                    label={task.status}
                    color={
                      task.status === "Completed"
                        ? "success"
                        : task.status === "In Progress"
                        ? "warning"
                        : "default"
                    }
                  />
                </TableCell>

                <TableCell align="center">

                  <IconButton
                    color="primary"
                    onClick={() => onEdit(task)}
                  >
                    <EditIcon />
                  </IconButton>

                  <IconButton
                    color="error"
                    onClick={() => onDelete(task.id)}
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

export default TaskTable;