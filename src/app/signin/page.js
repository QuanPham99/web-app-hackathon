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
import styles from './signin.module.css';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { hashPassword } from '@/utils';

function SignInPage() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleEmailChange = (event) => {
    setCredentials((prev) => ({
      ...prev,
      email: event.target.value,
    }));
  };

  const handlePasswordChange = (event) => {
    setCredentials((prev) => ({
      ...prev,
      password: event.target.value,
    }));
  };

  const handeSubmitForm = async (event) => {
    event.preventDefault();

    const res = await signIn('credentials', {
      email: credentials.email,
      password: credentials.password,
      callbackUrl: '/',
      redirect: false,
    });

    if (!res.ok) {
      alert('User does not exist or password is incorrect.');
    }
  };

  return (
    <div className={styles.signin}>
      <Container>
        <center>
          <Avatar style={{ backgroundColor: 'black' }}>
            <LockOutlined />
          </Avatar>
        </center>
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        <form
          className={styles.info_form}
          onSubmit={handeSubmitForm}
          method='POST'
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                id='email'
                label='Email'
                name='email'
                value={credentials.email}
                onChange={handleEmailChange}
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
                value={credentials.password}
                onChange={handlePasswordChange}
                autoComplete='current-password'
              />
            </Grid>
            {/* <Grid item xs={12} style={{ paddingBottom: '5%' }}>
              <FormControlLabel
                control={<Checkbox color='primary' />}
                label='Remember me'
              />
            </Grid> */}
          </Grid>

          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            sx={{ border: '2px black solid', borderRadius: '24px' }}
          >
            Sign In
          </Button>
          <Grid
            container
            justify='flex-end'
            style={{ paddingTop: '16px' }}
            spacing={2}
          >
            {/* <Grid item xs={12}>
              <Link href='/' variant='body2'>
                Forgot password?
              </Link>
            </Grid> */}
            <Grid item xs={12}>
              <Typography variant='body2'>
                Don't have an account?{' '}
                <Link href='/signup' style={{ display: 'inline-flex' }}>
                  Sign up
                </Link>{' '}
                here
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Container>
    </div>
  );
}
export default SignInPage;
