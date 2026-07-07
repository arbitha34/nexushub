import { useEffect, useState } from "react";
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
  Snackbar,
  Alert,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import ProjectTable from "../components/ProjectTable";

import {
  getAllProjects,
  addProject,
  updateProject,
  deleteProject,
} from "../services/projectService";

function Projects() {

  const [projects, setProjects] = useState([]);

  const [open, setOpen] = useState(false);

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const [project, setProject] = useState({
    id: "",
    projectId: "",
    projectName: "",
    clientName: "",
    manager: "",
    startDate: "",
    endDate: "",
    budget: "",
    status: "Ongoing",
  });

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {

    try {

      const data = await getAllProjects();

      setProjects(Array.isArray(data) ? data : []);

    } catch (error) {

      console.error(error);

      setProjects([]);

      setSnackbar({
        open: true,
        message: "Failed to load projects",
        severity: "error",
      });

    }

  };
    const handleOpen = () => {

      setProject({
        id: "",
        projectId: "",
        projectName: "",
        clientName: "",
        manager: "",
        startDate: "",
        endDate: "",
        budget: "",
        status: "Ongoing",
      });

      setOpen(true);
    };

    const handleClose = () => {

      setOpen(false);

      setProject({
        id: "",
        projectId: "",
        projectName: "",
        clientName: "",
        manager: "",
        startDate: "",
        endDate: "",
        budget: "",
        status: "Ongoing",
      });

    };

    const handleChange = (e) => {

      setProject({
        ...project,
        [e.target.name]: e.target.value,
      });

    };

    const handleSave = async () => {

      try {

        const requestBody = {
          projectId: project.projectId.trim(),
          projectName: project.projectName.trim(),
          clientName: project.clientName.trim(),
          manager: project.manager.trim(),
          startDate: project.startDate,
          endDate: project.endDate,
          budget: Number(project.budget),
          status: project.status.trim(),
        };

        if (project.id) {

          await updateProject(project.id, requestBody);

          setSnackbar({
            open: true,
            message: "Project Updated Successfully",
            severity: "success",
          });

        } else {

          await addProject(requestBody);

          setSnackbar({
            open: true,
            message: "Project Added Successfully",
            severity: "success",
          });

        }

        handleClose();

        loadProjects();

      } catch (error) {

        console.error(error);

        console.log(error.response);
        console.log(error.response?.data);

        setSnackbar({
          open: true,
          message: "Operation Failed",
          severity: "error",
        });

      }

    };

    const handleEdit = (proj) => {

      setProject(proj);

      setOpen(true);

    };

    const handleDelete = async (id) => {

      if (!window.confirm("Delete this project?")) return;

      try {

        await deleteProject(id);

        loadProjects();

        setSnackbar({
          open: true,
          message: "Project Deleted Successfully",
          severity: "success",
        });

      } catch (error) {

        console.error(error);

        setSnackbar({
          open: true,
          message: "Delete Failed",
          severity: "error",
        });

      }

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
            <Typography variant="h4" fontWeight="bold">
              Projects
            </Typography>

            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={handleOpen}
            >
              Add Project
            </Button>
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
            maxWidth="md"
          >
            <DialogTitle>
              {project.id ? "Update Project" : "Add Project"}
            </DialogTitle>

            <DialogContent>
              <Grid container spacing={2} sx={{ mt: 1 }}>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Project ID"
                    name="projectId"
                    value={project.projectId}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Project Name"
                    name="projectName"
                    value={project.projectName}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Client Name"
                    name="clientName"
                    value={project.clientName}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Manager"
                    name="manager"
                    value={project.manager}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    type="date"
                    label="Start Date"
                    name="startDate"
                    InputLabelProps={{ shrink: true }}
                    value={project.startDate}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    type="date"
                    label="End Date"
                    name="endDate"
                    InputLabelProps={{ shrink: true }}
                    value={project.endDate}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    type="number"
                    label="Budget"
                    name="budget"
                    value={project.budget}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Status"
                    name="status"
                    value={project.status}
                    onChange={handleChange}
                  />
                </Grid>

              </Grid>
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
                    <Snackbar
                      open={snackbar.open}
                      autoHideDuration={3000}
                      onClose={() =>
                        setSnackbar({
                          ...snackbar,
                          open: false,
                        })
                      }
                    >
                      <Alert
                        severity={snackbar.severity}
                        variant="filled"
                      >
                        {snackbar.message}
                      </Alert>
                    </Snackbar>

                  </Box>
                </Box>
              </Box>
            );
          }

          export default Projects;