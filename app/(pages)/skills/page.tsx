import { SkillItem } from '@/components/SkillItem/SkillItem';

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
        <SkillItem
          title="Redux Toolkit"
          description="Proficient in using Redux Toolkit for managing application state efficiently, ensuring predictable data flow, and leveraging its utilities like createSlice and createAsyncThunk for simplified Redux setup."
        />
        <SkillItem
          title="React"
          description="Experienced in developing and maintaining web applications using React, employing best practices such as functional components, hooks, and context API for state management."
        />
        <SkillItem
          title="TypeScript"
          description="Skilled in TypeScript to enhance JavaScript codebase with static typing, improving code quality, IDE support, and catching errors during development."
        />
        <SkillItem
          title="JavaScript"
          description="Strong command of JavaScript for developing interactive web interfaces, manipulating DOM, handling asynchronous operations with Promises/async-await, and utilizing ES6+ features."
        />
        <SkillItem
          title="CSS, HTML, SCSS"
          description="Proficient in creating responsive and visually appealing web interfaces using CSS (including preprocessors like SCSS) and semantic HTML to ensure accessibility and SEO optimization."
        />
        <SkillItem
          title="Webpack"
          description="Experience in configuring and optimizing Webpack for bundling JavaScript modules, managing assets, and enhancing build performance through code splitting and optimization techniques."
        />
        <SkillItem
          title="Vite"
          description="Skilled in using Vite, a modern JavaScript build tool known for its fast build times, efficient development server, and seamless integration with frameworks like React and Vue.js."
        />
        <SkillItem
          title="Jest, RTL, Storybook"
          description="Skilled in writing unit tests and component tests using Jest and React Testing Library (RTL), and documenting components with Storybook to ensure code reliability and maintainability."
        />
        <SkillItem
          title="Feature-Sliced Design"
          description="Familiar with Feature-Sliced approach to application architecture, organizing codebase into feature modules to enhance scalability, maintainability, and team collaboration."
        />
        <SkillItem
          title="i18next"
          description="Experience in implementing internationalization (i18n) in web applications using i18next library, supporting multiple languages and locales for a global user base."
        />
        <SkillItem
          title="MongoDB, Mongoose, Express, JWT"
          description="Proficient in developing backend systems with MongoDB as a NoSQL database, Mongoose ODM for modeling data, Express.js for server-side logic, and JWT for secure authentication and authorization."
        />
        <SkillItem
          title="Next.js"
          description="Developed and optimized web applications using Next.js for server-side rendering, API routes, and dynamic routing, improving SEO and performance."
        />
        <SkillItem
          title="Tailwind CSS"
          description="Proficient in using Tailwind CSS for building responsive UI components with utility-first approach, enhancing development speed and maintaining consistency in styling."
        />
      </ul>
    </div>
  );
}
