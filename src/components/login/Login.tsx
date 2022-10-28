import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { auth } from "../../domain/Database";
import { signInWithEmailAndPassword, onAuthStateChanged, User } from "firebase/auth";

const Login = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState<User | null>();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
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
    if (email !== null && email !== undefined && email !== "" && password !== null && password !== undefined && password !== "") {
      try {
        setEmailError("");
        setPasswordError("");
        signInWithEmailAndPassword(auth, email, password);
        navigate("/");
      } catch (error) {
        console.error(error);
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
            type={"email"}
            autoComplete="email"
            margin="normal"
            required
            fullWidth
            autoFocus
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
            error={emailError === null || emailError === "" ? false : true}
            helperText={emailError}
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
            error={passwordError === null || passwordError === "" ? false : true}
            helperText={passwordError}
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/Register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
        <h3>{user?.email}</h3>
      </Box>
    </>
  );
};

export default Login;
