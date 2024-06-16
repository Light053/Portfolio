import { AboutItem } from '@/components/AboutItem/AboutItem';

export const metadata = {
  title: 'Portfolio | About',
};

export default function About() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center p-4">
      <div className="col-span-1 md:col-span-2">
        <h1 className="text-3xl font-bold underline text-lightTheme-alert-text dark:text-darkTheme-alert-text">
          About me
        </h1>
      </div>
      <AboutItem
        title="Personal information"
        description="My name is Sîrbu Nicolae, I am a front-end developer with more than a
          year of experience."
      />

      <AboutItem title="Personal qualities">
        <ul className="list-disc list-inside">
          <li>Communication skills </li>
          <li>openness</li>
          <li>responsibility</li>
          <li>desire to develop as a person and professional.</li>
        </ul>
      </AboutItem>
      <AboutItem
        title="Interests"
        description="I am interested in some sciences such as astrophysics, quantum physics
          and some related ones. I am also interested in philosophy and poetry."
      />
      <AboutItem
        title="Education"
        description="After finishing 9th grade, I went to college to major in web
          applications. I am currently a third year student."
      />
    </div>
  );
}
