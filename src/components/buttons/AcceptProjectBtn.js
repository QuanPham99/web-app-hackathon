'use client';
import React, { useState } from 'react';
import { Button } from '@mui/material';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

function AcceptProjectBtn({ projectInfo, closePopup }) {
  const { data: session } = useSession();
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  const acceptProject = async () => {
    try {
      const body = {
        professor_id: session.user._id,
        project_id: projectInfo._id,
        date_accepted: new Date().toDateString(),
      };

      const res = await fetch('/api/professor', {
        method: 'PUT',
        body: JSON.stringify({
          ...body,
        }),
      });

      if (res.ok) {
        router.refresh();
      }
    } catch (error) {
      toast.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleAcceptClick = async () => {
    setSubmitting(true);
    await acceptProject();
    closePopup();
  };
  return (
    <Button
      disabled={submitting}
      onClick={handleAcceptClick}
      type='submit'
      variant='contained'
      style={{ borderRadius: '24px' }}
    >
      {submitting ? 'Accepting...' : 'Accept '}
    </Button>
  );
}

export default AcceptProjectBtn;
