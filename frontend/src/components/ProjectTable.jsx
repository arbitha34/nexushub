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

function ProjectTable({ projects = [], onEdit, onDelete }) {
  return (
    <TableContainer component={Paper} elevation={3}>
      <Table>

        <TableHead>
          <TableRow sx={{ backgroundColor: "#1976d2" }}>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>
              Project ID
            </TableCell>

            <TableCell sx={{ color: "white", fontWeight: "bold" }}>
              Project Name
            </TableCell>

            <TableCell sx={{ color: "white", fontWeight: "bold" }}>
              Client
            </TableCell>

            <TableCell sx={{ color: "white", fontWeight: "bold" }}>
              Manager
            </TableCell>

            <TableCell sx={{ color: "white", fontWeight: "bold" }}>
              Start Date
            </TableCell>

            <TableCell sx={{ color: "white", fontWeight: "bold" }}>
              End Date
            </TableCell>

            <TableCell sx={{ color: "white", fontWeight: "bold" }}>
              Budget
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

          {projects.length === 0 ? (
            <TableRow>
              <TableCell colSpan={9} align="center">
                No Projects Found
              </TableCell>
            </TableRow>
          ) : (
            projects.map((project) => (
              <TableRow key={project.id} hover>

                <TableCell>{project.projectId}</TableCell>

                <TableCell>{project.projectName}</TableCell>

                <TableCell>{project.clientName}</TableCell>

                <TableCell>{project.manager}</TableCell>

                <TableCell>{project.startDate}</TableCell>

                <TableCell>{project.endDate}</TableCell>

                <TableCell>
                  ₹ {project.budget}
                </TableCell>

                <TableCell>
                  <Chip
                    label={project.status}
                    color={
                      project.status === "Completed"
                        ? "success"
                        : project.status === "Ongoing"
                        ? "warning"
                        : "default"
                    }
                  />
                </TableCell>

                <TableCell align="center">

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
            ))
          )}

        </TableBody>

      </Table>
    </TableContainer>
  );
}

export default ProjectTable;