import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from '@mui/material';
import { HiOutlineBookmark } from 'react-icons/hi';
import React from 'react';

const descriptionMaxLine = 3;

function ProjectCard({ projectDetail }) {
  return (
    <Card sx={{ borderRadius: 8, p: 1 }} elevation={3}>
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
          Date posted: {projectDetail.date_posted} | Topics:{' '}
          {projectDetail.topics.join(', ')}
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
      </CardContent>
    </Card>
  );
}

export default ProjectCard;
