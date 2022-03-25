/* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */

import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import styles from '../../styles/Users.module.css';

export default function index(props) {
  const { dataUser } = props;
  const router = useRouter();

  return (
    <Layout pageTitle="User Page">
      {dataUser.map((user) => (
        <div key={user.id} onClick={() => router.push(`/users/${user.id}`)} className={styles.card}>
          <p>{user.name}</p>
        </div>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUser = await res.json();
  return {
    props: {
      dataUser,
    },
  };
}
