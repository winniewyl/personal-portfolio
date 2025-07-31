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
    coordinates: [28.6820, 115.8579],
    type: 'lived',
    description: 'My hometown where I grew up'
  },
  {
    id: 'boston',
    name: 'Boston',
    country: 'USA',
    coordinates: [42.3601, -71.0589],
    type: 'lived',
    description: 'Studied at Tufts University'
  },
  {
    id: 'west-lafayette',
    name: 'West Lafayette',
    country: 'USA',
    coordinates: [40.4237, -86.9212],
    type: 'current',
    description: 'Currently studying at Purdue University'
  }
  // Add more locations as needed
];

const About: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<TravelLocation | null>(null);

  const handleLocationClick = (location: TravelLocation) => {
    setSelectedLocation(location);
  };

  const getMarkerColor = (type: string) => {
    switch (type) {
      case 'current': return 'bg-green-500';
      case 'lived': return 'bg-blue-500';
      case 'visited': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const getMarkerSize = (type: string) => {
    switch (type) {
      case 'current': return 'w-5 h-5';
      case 'lived': return 'w-4 h-4';
      case 'visited': return 'w-3 h-3';
      default: return 'w-3 h-3';
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
                <span className="text-gray-600 dark:text-gray-400">Current</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
                <span className="text-gray-600 dark:text-gray-400">Lived</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                <span className="text-gray-600 dark:text-gray-400">Visited</span>
              </div>
            </div>
          </div>
          
          {/* World Map Container */}
          <div className="relative w-full h-96 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
            {/* Realistic World Map Background */}
            <div className="absolute inset-0">
              <svg viewBox="0 0 1000 500" className="w-full h-full">
                {/* North America */}
                <path d="M120,120 Q150,80 180,120 T240,120 L240,200 Q210,240 180,200 T120,200 Z" 
                      fill="#4B5563" opacity="0.15"/>
                <path d="M140,180 Q170,140 200,180 T260,180 L260,220 Q230,260 200,220 T140,220 Z" 
                      fill="#4B5563" opacity="0.15"/>
                <path d="M160,200 Q190,160 220,200 T280,200 L280,240 Q250,280 220,240 T160,240 Z" 
                      fill="#4B5563" opacity="0.15"/>
                
                {/* South America */}
                <path d="M200,220 Q230,180 260,220 T320,220 L320,380 Q290,420 260,380 T200,380 Z" 
                      fill="#4B5563" opacity="0.15"/>
                <path d="M220,240 Q250,200 280,240 T340,240 L340,360 Q310,400 280,360 T220,360 Z" 
                      fill="#4B5563" opacity="0.15"/>
                
                {/* Europe */}
                <path d="M480,80 Q510,40 540,80 T600,80 L600,160 Q570,200 540,160 T480,160 Z" 
                      fill="#4B5563" opacity="0.15"/>
                <path d="M500,100 Q530,60 560,100 T620,100 L620,140 Q590,180 560,140 T500,140 Z" 
                      fill="#4B5563" opacity="0.15"/>
                <path d="M520,120 Q550,80 580,120 T640,120 L640,160 Q610,200 580,160 T520,160 Z" 
                      fill="#4B5563" opacity="0.15"/>
                
                {/* Africa */}
                <path d="M480,160 Q510,120 540,160 T600,160 L600,320 Q570,360 540,320 T480,320 Z" 
                      fill="#4B5563" opacity="0.15"/>
                <path d="M500,180 Q530,140 560,180 T620,180 L620,300 Q590,340 560,300 T500,300 Z" 
                      fill="#4B5563" opacity="0.15"/>
                <path d="M520,200 Q550,160 580,200 T640,200 L640,280 Q610,320 580,280 T520,280 Z" 
                      fill="#4B5563" opacity="0.15"/>
                
                {/* Asia */}
                <path d="M640,80 Q670,40 700,80 T760,80 L760,240 Q730,280 700,240 T640,240 Z" 
                      fill="#4B5563" opacity="0.15"/>
                <path d="M660,100 Q690,60 720,100 T780,100 L780,220 Q750,260 720,220 T660,220 Z" 
                      fill="#4B5563" opacity="0.15"/>
                <path d="M680,120 Q710,80 740,120 T800,120 L800,200 Q770,240 740,200 T680,200 Z" 
                      fill="#4B5563" opacity="0.15"/>
                <path d="M700,140 Q730,100 760,140 T820,140 L820,180 Q790,220 760,180 T700,180 Z" 
                      fill="#4B5563" opacity="0.15"/>
                
                {/* Australia */}
                <path d="M780,320 Q810,280 840,320 T900,320 L900,380 Q870,420 840,380 T780,380 Z" 
                      fill="#4B5563" opacity="0.15"/>
                <path d="M800,340 Q830,300 860,340 T920,340 L920,360 Q890,400 860,360 T800,360 Z" 
                      fill="#4B5563" opacity="0.15"/>
                
                {/* Greenland */}
                <path d="M200,60 Q230,20 260,60 T320,60 L320,100 Q290,140 260,100 T200,100 Z" 
                      fill="#4B5563" opacity="0.15"/>
                
                {/* Japan */}
                <path d="M820,140 Q850,100 880,140 T940,140 L940,160 Q910,200 880,160 T820,160 Z" 
                      fill="#4B5563" opacity="0.15"/>
                
                {/* UK */}
                <path d="M460,100 Q490,60 520,100 T580,100 L580,120 Q550,160 520,120 T460,120 Z" 
                      fill="#4B5563" opacity="0.15"/>
                
                {/* Madagascar */}
                <path d="M520,280 Q550,240 580,280 T640,280 L640,300 Q610,340 580,300 T520,300 Z" 
                      fill="#4B5563" opacity="0.15"/>
                
                {/* New Zealand */}
                <path d="M820,380 Q850,340 880,380 T940,380 L940,400 Q910,440 880,400 T820,400 Z" 
                      fill="#4B5563" opacity="0.15"/>
                
                {/* Iceland */}
                <path d="M440,80 Q470,40 500,80 T560,80 L560,100 Q530,140 500,100 T440,100 Z" 
                      fill="#4B5563" opacity="0.15"/>
              </svg>
            </div>
            
            {/* Location Markers */}
            {travelLocations.map((location) => (
              <div
                key={location.id}
                className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-125"
                style={{
                  left: `${(location.coordinates[1] + 180) / 360 * 100}%`,
                  top: `${(90 - location.coordinates[0]) / 180 * 100}%`,
                }}
                onClick={() => handleLocationClick(location)}
              >
                {/* Marker */}
                <div className={`${getMarkerSize(location.type)} ${getMarkerColor(location.type)} rounded-full border-2 border-white shadow-lg ${
                  location.type === 'current' ? 'animate-pulse' : ''
                }`}>
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
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
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
                <div className={`${getMarkerSize(location.type)} ${getMarkerColor(location.type)} rounded-full mr-3 ${
                  location.type === 'current' ? 'animate-pulse' : ''
                }`}></div>
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
