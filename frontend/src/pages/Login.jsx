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

import { login as loginService } from "../services/authService";

function Login() {

  const navigate = useNavigate();

  const [login, setLogin] = useState({
    email: "",
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

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const response = await loginService(login);

      localStorage.setItem("token", response.token);

      localStorage.setItem("user", JSON.stringify(response));

      navigate("/dashboard");

    } catch (err) {

      setError("Invalid Email or Password");

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

          <Alert
            severity="error"
            sx={{ mb: 2 }}
          >
            {error}
          </Alert>

        )}

        <form onSubmit={handleLogin}>

          <TextField
            fullWidth
            margin="normal"
            label="Email"
            name="email"
            value={login.email}
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

      </Paper>

    </Box>

  );

}

export default Login;