'use client';
import { Button } from '@mui/material';
import React, { useState } from 'react';
import StudentAssignmentPopup from '../popup/StudentAssignmentPopup';

function AssignStudentBtn({ project_id }) {
  const [open, setOpen] = useState(false);

  const closePopup = () => {
    setOpen(false);
  };
  const handleClick = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button
        variant='contained'
        sx={{
          textTransform: 'none',
          borderRadius: '24px',
          bgcolor: 'black',
          '&:hover': { bgcolor: 'rgb(80,80,80)' },
        }}
        onClick={handleClick}
      >
        Assign Student
      </Button>
      <StudentAssignmentPopup
        closePopup={closePopup}
        open={open}
        project_id={project_id}
      />
    </div>
  );
}

export default AssignStudentBtn;
