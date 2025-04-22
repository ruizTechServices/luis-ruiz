import Hero from '@/components/Hero';
import Logo from '../components/Logo';

export default function Home() {
  return (
    <>
      <Logo />
      <main className="min-h-screen">
        <Hero />
      </main>
    </>
  );
}
