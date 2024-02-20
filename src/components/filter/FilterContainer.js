import { Drawer } from '@mui/material';
import React from 'react';

function FilterContainer({ children, paperProps }) {
  return (
    <Drawer
      sx={{ '& .MuiDrawer-paper': { borderWidth: 0 } }}
      variant='persistent'
      anchor='left'
      open={true}
      elevation={0}
      PaperProps={{
        sx: {
          width: 280,
          position: 'absolute',
          marginTop: '84px',
          marginLeft: '64px',
          ...paperProps,
        },
      }}
    >
      {children}
    </Drawer>
  );
}

export default FilterContainer;
