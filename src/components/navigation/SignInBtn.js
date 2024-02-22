import { Button, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

function SignInBtn({ buttonProps, buttonStyle, title = 'Log In' }) {
  return (
    <Button
      variant='contained'
      sx={{
        textTransform: 'none',
        borderRadius: '24px',
        width: '120px',
        py: '8px',
        ...buttonStyle,
      }}
      disableElevation
      {...buttonProps}
    >
      <Link href='/signin' style={{ textDecoration: 'none' }}>
        <Typography fontWeight='bold' color='white'>
          {title}
        </Typography>
      </Link>
    </Button>
  );
}

export default SignInBtn;
