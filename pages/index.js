import Image from 'next/image';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout pageTitle="Home Page">
      <Image src="/profile.png" width={200} height={200} alt="profile" />
      <h1>Hendra Wahyu Saputro</h1>
    </Layout>
  );
}
