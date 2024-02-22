import Image from 'next/image';
import styles from './page.module.css';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';


export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session);
  switch (session?.user?.role) {
    case 'stud':
      redirect('/student');
      return;
    case 'prof':
      redirect('/professor');
      return;
    case 'com':
      redirect('/companyPage');
      return;
    default:
      return <div>Home Page</div>;
  }
}