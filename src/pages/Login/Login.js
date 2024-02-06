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
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const Login = () => {
  const { signInWithEmailAndPasswordHandler, currentUser, signInWithGoogle, createUserWithEmailAndPasswordHandler} = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignIn, setIsSignIn] = useState(true);

  const handleChipClick = (isSignIn) => {
    setIsSignIn(isSignIn);
  };
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
    if (isSignIn) {
      try {
        await signInWithEmailAndPasswordHandler(email, password);
      } catch (error) {
        alert(error);
      }
    }

    if (!isSignIn) {
      try {
        await createUserWithEmailAndPasswordHandler(email, password);
      } catch (error) {
        alert(error);
      }
    }
    
  };

  const googleLoginStart = async() =>{
    try {
      await signInWithGoogle();
    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    if (currentUser!=null) {
      navigate("/emergencies");
    }
  }, [currentUser, navigate]);

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} style={{ padding: 20, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h5">{isSignIn ? 'Sign In' : 'Sign Up'}</Typography>
        <form style={{ width: '100%', marginTop: 1 }} onSubmit={handleLogin}>
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
            style={{ marginTop: 20 }}
          >
            {isSignIn ? 'Sign In' : 'Sign Up'}
          </Button>
        </form>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
        </Grid>
        <Stack direction="row" spacing={1} style={{ marginTop: 20 }}>
          <Chip
            label="Sign In"
            onClick={() => handleChipClick(true)}
            color={isSignIn ? 'primary' : 'default'}
          />
          <Chip
            label="Sign Up"
            onClick={() => handleChipClick(false)}
            color={isSignIn ? 'default' : 'primary'}
          />
        </Stack>
        <Button variant="contained" onClick={googleLoginStart} style={{ marginTop: 10 }}>
          Log in with Google
        </Button>
      </Paper>
    </Container>
  );
};

export default Login;
