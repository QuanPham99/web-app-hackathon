import ProjectCard from '@/components/ProjectCard';
import ProjectFilter from '@/components/filter/ProjectFilter';
import { Box, Stack, Typography } from '@mui/material';
import { React } from 'react';
import FilterContainer from '@/components/filter/FilterContainer';
import { getAllProjects } from '@/database/project';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { Info } from '@mui/icons-material';

const mockProfuser = {
  last_name: 'Doe',
  first_name: 'Jone',
  role: 'prof',
};
const projectDetail = {
  company_name: 'Google',
  company_logo_url: '/assets/google_logo.png',
  num_students: 5,
  date_accepted: '2/15/2024',
};

async function page() {
  const session = await getServerSession(authOptions);

  const data = await getAllProjects({
    status: 'accepted',
    professor_id: session?.user?._id,
  });

  console.log(data);
  return (
    <div style={{ width: '100%' }}>
      {data.length > 0 ? (
        <Box sx={{ marginLeft: '300px' }}>
          <Stack spacing={2}>
            {data.map((project, index) => (
              <ProjectCard
                key={index}
                projectDetail={{ ...project, ...projectDetail }}
                user={session?.user}
              />
            ))}
          </Stack>
          <FilterContainer>
            <ProjectFilter title='Topic' isMultiChoice={true} />
            <ProjectFilter title='Company' />
          </FilterContainer>
        </Box>
      ) : (
        <Stack
          direction='row'
          spacing={1}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 12,
            color: 'grey',
          }}
        >
          <Info />
          <Typography>No projects accepted.</Typography>
        </Stack>
      )}
    </div>
  );
}

export default page;
