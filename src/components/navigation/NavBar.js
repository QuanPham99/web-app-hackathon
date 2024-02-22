import React from 'react';
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import UserAvatar from './UserAvatar';

function NavBar({ navOptions = [], optionComponents = [] }) {
  // const {data: session } = getServerSession()
  const mock_user = { lastName: 'Le', firstName: 'Minh' };
  // const mock_user = undefined;

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
              <Link
                key={index}
                href={option.url}
                style={{
                  textDecoration: 'none',
                  color: 'black',
                }}
              >
                <Typography variant='subtitle'>{option.name}</Typography>
              </Link>
            ))}
          </Box>
          {optionComponents}
          {mock_user ? (
            <UserAvatar user={mock_user} />
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
