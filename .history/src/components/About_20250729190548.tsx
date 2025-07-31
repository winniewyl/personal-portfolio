import React, { useState } from 'react';

interface TravelLocation {
  id: string;
  name: string;
  country: string;
  coordinates: [number, number]; // [latitude, longitude]
  type: 'visited' | 'lived' | 'current';
  description?: string;
}

// You can add your visited countries and cities here
const travelLocations: TravelLocation[] = [
  // Example locations - replace with your actual travel history
  {
    id: 'nanchang',
    name: 'Nanchang',
    country: 'China',
    coordinates: [28.682, 115.8579],
    type: 'lived',
    description: 'My hometown where I grew up',
  },
  {
    id: 'boston',
    name: 'Boston',
    country: 'USA',
    coordinates: [42.3601, -71.0589],
    type: 'lived',
    description: 'Studied at Tufts University',
  },
  {
    id: 'west-lafayette',
    name: 'West Lafayette',
    country: 'USA',
    coordinates: [40.4237, -86.9212],
    type: 'current',
    description: 'Currently studying at Purdue University',
  },
  // Add more locations as needed
];

const About: React.FC = () => {
  const [selectedLocation, setSelectedLocation] =
    useState<TravelLocation | null>(null);

  const handleLocationClick = (location: TravelLocation) => {
    setSelectedLocation(location);
  };

  const getMarkerColor = (type: string) => {
    switch (type) {
      case 'current':
        return 'bg-green-500';
      case 'lived':
        return 'bg-blue-500';
      case 'visited':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getMarkerSize = (type: string) => {
    switch (type) {
      case 'current':
        return 'w-5 h-5';
      case 'lived':
        return 'w-4 h-4';
      case 'visited':
        return 'w-3 h-3';
      default:
        return 'w-3 h-3';
    }
  };

  return (
    <section className="w-full flex flex-col items-center">
      <h2 className="text-4xl font-extrabold text-center mb-4 mt-4 text-gray-900 dark:text-white">
        About Me
      </h2>
      <p className="text-lg text-center text-gray-700 dark:text-gray-300 max-w-2xl mb-8">
        My journey around the world - places I've lived, studied, and visited.
      </p>

      <div className="w-full max-w-6xl">
        {/* World Map */}
        <div className="relative bg-white dark:bg-[#232336] rounded-2xl shadow-lg p-8 mb-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              My World Map
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Click on the markers to learn more about each location
            </p>

            {/* Legend */}
            <div className="flex justify-center space-x-6 text-sm">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-gray-600 dark:text-gray-400">
                  Current
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
                <span className="text-gray-600 dark:text-gray-400">Lived</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                <span className="text-gray-600 dark:text-gray-400">
                  Visited
                </span>
              </div>
            </div>
          </div>

          {/* World Map Container */}
          <div className="relative w-full h-96 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
            {/* World Map Background */}
            <div className="absolute inset-0">
              <svg viewBox="0 0 1000 500" className="w-full h-full">
                {/* Simplified world map - you can replace this with a more detailed map */}
                {/* North America */}
                <path
                  d="M100,150 Q150,100 200,150 T300,150 L300,250 Q250,300 200,250 T100,250 Z"
                  fill="#4B5563"
                  opacity="0.2"
                />
                {/* South America */}
                <path
                  d="M200,250 Q250,200 300,250 T400,250 L400,400 Q350,450 300,400 T200,400 Z"
                  fill="#4B5563"
                  opacity="0.2"
                />
                {/* Europe */}
                <path
                  d="M450,100 Q500,50 550,100 T650,100 L650,200 Q600,250 550,200 T450,200 Z"
                  fill="#4B5563"
                  opacity="0.2"
                />
                {/* Africa */}
                <path
                  d="M450,200 Q500,150 550,200 T650,200 L650,400 Q600,450 550,400 T450,400 Z"
                  fill="#4B5563"
                  opacity="0.2"
                />
                {/* Asia */}
                <path
                  d="M650,100 Q700,50 750,100 T850,100 L850,300 Q800,350 750,300 T650,300 Z"
                  fill="#4B5563"
                  opacity="0.2"
                />
                {/* Australia */}
                <path
                  d="M750,350 Q800,300 850,350 T950,350 L950,400 Q900,450 850,400 T750,400 Z"
                  fill="#4B5563"
                  opacity="0.2"
                />
              </svg>
            </div>

            {/* Location Markers */}
            {travelLocations.map((location) => (
              <div
                key={location.id}
                className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-125"
                style={{
                  left: `${((location.coordinates[1] + 180) / 360) * 100}%`,
                  top: `${((90 - location.coordinates[0]) / 180) * 100}%`,
                }}
                onClick={() => handleLocationClick(location)}
              >
                {/* Marker */}
                <div
                  className={`${getMarkerSize(location.type)} ${getMarkerColor(
                    location.type
                  )} rounded-full border-2 border-white shadow-lg ${
                    location.type === 'current' ? 'animate-pulse' : ''
                  }`}
                >
                  <div className="w-1 h-1 rounded-full bg-white m-0.5"></div>
                </div>

                {/* Location Label */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 px-2 py-1 bg-white dark:bg-gray-800 rounded text-xs font-medium text-gray-700 dark:text-gray-300 shadow-sm opacity-0 hover:opacity-100 transition-opacity whitespace-nowrap">
                  {location.name}
                </div>
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
                  {selectedLocation.description && (
                    <p className="text-gray-700 dark:text-gray-300">
                      {selectedLocation.description}
                    </p>
                  )}
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

        {/* Travel Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {travelLocations.map((location) => (
            <div
              key={location.id}
              className="bg-white dark:bg-[#232336] rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => handleLocationClick(location)}
            >
              <div className="flex items-center mb-3">
                <div
                  className={`${getMarkerSize(location.type)} ${getMarkerColor(
                    location.type
                  )} rounded-full mr-3 ${
                    location.type === 'current' ? 'animate-pulse' : ''
                  }`}
                ></div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  {location.name}
                </h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                {location.country}
              </p>
              {location.description && (
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  {location.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
