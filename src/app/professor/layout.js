import React from 'react';
import NavBar from '@/components/navigation/NavBar';

export const metadata = {
  title: 'Professor Page',
};

const professorNavOptions = [
  { name: 'Search Projects', url: '/professor' },
  { name: 'Accepted Projects', url: '/professor/accepted-projects' },
];

function ProfessorPageLayout({ children }) {
  return (
    <div>
      <NavBar navOptions={professorNavOptions} />

      <div
        style={{ paddingRight: '64px', paddingLeft: '64px', marginTop: '16px' }}
      >
        {children}
      </div>
    </div>
  );
}

export default ProfessorPageLayout;
