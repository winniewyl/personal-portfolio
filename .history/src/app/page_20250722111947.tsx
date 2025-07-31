import Image from 'next/image';

export default function Home() {
  return (
    <div className="font-sans flex flex-col items-center justify-center min-h-screen p-8 sm:p-20">
      {/* Hero Section Start */}
      <section className="flex flex-col items-center justify-center gap-4 py-8 w-full">
        <h1 className="text-4xl sm:text-5xl font-bold text-center">
          Winnie Wang
        </h1>
        <h2 className="text-xl sm:text-2xl font-medium text-center text-gray-600 dark:text-gray-300">
          AI Product Analyst
        </h2>
        <a
          href="/Winnie_Wang_Resume.pdf"
          download
          className="mt-4 inline-block rounded-full bg-blue-600 text-white px-6 py-2 font-semibold shadow hover:bg-blue-700 transition-colors text-base sm:text-lg"
        >
          Download Resume
        </a>
      </section>
      {/* Hero Section End */}
    </div>
  );
}
