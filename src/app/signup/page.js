'use client';
import React, { useState } from 'react';
import {
  Button,
  Typography,
  Avatar,
  TextField,
  Grid,
  Container,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormHelperText,
} from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import styles from './signup.module.css';
import Link from 'next/link';
import { hashPassword } from '@/utils';
import { signIn } from 'next-auth/react';
import { toast } from 'react-toastify';

function SignUpPage() {
  const [submitting, setSubmitting] = useState(false);

  const [userInfo, setUserInfo] = useState({
    first_name: undefined,
    last_name: undefined,
    email: undefined,
    password: undefined,
    role: undefined,
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
        toast.error('User already exist');
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
            <Grid item xs={12}>
              <FormControl
                sx={{ width: '100%', marginBottom: userInfo.role ? '' : '5%' }}
                required
              >
                <InputLabel id='role-select-label'>Role</InputLabel>
                <Select
                  labelId='role-select-label'
                  id='role-select'
                  value={userInfo.role}
                  label='Role'
                  name='role'
                  fullWidth
                  onChange={handleChange}
                >
                  <MenuItem value='com'>Company</MenuItem>
                  <MenuItem value='prof'>Professor</MenuItem>
                  <MenuItem value='stud'>Student</MenuItem>
                </Select>
                {!userInfo.role && (
                  <FormHelperText>
                    Choose your role to get started
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            {userInfo.role && (
              <>
                {userInfo.role !== 'com' ? (
                  <>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        autoComplete='fname'
                        name='first_name'
                        variant='outlined'
                        required
                        fullWidth
                        id='first_name'
                        label='First Name'
                        autoFocus
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        variant='outlined'
                        required
                        fullWidth
                        id='last_name'
                        label='Last Name'
                        name='last_name'
                        autoComplete='lname'
                      />
                    </Grid>
                  </>
                ) : (
                  <Grid item xs={12} sm={12}>
                    <TextField
                      autoComplete='fname'
                      name='company_name'
                      variant='outlined'
                      required
                      fullWidth
                      id='company_name'
                      label='Company Name'
                    />
                  </Grid>
                )}

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
              </>
            )}
          </Grid>
          <Button
            type='submit'
            disabled={submitting}
            fullWidth
            variant='contained'
            color='primary'
            sx={{ border: '2px black solid', borderRadius: '24px' }}
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
