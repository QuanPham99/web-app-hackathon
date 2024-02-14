import React from "react";
import Image from "next/image";
import GoogleIcon from '@mui/icons-material/Google';
import { Button, Typography,Avatar,TextField,Grid,FormControlLabel,Checkbox,Link,Container } from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { pink,red } from '@mui/material/colors'
import styles from "./signup.module.css";
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
        <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Sign Up
        </Button>
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