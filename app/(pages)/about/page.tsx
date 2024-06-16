import { AboutItem } from '@/components/AboutItem/AboutItem';
import { dataArray } from './dataArray';

export const metadata = {
  title: 'Portfolio | About',
  description: 'About me',
};

export default function About() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center p-4">
      <div className="col-span-1 md:col-span-2">
        <h1 className="text-3xl font-bold underline text-lightTheme-alert-text dark:text-darkTheme-alert-text">
          About me
        </h1>
      </div>
      {dataArray.map((data, index) => (
        <AboutItem
          key={data.title}
          title={data.title}
          description={data.description}
        />
      ))}
      <AboutItem title="Personal qualities">
        <ul className="list-disc list-inside">
          <li>Communication skills </li>
          <li>openness</li>
          <li>responsibility</li>
          <li>desire to develop as a person and professional.</li>
        </ul>
      </AboutItem>
    </div>
  );
}
