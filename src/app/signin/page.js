"use client";
import React from "react";
import {
  Button,
  Typography,
  Avatar,
  TextField,
  Grid,
  FormControlLabel,
  Checkbox,
  Link,
  Container,
  ThemeProvider,
  Paper,
  CssBaseline,
  Box,
} from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { pink, red, white, black } from "@mui/material/colors";
import { createTheme } from "@mui/material";
import styles from "./signin.module.css";

function SignInPage() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#FFFFFF",
      },
      secondary: {
        main: red[500],
      },
    },
  });

  return (
    <div className={styles.signin}>
      <Container>
        <center>
          <Avatar style={{ backgroundColor: "red" }}>
            <LockOutlined />
          </Avatar>
        </center>
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        <form className={styles.info_form}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
              />
            </Grid>
            <Grid item xs={12} style={{ paddingBottom: "5%" }}>
              <FormControlLabel
                control={<Checkbox color='primary' />}
                label='Remember me'
              />
            </Grid>
          </Grid>
          <ThemeProvider theme={theme}>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              sx={{ border: "2px black solid", borderRadius: "24px" }}
            >
              Sign Up
            </Button>
          </ThemeProvider>
          <Grid
            container
            justify='flex-end'
            style={{ paddingTop: "16px" }}
            spacing={2}
          >
            <Grid item xs={12}>
              <Link href='/' variant='body2'>
                Forgot password?
              </Link>
            </Grid>
            <Grid item xs={12}>
              <Link href='/' variant='body2' display='flex-end'>
                Don't have an account? Sign up here
              </Link>
            </Grid>
          </Grid>
        </form>
      </Container>
    </div>
  );
}
export default SignInPage;
