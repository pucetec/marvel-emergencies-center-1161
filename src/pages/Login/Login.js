import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Grid,
  Link,
} from "@mui/material";
import { useAuth } from "../../contexts/AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { signInWithEmailAndPasswordHandler, currentUser, signInWithGoogle } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const paperStyle = {
    padding: 20,
    height: "50vh",
    width: 300,
    margin: "20px auto",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const submitStyle = {
    margin: "20px 0 10px",
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    signInWithEmailAndPasswordHandler(email, password);
  };

  const googleLoginStart = async() =>{
    try {
      await signInWithGoogle();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (currentUser!=null) {
      navigate("/emergencies");
    }
  }, [currentUser, navigate]);

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} style={paperStyle}>
        <Typography variant="h5">Login</Typography>
        <form style={formStyle} onSubmit={handleLogin}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={submitStyle}
            href="/emergencies"
          >
            Sign In
          </Button>
        </form>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
        </Grid>
        <Button variant="contained" onClick={googleLoginStart}>
          Log in with Google
        </Button>
      </Paper>
    </Container>
  );
};

export default Login;
