import React from 'react';
import NavBar from '@/components/navigation/NavBar';

export const metadata = {
    title: 'Student Page',
};

const studentNavOptions = [
    // { name: 'Home Page', url: '/home'},
    // { name: 'Projects', url: '/projects'},
    // { name: 'Professors', url: '/professor'}
];

function StudentPageLayout({ children}) {
    return (
        <div>
        <NavBar navOptions={studentNavOptions} />
  
        <div
          style={{ paddingRight: '64px', paddingLeft: '64px', marginTop: '16px' }}
        >
          {children}
        </div>
      </div>
    );
}

export default StudentPageLayout;