'use client';
import React, { useEffect, useState } from 'react';
import { Avatar, Typography, Container, Grid, Paper } from '@mui/material';

function ProfilePage() {
  const [data, setData] = useState(null);
  const [project, setProjects] = useState(null);

  const fetchStudentProject = async (studentData) => {
    try {
      const queryString = `?_id=${studentData._id}`;
      // Send GET request with query string
      const res = await fetch(`/api/students/project${queryString}`, {
        method: 'GET',
      });
      if (!res.ok) {
        throw Error('Unknown Error');
      } else {
        const jsonData = await res.json();
        setProjects(jsonData.data[0]);
      }
    } catch (error) {
      console.error('Error fetching student project:', error);
    }
  };

  const fetchStudentData = async () => {
    try {
      const res = await fetch('/api/students', { method: 'GET' });

      if (!res.ok) {
        throw Error('Unknown Error');
      } else {
        const jsonData = await res.json();
        setData(jsonData.data);
        fetchStudentProject(jsonData.data);
      }
    } catch (error) {
      console.error('Error fetching student data:', error);
    }
  };

  useEffect(() => {
    fetchStudentData();
  }, []);

  // const classes = useStyles();
  return (
    data && (
      <Container maxWidth='md'>
        <Paper>
          <Grid
            container
            spacing={3}
            alignItems='center'
            justifyContent='center'
          >
            <Grid item xs={12} md={4} align='center'>
              <Avatar
                alt='Profile Picture'
                src='profile.jpg'
                // className={classes.avatar}
              />
              <Typography variant='h6'>
                {data.first_name} {data.last_name}
              </Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant='body1'>Role: {data.role}</Typography>
              <Typography variant='body1'>Email: {data.email}</Typography>
              {project && (
                <Typography variant='body1'>
                  Current Project Title: {project.title}{' '}
                </Typography>
              )}
            </Grid>
          </Grid>
        </Paper>
      </Container>
    )
  );
}

export default ProfilePage;
