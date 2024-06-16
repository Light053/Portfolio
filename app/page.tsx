import { Languages } from '@/components/Languages/Languages';
import { Introduction } from '@/components/Introduction/Introduction';
import { Experience } from '@/components/Experinece/Experience';

export default function Home() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center p-4">
      <Introduction />
      <Languages />
      <Experience />
    </main>
  );
}
