import { Drawer } from '@mui/material';
import React from 'react';

function FilterContainer({ children }) {
  return (
    <Drawer
      sx={{ px: 4 }}
      variant='persistent'
      anchor='left'
      open={true}
      PaperProps={{
        sx: {
          width: 300,
          position: 'absolute',
        },
      }}
    >
      {children}
    </Drawer>
  );
}

export default FilterContainer;
