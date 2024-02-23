'use client';
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Stack,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import UserAvatar from '../navigation/UserAvatar';
import { toast } from 'react-toastify';

const StudentOption = ({ student }) => {
  return (
    <Stack direction='row' spacing={2} display='flex' alignItems='center'>
      <UserAvatar
        user={student}
        disableClick={true}
        avatarProps={{ height: 40, width: 40 }}
      />
      <Typography>{`${student.first_name} ${student.last_name}`}</Typography>
    </Stack>
  );
};

function StudentAssignmentPopup({ open, closePopup }) {
  const [chosenId, setChosenId] = useState('');
  const [options, setOptions] = useState([]);
  const [selectedStudents, setSelectedStudents] = useState([]);

  const handleChange = (event) => {
    // const chosenStudent = options.filter((option) => option._id === event.target.)
    // Remove the chosen student from the option
    console.log('hello');
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/students/all', { method: 'GET' });

      if (!res.ok) {
        toast.error(res.error);
      } else {
        const { data } = await res.json();
        setOptions(data);
      }
    };

    fetchData();
  }, []);

  return (
    <Modal open={open} onClose={closePopup}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          boxShadow: 24,
          paddingLeft: 4,
          paddingRight: 4,
          paddingBottom: 4,
          paddingTop: 4,
          width: 500,
          height: 500,
          overflowY: 'auto',
          borderRadius: '8px',
        }}
      >
        <FormControl fullWidth>
          <InputLabel id='student-select-label'>Add student</InputLabel>
          <Select
            labelId='student-select-label'
            id='student-select'
            value={chosenId}
            label='Add student'
            onChange={handleChange}
          >
            {options?.length > 0 ? (
              options.map((student, index) => (
                <MenuItem key={index} value={student._id}>
                  <StudentOption student={student} />
                </MenuItem>
              ))
            ) : (
              <MenuItem value='' disabled>
                <em>No more students available</em>
              </MenuItem>
            )}
          </Select>
        </FormControl>
      </Box>
    </Modal>
  );
}

export default StudentAssignmentPopup;
