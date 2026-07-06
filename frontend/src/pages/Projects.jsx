import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Paper,
  Grid,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import ProjectTable from "../components/ProjectTable";

function Projects() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "NexusHub",
      manager: "John Doe",
      teamSize: 8,
      deadline: "2026-08-30",
      status: "In Progress",
    },
    {
      id: 2,
      name: "HR Portal",
      manager: "Sarah",
      teamSize: 5,
      deadline: "2026-07-15",
      status: "Planning",
    },
    {
      id: 3,
      name: "ERP System",
      manager: "Michael",
      teamSize: 12,
      deadline: "2026-10-20",
      status: "Completed",
    },
  ]);

  const [open, setOpen] = useState(false);

  const [project, setProject] = useState({
    id: "",
    name: "",
    manager: "",
    teamSize: "",
    deadline: "",
    status: "Planning",
  });

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);

    setProject({
      id: "",
      name: "",
      manager: "",
      teamSize: "",
      deadline: "",
      status: "Planning",
    });
  };

  const handleChange = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    if (project.id === "") {
      setProjects([
        ...projects,
        {
          ...project,
          id: projects.length + 1,
        },
      ]);
    } else {
      setProjects(
        projects.map((p) =>
          p.id === project.id ? project : p
        )
      );
    }

    handleClose();
  };

  const handleEdit = (project) => {
    setProject(project);
    setOpen(true);
  };

  const handleDelete = (id) => {
    setProjects(
      projects.filter((project) => project.id !== id)
    );
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />

      <Box sx={{ flexGrow: 1 }}>
        <Topbar />

        <Box
          sx={{
            mt: 8,
            p: 4,
            backgroundColor: "#f5f5f5",
            minHeight: "100vh",
          }}
        >
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            mb={3}
          >
            <Grid item>
              <Typography variant="h4" fontWeight="bold">
                Projects
              </Typography>
            </Grid>

            <Grid item>
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                onClick={handleOpen}
              >
                Add Project
              </Button>
            </Grid>
          </Grid>

          <Paper sx={{ p: 2 }}>
            <ProjectTable
              projects={projects}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </Paper>

          <Dialog
            open={open}
            onClose={handleClose}
            fullWidth
            maxWidth="sm"
          >
            <DialogTitle>
              {project.id ? "Edit Project" : "Add Project"}
            </DialogTitle>

            <DialogContent>

              <TextField
                margin="normal"
                fullWidth
                label="Project Name"
                name="name"
                value={project.name}
                onChange={handleChange}
              />

              <TextField
                margin="normal"
                fullWidth
                label="Project Manager"
                name="manager"
                value={project.manager}
                onChange={handleChange}
              />

              <TextField
                margin="normal"
                fullWidth
                label="Team Size"
                name="teamSize"
                type="number"
                value={project.teamSize}
                onChange={handleChange}
              />

              <TextField
                margin="normal"
                fullWidth
                label="Deadline"
                name="deadline"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                value={project.deadline}
                onChange={handleChange}
              />

              <TextField
                margin="normal"
                fullWidth
                label="Status"
                name="status"
                value={project.status}
                onChange={handleChange}
              />

            </DialogContent>

            <DialogActions>

              <Button
                color="error"
                onClick={handleClose}
              >
                Cancel
              </Button>

              <Button
                variant="contained"
                onClick={handleSave}
              >
                Save
              </Button>

            </DialogActions>
          </Dialog>

        </Box>
      </Box>
    </Box>
  );
}

export default Projects;