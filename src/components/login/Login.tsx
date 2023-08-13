import React, { useState, useEffect } from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { signInWithEmailAndPassword, onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../../domain/FireBaseConfig.tsx";

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>();

  useEffect(() => {
    onAuthStateChanged(auth, (newUser) => {
      if (newUser) {
        setUser(newUser);
      } else {
        setUser(null);
      }
    });
  }, []);

  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  const login = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      email !== null
      && email !== undefined
      && email !== ""
      && password !== null
      && password !== undefined
      && password !== ""
    ) {
      try {
        setEmailError("");
        setPasswordError("");
        signInWithEmailAndPassword(auth, email, password);
        navigate("/");
      } catch (error) {
        // console.error(error);
      }
    } else if (email === null || email === undefined || email === "") {
      setEmailError("Please enter a valid email address.");
    } else if (password === null || password === undefined || password === "") {
      setEmailError("");
      setPasswordError("Please enter a valid password.");
    }
  };

  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={login} noValidate sx={{ mt: 1 }}>
          <TextField
            id="email"
            name="email"
            label="Email Address"
            type="email"
            autoComplete="email"
            margin="normal"
            required
            fullWidth
            autoFocus
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
            error={!(emailError === null || emailError === "")}
            helperText={emailError}
            data-cy="login-Email-field"
          />
          <TextField
            id="password"
            name="password"
            margin="normal"
            label="Password"
            type="password"
            autoComplete="current-password"
            required
            fullWidth
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
            error={!(passwordError === null || passwordError === "")}
            helperText={passwordError}
            data-cy="login-Password-field"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            id="login_login"
            data-cy="login-Login-button"
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="google.com" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link
                component={RouterLink}
                to="/Register"
                variant="body2"
                id="login_register_prompt"
              >
                Don&#39;t have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </Box>
        <h3>{user?.email}</h3>
      </Box>
    </>
  );
}

export default Login;
