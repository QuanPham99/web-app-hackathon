'use client';
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  MenuItem,
  MenuList,
  Popover,
  Typography,
} from '@mui/material';
import React, { useState, useRef } from 'react';
import { signOut } from 'next-auth/react';

function UserAvatar({ user, ...props }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openPopover, setOpenPopover] = useState(false);

  const closePopover = () => {
    setOpenPopover(false);
    setAnchorEl(null);
  };

  const handleAvatarclick = (event) => {
    setOpenPopover(true);

    setAnchorEl(event.currentTarget);
  };

  const handleSignOut = async () => {
    closePopover();
    signOut({ callbackUrl: '/' });
  };

  const id = openPopover ? 'account-popover' : undefined;

  return (
    <>
      <IconButton onClick={handleAvatarclick} aria-describedby={id}>
        <Avatar alt='User Avatar' sx={{ bgcolor: 'black' }}>
          UA
        </Avatar>
      </IconButton>

      <Popover
        anchorEl={anchorEl}
        id={id}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        open={openPopover}
        onClose={closePopover}
        slotProps={{ paper: { sx: { width: 200 } } }}
      >
        <Box sx={{ py: 1.5, px: 2 }}>
          <Typography variant='overline'>Account</Typography>
          <Typography variant='body2'>
            {`${user.firstName} ${user.lastName}`}
          </Typography>
        </Box>
        <Divider />
        <MenuList
          disablePadding
          dense
          sx={{
            p: '8px',
            '& > *': {
              borderRadius: 1,
            },
          }}
        >
          <MenuItem onClick={handleSignOut}>Sign out</MenuItem>
        </MenuList>
      </Popover>
    </>
  );
}

export default UserAvatar;