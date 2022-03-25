import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 5000);
  }, []);

  return (
    <div>
      <h1 className="title-notfound">Ooops......</h1>
      <h1 className="title-notfound">Halaman yang anda cati tidak ditemukan</h1>
    </div>
  );
}
