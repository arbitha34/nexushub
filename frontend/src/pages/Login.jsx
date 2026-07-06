import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Avatar,
  Alert,
} from "@mui/material";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

function Login() {
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Temporary Login
    if (
      login.username === "admin" &&
      login.password === "admin123"
    ) {
      navigate("/dashboard");
    } else {
      setError("Invalid Username or Password");
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(135deg,#1976d2,#42a5f5)",
      }}
    >
      <Paper
        elevation={10}
        sx={{
          width: 420,
          p: 5,
          borderRadius: 4,
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Avatar
            sx={{
              bgcolor: "primary.main",
              width: 70,
              height: 70,
              mb: 2,
            }}
          >
            <LockOutlinedIcon fontSize="large" />
          </Avatar>

          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
          >
            NexusHub
          </Typography>

          <Typography
            color="text.secondary"
            mb={3}
          >
            Employee & Project Management System
          </Typography>
        </Box>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <form onSubmit={handleLogin}>
          <TextField
            fullWidth
            margin="normal"
            label="Username"
            name="username"
            value={login.username}
            onChange={handleChange}
          />

          <TextField
            fullWidth
            margin="normal"
            type="password"
            label="Password"
            name="password"
            value={login.password}
            onChange={handleChange}
          />

          <Button
            fullWidth
            type="submit"
            variant="contained"
            size="large"
            sx={{
              mt: 3,
              py: 1.5,
            }}
          >
            Login
          </Button>
        </form>

        <Typography
          align="center"
          color="text.secondary"
          sx={{ mt: 3 }}
        >
          Demo Credentials
        </Typography>

        <Typography
          align="center"
          fontWeight="bold"
        >
          Username : admin
        </Typography>

        <Typography
          align="center"
          fontWeight="bold"
        >
          Password : admin123
        </Typography>
      </Paper>
    </Box>
  );
}

export default Login;