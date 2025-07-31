'use client';

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
  // China - Lived
  {
    id: 'nanchang',
    name: 'Nanchang',
    country: 'China',
    coordinates: [28.682, 115.8579],
    type: 'lived',
    description: 'My hometown where I grew up',
  },
  {
    id: 'beijing',
    name: 'Beijing',
    country: 'China',
    coordinates: [39.9042, 116.4074],
    type: 'visited',
    description: 'Capital city of China',
  },
  {
    id: 'shanghai',
    name: 'Shanghai',
    country: 'China',
    coordinates: [31.2304, 121.4737],
    type: 'visited',
    description: 'Major financial and cultural center',
  },

  // USA - Lived and Current
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
  {
    id: 'new-york',
    name: 'New York',
    country: 'USA',
    coordinates: [40.7128, -74.006],
    type: 'visited',
    description: 'The Big Apple - visited for tourism',
  },
  {
    id: 'san-francisco',
    name: 'San Francisco',
    country: 'USA',
    coordinates: [37.7749, -122.4194],
    type: 'visited',
    description: 'Tech hub and cultural center',
  },

  // Australia - Visited
  {
    id: 'sydney',
    name: 'Sydney',
    country: 'Australia',
    coordinates: [-33.8688, 151.2093],
    type: 'visited',
    description: 'Beautiful harbor city and iconic Opera House',
  },
  {
    id: 'melbourne',
    name: 'Melbourne',
    country: 'Australia',
    coordinates: [-37.8136, 144.9631],
    type: 'visited',
    description: 'Cultural capital with great food scene',
  },

  // Switzerland - Visited
  {
    id: 'zurich',
    name: 'Zurich',
    country: 'Switzerland',
    coordinates: [47.3769, 8.5417],
    type: 'visited',
    description: 'Financial hub and cultural center',
  },
  {
    id: 'geneva',
    name: 'Geneva',
    country: 'Switzerland',
    coordinates: [46.2044, 6.1432],
    type: 'visited',
    description: 'International city with beautiful lake views',
  },

  // France - Visited
  {
    id: 'paris',
    name: 'Paris',
    country: 'France',
    coordinates: [48.8566, 2.3522],
    type: 'visited',
    description: 'City of Light - art, culture, and history',
  },
  {
    id: 'nice',
    name: 'Nice',
    country: 'France',
    coordinates: [43.7102, 7.262],
    type: 'visited',
    description: 'Beautiful French Riviera city',
  },
];

const About: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<TravelLocation | null>(null);

  const handleLocationClick = (location: TravelLocation) => {
    setSelectedLocation(location);
  };

  const getMarkerColor = (type: string) => {
    switch (type) {
      case 'current':
        return '#10B981'; // green-500
      case 'lived':
        return '#3B82F6'; // blue-500
      case 'visited':
        return '#F59E0B'; // yellow-500
      default:
        return '#6B7280'; // gray-500
    }
  };

  const getMarkerSize = (type: string) => {
    switch (type) {
      case 'current':
        return 20;
      case 'lived':
        return 16;
      case 'visited':
        return 12;
      default:
        return 12;
    }
  };

  // Convert lat/lng to SVG coordinates (simplified projection)
  const latLngToSVG = (lat: number, lng: number) => {
    const x = ((lng + 180) / 360) * 1000;
    const y = ((90 - lat) / 180) * 500;
    return { x, y };
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 lg:mb-10 text-blue-600 dark:text-blue-400 text-center">
        About Me
      </h2>
      <p className="text-base sm:text-lg text-center text-gray-700 dark:text-gray-300 mb-6 sm:mb-8">
        My journey around the world - places I've lived, studied, and visited.
      </p>

      {/* Interactive World Map */}
      <div className="relative bg-white dark:bg-[#232336] rounded-xl shadow-lg p-4 sm:p-6 w-full max-w-2xl mx-auto">
        <div className="text-center mb-3 sm:mb-4">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
            My World Map
          </h3>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-2 sm:mb-3">
            Click on the markers to learn more about each location
          </p>

          {/* Legend */}
          <div className="flex justify-center space-x-3 sm:space-x-6 text-xs sm:text-sm mb-3 sm:mb-4">
            <div className="flex items-center">
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full mr-1 sm:mr-2 animate-pulse"></div>
              <span className="text-gray-600 dark:text-gray-400">Current</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-blue-500 rounded-full mr-1 sm:mr-2"></div>
              <span className="text-gray-600 dark:text-gray-400">Lived</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full mr-1 sm:mr-2"></div>
              <span className="text-gray-600 dark:text-gray-400">Visited</span>
            </div>
          </div>
        </div>

        {/* Simple World Map with SVG */}
        <div className="relative w-full max-w-lg mx-auto h-64 sm:h-80 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
          <svg
            viewBox="0 0 1000 500"
            className="w-full h-full"
            style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
          >
            {/* Simple world map outline */}
            <path
              d="M 100 200 Q 150 180 200 200 Q 250 220 300 200 Q 350 180 400 200 Q 450 220 500 200 Q 550 180 600 200 Q 650 220 700 200 Q 750 180 800 200 Q 850 220 900 200"
              fill="none"
              stroke="#4a5568"
              strokeWidth="2"
              opacity="0.3"
            />
            
            {/* Location Markers */}
            {travelLocations.map((location) => {
              const { x, y } = latLngToSVG(location.coordinates[0], location.coordinates[1]);
              const size = getMarkerSize(location.type);
              const color = getMarkerColor(location.type);
              
              return (
                <g key={location.id}>
                  <circle
                    cx={x}
                    cy={y}
                    r={size / 2}
                    fill={color}
                    stroke="white"
                    strokeWidth="2"
                    className="cursor-pointer hover:scale-110 transition-transform duration-200"
                    onClick={() => handleLocationClick(location)}
                  />
                  <circle
                    cx={x}
                    cy={y}
                    r={size / 4}
                    fill="white"
                    className="cursor-pointer"
                    onClick={() => handleLocationClick(location)}
                  />
                </g>
              );
            })}
          </svg>

          {/* Location Info Popup */}
          {selectedLocation && (
            <div className="absolute top-2 left-2 right-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 border border-gray-200 dark:border-gray-600">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-sm">
                    {selectedLocation.name}
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium text-xs">
                    {selectedLocation.country}
                  </p>
                  {selectedLocation.description && (
                    <p className="text-gray-700 dark:text-gray-300 text-xs mt-1">
                      {selectedLocation.description}
                    </p>
                  )}
                </div>
                <button
                  onClick={() => setSelectedLocation(null)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
