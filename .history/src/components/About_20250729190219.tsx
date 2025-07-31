import React, { useState } from 'react';

interface Location {
  id: string;
  name: string;
  country: string;
  coordinates: [number, number]; // [latitude, longitude]
  period: string;
  description: string;
  type: 'education' | 'current';
}

const locations: Location[] = [
  {
    id: 'yuhua',
    name: '江西育华学校',
    country: 'China',
    coordinates: [28.682, 115.8579], // Nanchang, China
    period: '2016 - 2019',
    description: 'Middle School - Foundation years in Nanchang',
    type: 'education',
  },
  {
    id: 'sdfz',
    name: '江西师大附中国际部',
    country: 'China',
    coordinates: [28.682, 115.8579], // Nanchang, China
    period: '2019 - 2020',
    description: 'High School - International program preparation',
    type: 'education',
  },
  {
    id: 'tufts',
    name: 'Tufts University',
    country: 'USA',
    coordinates: [42.4072, -71.1194], // Medford, MA
    period: '2020 - 2024',
    description:
      'Bachelor of Science in Applied Mathematics & Computer Science',
    type: 'education',
  },
  {
    id: 'purdue',
    name: 'Purdue University',
    country: 'USA',
    coordinates: [40.4237, -86.9212], // West Lafayette, IN
    period: '2024 - 2026',
    description: 'Master of Business and Technology (MBT)',
    type: 'current',
  },
];

const About: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  );

  const handleLocationClick = (location: Location) => {
    setSelectedLocation(location);
  };

  return (
    <section className="w-full flex flex-col items-center">
      <h2 className="text-4xl font-extrabold text-center mb-4 mt-4 text-gray-900 dark:text-white">
        About Me
      </h2>
      <p className="text-lg text-center text-gray-700 dark:text-gray-300 max-w-2xl mb-8">
        My journey from China to the United States, pursuing education and
        growth across continents.
      </p>

      <div className="w-full max-w-6xl">
        {/* Interactive World Map */}
        <div className="relative bg-white dark:bg-[#232336] rounded-2xl shadow-lg p-8 mb-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              My Educational Journey
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Click on the markers to learn more about each location
            </p>
          </div>

          {/* World Map Container */}
          <div className="relative w-full h-96 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl overflow-hidden">
            {/* Simplified World Map Background */}
            <div className="absolute inset-0 opacity-20">
              <svg viewBox="0 0 1000 500" className="w-full h-full">
                {/* Simplified continents */}
                <path
                  d="M150,200 Q200,150 250,200 T350,200 L350,300 Q300,350 250,300 T150,300 Z"
                  fill="#4B5563"
                  opacity="0.3"
                />
                <path
                  d="M400,150 Q450,100 500,150 T600,150 L600,250 Q550,300 500,250 T400,250 Z"
                  fill="#4B5563"
                  opacity="0.3"
                />
                <path
                  d="M650,200 Q700,150 750,200 T850,200 L850,300 Q800,350 750,300 T650,300 Z"
                  fill="#4B5563"
                  opacity="0.3"
                />
              </svg>
            </div>

            {/* Location Markers */}
            {locations.map((location, index) => (
              <div
                key={location.id}
                className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-110"
                style={{
                  left: `${((location.coordinates[1] + 180) / 360) * 100}%`,
                  top: `${((90 - location.coordinates[0]) / 180) * 100}%`,
                }}
                onClick={() => handleLocationClick(location)}
              >
                {/* Marker */}
                <div
                  className={`w-4 h-4 rounded-full border-2 border-white shadow-lg ${
                    location.type === 'current'
                      ? 'bg-green-500 animate-pulse'
                      : 'bg-blue-500'
                  }`}
                >
                  <div className="w-2 h-2 rounded-full bg-white m-0.5"></div>
                </div>

                {/* Connection Line (except for first location) */}
                {index > 0 && (
                  <div
                    className="absolute w-px bg-blue-400 opacity-60"
                    style={{
                      height: '2px',
                      left: '50%',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '100px',
                    }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Location Details Panel */}
          {selectedLocation && (
            <div className="mt-6 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-700">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {selectedLocation.name}
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                    {selectedLocation.country}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">
                    {selectedLocation.period}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    {selectedLocation.description}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedLocation(null)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Journey Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((location) => (
            <div
              key={location.id}
              className="bg-white dark:bg-[#232336] rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => handleLocationClick(location)}
            >
              <div className="flex items-center mb-3">
                <div
                  className={`w-3 h-3 rounded-full mr-3 ${
                    location.type === 'current' ? 'bg-green-500' : 'bg-blue-500'
                  }`}
                ></div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  {location.name}
                </h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                {location.country}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500">
                {location.period}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
