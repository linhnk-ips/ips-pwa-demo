// this import is only included in the server build since its only used in getServerSideProps
import styles from '../styles/App.module.css'
import Link from 'next/link';
import { useCurrentUser } from '../hooks/userCurrentUser';

function Dashboard() {
  const { isLoading, isAuthorized, username } = useCurrentUser();

  if (isLoading) {
    return null;
  }
  const authorizedBody =
    <>
      You successfully signed in with Passage.
      <br /><br />
      Your username is: <b>{username}</b>
    </>

  const unauthorizedBody =
    <>
      You have not logged in and cannot view the dashboard.
      <br /><br />
      <Link href='/' className={styles.link}>Login to continue.</Link>
    </>

  return (
    <div className={styles.dashboard}>
      <div className={styles.title}>{isAuthorized ? 'Welcome!' : 'Unauthorized'}</div>
      <div className={styles.message}>
        {isAuthorized ? authorizedBody : unauthorizedBody}
      </div>
    </div>
  );
};


export default Dashboard;