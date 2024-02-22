import React from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import UserAvatar from './UserAvatar';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import NavOption from '@/components/navigation/NavOption';

async function NavBar({ navOptions = [], optionComponents = [] }) {
  const session = await getServerSession(authOptions);

  return (
    <AppBar position='static' color='transparent' elevation={0}>
      <Container maxWidth='xl'>
        <Toolbar>
          <Typography variant='body2' fontWeight='bold'>
            Logo
          </Typography>
          <Typography sx={{ marginLeft: '8px' }} fontWeight='bold' variant='h6'>
            Web Name
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'space-evenly',
            }}
          >
            {navOptions.map((option, index) => (
              <NavOption key={index} option={option} />
            ))}
          </Box>

          {optionComponents}

          {session?.user ? (
            <UserAvatar user={session.user} />
          ) : (
            <Button
              variant='contained'
              sx={{
                textTransform: 'none',
                borderRadius: '24px',
                width: '120px',
                py: '8px',
              }}
              disableElevation
            >
              <Link href='/signin' style={{ textDecoration: 'none' }}>
                <Typography fontWeight='bold' color='white'>
                  Log In
                </Typography>
              </Link>
            </Button>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
