import React from 'react';

interface HeroProps {
  name: string;
  role: string;
}

const Hero: React.FC<HeroProps> = ({ name, role }) => (
  <section className="flex flex-col items-center justify-center gap-4 py-8 w-full">
    <h1 className="text-4xl sm:text-5xl font-bold text-center">{name}</h1>
    <h2 className="text-xl sm:text-2xl font-medium text-center text-gray-600 dark:text-gray-300">
      {role}
    </h2>
  </section>
);

export default Hero;
