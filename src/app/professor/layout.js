import React from 'react';
import NavBar from '@/components/navigation/NavBar';

export const metadata = {
  title: 'Professor Page',
};

const professorNavOptions = [
  { name: 'Search Projects', url: '/professor' },
  { name: 'Accepted Projects', url: '/professor/accepted-projects' },
  { name: 'My Students', url: '/professor/all-students' },
];

function ProfessorPageLayout({ children }) {
  return (
    <div>
      <NavBar navOptions={professorNavOptions} />

      <div
        style={{ paddingRight: '24px', paddingLeft: '24px', marginTop: '16px' }}
      >
        {children}
      </div>
    </div>
  );
}

export default ProfessorPageLayout;
