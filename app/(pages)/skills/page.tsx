import { SkillItem } from '@/components/SkillItem/SkillItem';
import { skills } from './dataArray';

export const metadata = {
  title: 'Portfolio | Skills',
};

export default function Skills() {
  return (
    <div className="bg-[#5a9696] dark:bg-gray-800 p-4 rounded-lg">
      <h1 className="text-2xl font-bold underline text-white">
        As a developer with one year of experience, I am proficient in the
        following technologies and tools:
      </h1>
      <ul className="mt-4">
        {skills.map((skill, index) => (
          <SkillItem
            key={skill.title}
            title={skill.title}
            description={skill.description}
          />
        ))}
      </ul>
    </div>
  );
}
