import { FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';
import React from 'react';

function FilterSingleChoice({ options }) {
  return (
    <RadioGroup>
      {options.map((option) => (
        <FormControlLabel
          label={
            <Typography variant='body2'>
              {`${option.name} (${option.count})`}
            </Typography>
          }
          control={<Radio />}
        />
      ))}
    </RadioGroup>
  );
}

export default FilterSingleChoice;
