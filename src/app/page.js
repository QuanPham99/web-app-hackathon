import Image from 'next/image';
import styles from './page.module.css';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import { Grid, Stack, Typography } from '@mui/material';
import SignInBtn from '@/components/navigation/SignInBtn';

export default async function Home() {
  const session = await getServerSession(authOptions);
  switch (session?.user?.role) {
    case 'stud':
      redirect('/student');
    case 'prof':
      redirect('/professor');
    case 'com':
      redirect('/companyPage');
    default:
      break;
  }

  return (
    <section
      style={{
        height: '100vh',
        width: '100%',
      }}
    >
      <Grid container spacing={4} height='100%'>
        <Grid item xs={12} md={6}>
          <Stack
            sx={{
              display: 'flex',
              height: '100%',
              justifyContent: 'center',
              paddingLeft: 12,
              paddingRight: 8,
              paddingBottom: 8,
            }}
          >
            <Typography variant='h1' fontWeight='bold' fontSize={40}>
              Welcome to WebName
            </Typography>
            <Typography
              variant='subtitle1'
              color='grey'
              sx={{ paddingRight: 8, mt: 1 }}
            >
              Gain industry experience and make meaningful impacts during
              college by working on real-world projects under your professor’s
              supervision.
            </Typography>

            <SignInBtn
              buttonStyle={{
                marginTop: 16,
                width: '150px',
              }}
              title='Get Started'
            />
          </Stack>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            src='/assets/programmer.jpg'
            alt='Hero Section Image'
            width={600}
            height={600}
            quality={100}
          />
        </Grid>
      </Grid>
    </section>
  );
}
