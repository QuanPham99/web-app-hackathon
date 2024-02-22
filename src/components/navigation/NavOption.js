'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Typography } from '@mui/material';

function NavOption({ option, ...props }) {
  const pathName = usePathname();

  // Check if the user is currently in the page of this option
  const optionActive = option.url === pathName;

  return (
    <Link
      href={option.url}
      style={{
        textDecoration: 'none',
        color: optionActive ? 'dodgerblue' : 'black',
      }}
      {...props}
    >
      <Typography variant='subtitle'>{option.name}</Typography>
    </Link>
  );
}

export default NavOption;
