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

function ProjectTable({
  projects = [],
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
              Project Name
            </TableCell>

            <TableCell sx={{ color: "white" }}>
              Manager
            </TableCell>

            <TableCell sx={{ color: "white" }}>
              Team Size
            </TableCell>

            <TableCell sx={{ color: "white" }}>
              Deadline
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

          {projects.map((project) => (
            <TableRow key={project.id} hover>

              <TableCell>{project.id}</TableCell>

              <TableCell>{project.name}</TableCell>

              <TableCell>{project.manager}</TableCell>

              <TableCell>{project.teamSize}</TableCell>

              <TableCell>{project.deadline}</TableCell>

              <TableCell>
                <Chip
                  label={project.status}
                  color={
                    project.status === "Completed"
                      ? "success"
                      : project.status === "In Progress"
                      ? "warning"
                      : "default"
                  }
                />
              </TableCell>

              <TableCell>

                <IconButton
                  color="primary"
                  onClick={() => onEdit(project)}
                >
                  <EditIcon />
                </IconButton>

                <IconButton
                  color="error"
                  onClick={() => onDelete(project.id)}
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

export default ProjectTable;