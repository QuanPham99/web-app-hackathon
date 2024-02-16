import { FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';
import React from 'react';

function FilterSingleChoice({ options }) {
  return (
    <RadioGroup>
      {options.map((option, index) => (
        <FormControlLabel
          key={index}
          label={
            <Typography variant='body2'>
              {`${option.name} (${option.count})`}
            </Typography>
          }
          control={<Radio size='small' />}
        />
      ))}
    </RadioGroup>
  );
}

export default FilterSingleChoice;
