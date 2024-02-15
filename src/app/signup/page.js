'use client';
import React from "react";
import { Button, Typography,Avatar,TextField,Grid,FormControlLabel,Checkbox,Link,Container,ThemeProvider} from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { pink,red,white,black } from '@mui/material/colors';
import {createTheme} from "@mui/material";
import styles from "./signup.module.css";

// const useStyles = makeStyles(theme => ({
//   "@global": {
//     body: {
//       backgroundColor: theme.palette.common.white
//     }
//   },
//   paper: {
//     marginTop: theme.spacing(8),
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center"
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main
//   },
//   form: {
//     width: "100%", // Fix IE 11 issue.
//     marginTop: theme.spacing(3)
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2)
//   }
// }));
const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
    },
    secondary: {
      main: red[500],
    },
  },

});

function SignUpPage(){

    return <div className={styles.signup}>
        <Container>
        <center>
        <Avatar style={{backgroundColor:'red'}}>
          <LockOutlined />
        </Avatar>
        </center>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography >
        <form className={styles.info_form}>
        <Grid container spacing={2} >
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12} style={{paddingBottom:'5%'}}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
        </Grid>
        <ThemeProvider theme={theme}>
        <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx = {{border:'2px black solid', borderRadius:'24px'}}
            // style={{color:'white', backgroundColor:'black'}}
          >
            Sign Up
        </Button>
        </ThemeProvider>
        <Grid container justify="flex-end" style={{paddingTop:'16px',paddingLeft:'54%'}}>
        <Grid item > 
            <Link href="/" variant="body2" display='flex'>
            Already have an account? Sign in
            </Link>
        </Grid>

        </Grid>

        </form>


        </Container>
    </div>;
}
export default SignUpPage;