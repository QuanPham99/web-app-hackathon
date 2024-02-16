import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from '@mui/material';
import React from 'react';

function FilterMultiChoice({ options }) {
  return (
    <FormGroup>
      {options.map((option) => {
        return (
          <FormControlLabel
            label={
              <Typography variant='body2'>
                {`${option.name} (${option.count})`}
              </Typography>
            }
            control={<Checkbox size='small'></Checkbox>}
          />
        );
      })}
    </FormGroup>
  );
}

export default FilterMultiChoice;
