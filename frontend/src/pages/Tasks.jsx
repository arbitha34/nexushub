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
import TaskTable from "../components/TaskTable";

import {
  getAllTasks,
  addTask,
  updateTask,
  deleteTask,
} from "../services/taskService";

function Tasks() {

  const [tasks, setTasks] = useState([]);

  const [open, setOpen] = useState(false);

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const [task, setTask] = useState({
    id: "",
    taskId: "",
    title: "",
    description: "",
    assignedEmployee: "",
    projectName: "",
    priority: "Medium",
    dueDate: "",
    status: "Pending",
  });

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {

    try {

      const data = await getAllTasks();

      setTasks(Array.isArray(data) ? data : []);

    } catch (error) {

      console.error(error);

      setTasks([]);

      setSnackbar({
        open: true,
        message: "Failed to load tasks",
        severity: "error",
      });

    }

  };
  const handleOpen = () => {

      setTask({
        id: "",
        taskId: "",
        title: "",
        description: "",
        assignedEmployee: "",
        projectName: "",
        priority: "Medium",
        dueDate: "",
        status: "Pending",
      });

      setOpen(true);
    };

    const handleClose = () => {

      setOpen(false);

      setTask({
        id: "",
        taskId: "",
        title: "",
        description: "",
        assignedEmployee: "",
        projectName: "",
        priority: "Medium",
        dueDate: "",
        status: "Pending",
      });

    };

    const handleChange = (e) => {

      setTask({
        ...task,
        [e.target.name]: e.target.value,
      });

    };

    const handleSave = async () => {

      try {

        const requestBody = {
          taskId: task.taskId.trim(),
          title: task.title.trim(),
          description: task.description.trim(),
          assignedEmployee: task.assignedEmployee.trim(),
          projectName: task.projectName.trim(),
          priority: task.priority.trim(),
          dueDate: task.dueDate,
          status: task.status.trim(),
        };

        if (task.id) {

          await updateTask(task.id, requestBody);

          setSnackbar({
            open: true,
            message: "Task Updated Successfully",
            severity: "success",
          });

        } else {

          await addTask(requestBody);

          setSnackbar({
            open: true,
            message: "Task Added Successfully",
            severity: "success",
          });

        }

        handleClose();

        loadTasks();

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

    const handleEdit = (selectedTask) => {

      setTask(selectedTask);

      setOpen(true);

    };

    const handleDelete = async (id) => {

      if (!window.confirm("Delete this task?")) return;

      try {

        await deleteTask(id);

        loadTasks();

        setSnackbar({
          open: true,
          message: "Task Deleted Successfully",
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
              Tasks
            </Typography>

            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={handleOpen}
            >
              Add Task
            </Button>
          </Grid>

          <Paper sx={{ p: 2 }}>
            <TaskTable
              tasks={tasks}
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
              {task.id ? "Update Task" : "Add Task"}
            </DialogTitle>

            <DialogContent>
              <Grid container spacing={2} sx={{ mt: 1 }}>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Task ID"
                    name="taskId"
                    value={task.taskId}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Task Title"
                    name="title"
                    value={task.title}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    multiline
                    rows={3}
                    label="Description"
                    name="description"
                    value={task.description}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Assigned Employee"
                    name="assignedEmployee"
                    value={task.assignedEmployee}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Project Name"
                    name="projectName"
                    value={task.projectName}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Priority"
                    name="priority"
                    value={task.priority}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    type="date"
                    label="Due Date"
                    name="dueDate"
                    InputLabelProps={{ shrink: true }}
                    value={task.dueDate}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Status"
                    name="status"
                    value={task.status}
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

          export default Tasks;