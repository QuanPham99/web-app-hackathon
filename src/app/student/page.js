'use client';
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Typography, Container, Grid, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
  },
  avatar: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    marginBottom: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(4),
  },
}));

function ProfilePage() {
  const [data, setData] = useState(null);
  const [project, setProjects] = useState(null);

  const fetchStudentData = async () => {
    try {
      const res = await fetch('/api/students', { method: 'GET' });

      if (!res.ok) {
        throw Error('Unknown Error');
      } else {
        const jsonData = await res.json();
        setData(jsonData.data);
      }
    } catch (error) {
      console.error('Error fetching student data:', error);
    }
  };

  const fetchStudentProject = async () => {
    try {
      // const body = {
      //   _id: data._id
      // }
      // const res = await fetch('/api/students/project', {method: "GET", body: JSON.stringify({...body})});
      // Construct query string with _id parameter
      const queryString = `?_id=${data._id}`;
      // Send GET request with query string
      const res = await fetch(`/api/students/project${queryString}`, { method: "GET" });
      if (!res.ok) {
        throw Error('Unknown Error');
      } else {
        const jsonData = await res.json();
        setProjects(jsonData);
        }
      } catch (error) {
        console.error('Error fetching student project:', error);
      }
  }

  useEffect(() => {
    fetchStudentData();
    fetchStudentProject();
  }, []);


  const classes = useStyles();
  return (

    data && (<Container className={classes.root} maxWidth="md">
      <Paper className={classes.paper}>
        <Grid container spacing={3} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={4} align="center">
            <Avatar alt="Profile Picture" src="profile.jpg" className={classes.avatar} />
                <Typography variant="h6">{data.first_name} {data.last_name}</Typography>
                {/* <Typography variant="subtitle1" color="textSecondary"></Typography> */}
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et leo vel magna pulvinar suscipit. Vivamus sit amet enim ultrices, fermentum purus et, commodo velit. Integer interdum vehicula ligula ut luctus.
            </Typography>
            <Typography variant="body1">Role: {data.role}</Typography> 
            <Typography variant="body1">Email: {data.email}</Typography> 
            {project && (<Typography variant="body1">Current Projects: {project} </Typography>)  }
          </Grid>
        </Grid>
      </Paper>
    </Container>
  ));
};

export default ProfilePage;
