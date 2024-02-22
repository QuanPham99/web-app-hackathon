import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  RadioGroup,
  Typography,
} from '@mui/material';
import React from 'react';
import { MdOutlineExpandMore } from 'react-icons/md';
import FilterMultiChoice from './FilterMultiChoice';
import FilterSingleChoice from './FilterSingleChoice';

function ProjectFilter({ title, fetchdata_url, isMultiChoice = false }) {
  // TODO: Fetch filter options from backend
  const mock_options = [
    { name: 'Machine Learning', count: 3 },
    { name: 'Data Science', count: 5 },
    { name: 'Data Analysis', count: 4 },
  ];

  return (
    <Accordion elevation={0}>
      <AccordionSummary
        expandIcon={
          <MdOutlineExpandMore style={{ color: 'black', fontSize: '24px' }} />
        }
      >
        <Typography variant='h6'>{title}</Typography>
      </AccordionSummary>

      <AccordionDetails>
        {isMultiChoice ? (
          <FilterMultiChoice options={mock_options} />
        ) : (
          <FilterSingleChoice options={mock_options} />
        )}
      </AccordionDetails>
    </Accordion>
  );
}

export default ProjectFilter;
