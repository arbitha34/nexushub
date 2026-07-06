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
import TaskTable from "../components/TaskTable";

function Tasks() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Develop Login Module",
      employee: "John Doe",
      project: "NexusHub",
      dueDate: "2026-07-20",
      priority: "High",
      status: "In Progress",
    },
    {
      id: 2,
      title: "Create Employee API",
      employee: "Sarah",
      project: "NexusHub",
      dueDate: "2026-07-25",
      priority: "Medium",
      status: "Pending",
    },
    {
      id: 3,
      title: "UI Testing",
      employee: "Michael",
      project: "ERP System",
      dueDate: "2026-07-28",
      priority: "Low",
      status: "Completed",
    },
  ]);

  const [open, setOpen] = useState(false);

  const [task, setTask] = useState({
    id: "",
    title: "",
    employee: "",
    project: "",
    dueDate: "",
    priority: "Medium",
    status: "Pending",
  });

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);

    setTask({
      id: "",
      title: "",
      employee: "",
      project: "",
      dueDate: "",
      priority: "Medium",
      status: "Pending",
    });
  };

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    if (task.id === "") {
      setTasks([
        ...tasks,
        {
          ...task,
          id: tasks.length + 1,
        },
      ]);
    } else {
      setTasks(
        tasks.map((t) => (t.id === task.id ? task : t))
      );
    }

    handleClose();
  };

  const handleEdit = (selectedTask) => {
    setTask(selectedTask);
    setOpen(true);
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
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
                Tasks
              </Typography>
            </Grid>

            <Grid item>
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                onClick={handleOpen}
              >
                Add Task
              </Button>
            </Grid>
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
            maxWidth="sm"
          >
            <DialogTitle>
              {task.id ? "Edit Task" : "Add Task"}
            </DialogTitle>

            <DialogContent>

              <TextField
                margin="normal"
                fullWidth
                label="Task Title"
                name="title"
                value={task.title}
                onChange={handleChange}
              />

              <TextField
                margin="normal"
                fullWidth
                label="Assigned Employee"
                name="employee"
                value={task.employee}
                onChange={handleChange}
              />

              <TextField
                margin="normal"
                fullWidth
                label="Project"
                name="project"
                value={task.project}
                onChange={handleChange}
              />

              <TextField
                margin="normal"
                fullWidth
                type="date"
                name="dueDate"
                label="Due Date"
                InputLabelProps={{ shrink: true }}
                value={task.dueDate}
                onChange={handleChange}
              />

              <TextField
                margin="normal"
                fullWidth
                label="Priority"
                name="priority"
                value={task.priority}
                onChange={handleChange}
              />

              <TextField
                margin="normal"
                fullWidth
                label="Status"
                name="status"
                value={task.status}
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

export default Tasks;