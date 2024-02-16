import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import { HiOutlineBookmark } from 'react-icons/hi';
import React from 'react';

const descriptionMaxLine = 3;

function ProjectCard({ user, projectDetail }) {
  return (
    <Card sx={{ borderRadius: 8, p: 1 }} elevation={1}>
      <CardHeader
        sx={{ mb: -3 }}
        avatar={
          <Avatar
            src={projectDetail.company_logo_url}
            alt={`${projectDetail.company_name}'s Logo`}
          />
        }
        action={
          <IconButton>
            <HiOutlineBookmark style={{ color: 'black' }} />
          </IconButton>
        }
        title={projectDetail.company_name}
        titleTypographyProps={{ fontWeight: 500, fontSize: 24 }}
      />
      <CardContent>
        <Typography variant='h4'>{projectDetail.title}</Typography>
        <Typography noWrap color='text.secondary' variant='body2'>
          {user && user.role === 'prof' && projectDetail.status === 'accepted'
            ? `Date accepted: ${projectDetail.date_accepted}`
            : `Date posted: ${projectDetail.date_posted}`}{' '}
          | Topics: {projectDetail.topics.join(', ')}
        </Typography>
        <Typography sx={{ fontWeight: 'bold', mt: 2, fontSize: 16 }}>
          Description:
        </Typography>
        <Typography
          sx={{
            fontSize: 14,
            mt: 1,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: `${descriptionMaxLine}`,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {projectDetail.description}
        </Typography>

        {user && user.role === 'prof' && (
          <Box sx={{ marginTop: 2 }}>
            <Stack spacing={1}>
              {projectDetail.num_students && projectDetail.num_students > 0 ? (
                <Typography sx={{ color: 'success.light' }}>
                  Assigned to {projectDetail.num_students} students.
                </Typography>
              ) : (
                <Typography sx={{ color: 'error.main' }}>
                  No students assigned.
                </Typography>
              )}

              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
              >
                <Button
                  variant='contained'
                  sx={{
                    textTransform: 'none',
                    borderRadius: '24px',
                    bgcolor: 'black',
                    '&:hover': { bgcolor: 'rgb(80,80,80)' },
                  }}
                >
                  Assign Students
                </Button>
                <Button
                  variant='outlined'
                  sx={{
                    textTransform: 'none',
                    borderRadius: '24px',
                    color: 'black',
                    borderColor: 'black',
                    '&:hover': {
                      borderColor: 'rgb(80,80,80)',
                      bgcolor: 'rgb(232,232,232)',
                    },
                  }}
                >
                  Complete Project
                </Button>
              </Stack>
            </Stack>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}

export default ProjectCard;
