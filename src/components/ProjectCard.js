'use client';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import { HiOutlineBookmark } from 'react-icons/hi';
import React, { useEffect } from 'react';
import { formatDate } from '../utils';
import { useState } from 'react';
import ProjectDetailPopup from './popup/ProjectDetailPopup';
import AssignStudentBtn from '@/components/buttons/AssignStudentBtn';

const descriptionMaxLine = 3;

function ProjectCard({ user, projectDetail }) {
  const [data, setData] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleClose = (event, reason) => {
    setShowModal(false);
  };

  useEffect(() => {
    // Use useEffect to prvent hydration error when passing arguments
    // from server(the page) to client (the component)
    setData(projectDetail);
    setUserRole(user?.role);
  }, []);

  return (
    data && (
      <Card sx={{ borderRadius: 8, p: 1 }} elevation={1}>
        <CardHeader
          sx={{ mb: -3 }}
          avatar={
            <Avatar
              src={data.company_logo_url}
              alt={`${data.company_name}'s Logo`}
            />
          }
          action={
            <IconButton>
              <HiOutlineBookmark style={{ color: 'black' }} />
            </IconButton>
          }
          title={data.company_name}
          titleTypographyProps={{ fontWeight: 500, fontSize: 24 }}
        />
        <CardContent>
          <CardActionArea
            onClick={() => {
              setShowModal(true);
            }}
          >
            <Typography variant='h4'>{data.title}</Typography>
            <Typography noWrap color='text.secondary' variant='body2'>
              {userRole && userRole === 'prof' && data.status === 'accepted'
                ? `Date accepted: ${formatDate(data.date_accepted)}`
                : `Date posted: ${formatDate(data.date_posted)}`}{' '}
              {data.topics && `| Topics: ${data.topics?.join(', ')}`}
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
              {data.description}
            </Typography>
          </CardActionArea>

          {userRole && userRole === 'prof' && (
            <Box sx={{ marginTop: 2 }}>
              <Stack spacing={1}>
                {data.num_students && data.num_students > 0 ? (
                  <Typography sx={{ color: 'success.light' }}>
                    Assigned to {data.num_students} students.
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
                  <AssignStudentBtn project_id={data._id} />
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
        {showModal && (
          <ProjectDetailPopup
            open={showModal}
            onClose={handleClose}
            projectInfo={data}
          />
        )}
      </Card>
    )
  );
}

export default ProjectCard;
