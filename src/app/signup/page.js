'use client';
import React, { useState } from 'react';
import {
  Button,
  Typography,
  Avatar,
  TextField,
  Grid,
  Container,
} from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import styles from './signup.module.css';
import Link from 'next/link';
import { hashPassword } from '@/utils';
import { signIn } from 'next-auth/react';

function SignUpPage() {
  const [submitting, setSubmitting] = useState(false);

  const [userInfo, setUserInfo] = useState({
    firstName: undefined,
    lastName: undefined,
    email: undefined,
    password: undefined,
  });

  const handleChange = (event) => {
    setUserInfo((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);

    // Call api to register the user into our database
    try {
      const res = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({
          ...userInfo,
          password: await hashPassword(userInfo.password),
        }),
      });

      if (!res.ok) {
        alert('User already exist');
      } else {
        // User signing up successfully
        await signIn('credentials', {
          email: userInfo.email,
          password: userInfo.password,
          callbackUrl: '/',
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.signup}>
      <Container>
        <center>
          <Avatar style={{ backgroundColor: 'red' }}>
            <LockOutlined />
          </Avatar>
        </center>
        <Typography component='h1' variant='h5'>
          Sign up
        </Typography>
        <form
          className={styles.info_form}
          onChange={handleChange}
          onSubmit={handleFormSubmit}
          method='post'
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete='fname'
                name='firstName'
                variant='outlined'
                required
                fullWidth
                id='firstName'
                label='First Name'
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant='outlined'
                required
                fullWidth
                id='lastName'
                label='Last Name'
                name='lastName'
                autoComplete='lname'
              />
            </Grid>
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
            <Grid item xs={12} sx={{ marginBottom: '5%' }}>
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
            {/* <Grid item xs={12} style={{ paddingBottom: '5%' }}>
              <FormControlLabel
                control={<Checkbox value='allowExtraEmails' color='primary' />}
                label='I want to receive inspiration, marketing promotions and updates via email.'
              />
            </Grid> */}
          </Grid>
          <Button
            type='submit'
            disabled={submitting}
            fullWidth
            variant='contained'
            color='primary'
            sx={{ border: '2px black solid', borderRadius: '24px' }}
            // style={{color:'white', backgroundColor:'black'}}
          >
            {submitting ? 'Signing up...' : 'Sign Up'}
          </Button>

          <Typography
            variant='body2'
            sx={{
              marginTop: '5%',
            }}
          >
            Already have an account?{' '}
            <Link href='/signin' style={{ display: 'inline-flex' }}>
              Sign in
            </Link>
          </Typography>
        </form>
      </Container>
    </div>
  );
}
export default SignUpPage;
