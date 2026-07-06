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

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function TaskTable({
  tasks = [],
  onEdit,
  onDelete,
}) {
  return (
    <TableContainer component={Paper} elevation={3}>
      <Table>

        <TableHead>
          <TableRow sx={{ backgroundColor: "#1976d2" }}>

            <TableCell sx={{ color: "white" }}>ID</TableCell>

            <TableCell sx={{ color: "white" }}>
              Task
            </TableCell>

            <TableCell sx={{ color: "white" }}>
              Assigned To
            </TableCell>

            <TableCell sx={{ color: "white" }}>
              Project
            </TableCell>

            <TableCell sx={{ color: "white" }}>
              Due Date
            </TableCell>

            <TableCell sx={{ color: "white" }}>
              Priority
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

          {tasks.map((task) => (
            <TableRow key={task.id} hover>

              <TableCell>{task.id}</TableCell>

              <TableCell>{task.title}</TableCell>

              <TableCell>{task.employee}</TableCell>

              <TableCell>{task.project}</TableCell>

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

              <TableCell>

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
          ))}

        </TableBody>

      </Table>
    </TableContainer>
  );
}

export default TaskTable;