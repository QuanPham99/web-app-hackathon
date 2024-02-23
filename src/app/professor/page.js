import ProjectCard from '@/components/ProjectCard';
import ProjectFilter from '@/components/filter/ProjectFilter';
import { Box, CardActions, Stack, Typography } from '@mui/material';
import { React } from 'react';
import FilterContainer from '@/components/filter/FilterContainer';
import { getAllProjects } from '@/database/project';
import { Info, ReportProblem } from '@mui/icons-material';

async function Page() {
  const { success, data } = await getAllProjects({ status: 'posted' });

  if (success) {
    return data.length > 0 ? (
      <div style={{ width: '100%' }}>
        <Box sx={{ marginLeft: '300px' }}>
          <Stack spacing={2}>
            {data.map((project, index) => (
              <ProjectCard key={index} projectDetail={{ ...project }} />
            ))}
          </Stack>
        </Box>

        <FilterContainer>
          <ProjectFilter title='Topic' isMultiChoice={true} />
          <ProjectFilter title='Company' />
        </FilterContainer>
      </div>
    ) : (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 4,
        }}
      >
        <Info
          sx={{ marginRight: '4px', color: 'text.secondary' }}
          fontSize='small'
        />
        <Typography variant='h6' sx={{ color: 'text.secondary' }}>
          No projects available.
        </Typography>
      </Box>
    );
  } else {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 4,
        }}
      >
        <ReportProblem
          sx={{ marginRight: '4px' }}
          fontSize='small'
          color='error'
        />
        <Typography variant='h6' sx={{ color: 'error.main' }}>
          Something unexpected happened.
        </Typography>
      </Box>
    );
  }
}

export default Page;
