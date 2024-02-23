'use client';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import UserAvatar from '../navigation/UserAvatar';
import { toast } from 'react-toastify';
import { DeleteOutlineOutlined } from '@mui/icons-material';
import { useRouter } from 'next/navigation';

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

function StudentAssignmentPopup({ open, closePopup, project_id }) {
  const router = useRouter();
  const [options, setOptions] = useState([]);
  const [selectedStudents, setSelectedStudents] = useState([]);

  const handleAssignStudent = (event) => {
    const chosenStudent = options.filter(
      (option) => option._id === event.target.value
    )[0];

    // Remove the chosen student from the option
    setOptions((prev) =>
      prev.filter((option) => option._id !== chosenStudent._id)
    );

    // Keep track of the chosen students
    setSelectedStudents((prev) => [...prev, chosenStudent]);
  };

  const handleRemoveStudent = (event) => {
    const targetStudent = selectedStudents.filter(
      (student) => student._id === event.currentTarget.value
    )[0];

    // Unassigned the student from the list of chosen ones
    setSelectedStudents((prev) =>
      prev.filter((student) => student._id !== targetStudent._id)
    );

    // Put back the unassigned student to options
    setOptions((prev) => [...prev, targetStudent]);
  };

  const handleSaveClick = async () => {
    const res = await fetch('/api/projects/assign', {
      method: 'PUT',
      body: JSON.stringify({
        student_ids: selectedStudents.map((student) => student._id),
        project_id: project_id,
      }),
    });

    if (!res.ok) {
      throw res.error;
    } else {
      closePopup();
      window.location.reload();
    }
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

  console.log(options);

  return (
    <Dialog
      open={open}
      onClose={closePopup}
      fullWidth
      maxWidth='md'
      scroll='paper'
      PaperProps={{ sx: { height: 600, px: 2 } }}
    >
      <DialogTitle>Assign Students</DialogTitle>
      <DialogContent>
        <Stack spacing={1} sx={{ marginBottom: 4 }}>
          {selectedStudents &&
            selectedStudents.map((student, index) => (
              <Stack
                key={index}
                direction='row'
                display='flex'
                alignItems='center'
                justifyContent='space-between'
                sx={{
                  borderRadius: '12px',
                  px: 2,
                  bgcolor: 'lightgray',
                }}
              >
                <StudentOption student={student} />
                <IconButton value={student._id} onClick={handleRemoveStudent}>
                  <DeleteOutlineOutlined value={student._id} />
                </IconButton>
              </Stack>
            ))}
        </Stack>

        <FormControl fullWidth>
          <InputLabel id='student-select-label'>Add student</InputLabel>
          <Select
            labelId='student-select-label'
            id='student-select'
            value={''}
            label='Add student'
            onChange={handleAssignStudent}
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
      </DialogContent>

      <DialogActions>
        <Button
          variant='outlined'
          onClick={closePopup}
          sx={{ borderRadius: '24px', width: '90px' }}
        >
          Cancel
        </Button>
        <Button
          variant='contained'
          sx={{ borderRadius: '24px', width: '90px' }}
          onClick={handleSaveClick}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default StudentAssignmentPopup;
