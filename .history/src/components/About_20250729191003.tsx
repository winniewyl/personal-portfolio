'use client';

import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default markers in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

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
      case 'current': return '#10B981'; // green-500
      case 'lived': return '#3B82F6'; // blue-500
      case 'visited': return '#F59E0B'; // yellow-500
      default: return '#6B7280'; // gray-500
    }
  };

  const getMarkerSize = (type: string) => {
    switch (type) {
      case 'current': return 20;
      case 'lived': return 16;
      case 'visited': return 12;
      default: return 12;
    }
  };

  // Create custom markers
  const createCustomIcon = (type: string) => {
    const color = getMarkerColor(type);
    const size = getMarkerSize(type);
    
    return L.divIcon({
      html: `
        <div style="
          width: ${size}px; 
          height: ${size}px; 
          background-color: ${color}; 
          border: 2px solid white; 
          border-radius: 50%; 
          box-shadow: 0 2px 4px rgba(0,0,0,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          ${type === 'current' ? 'animation: pulse 2s infinite;' : ''}
        ">
          <div style="
            width: ${size * 0.25}px; 
            height: ${size * 0.25}px; 
            background-color: white; 
            border-radius: 50%;
          "></div>
        </div>
      `,
      className: 'custom-marker',
      iconSize: [size, size],
      iconAnchor: [size / 2, size / 2],
    });
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
        {/* Interactive World Map */}
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
          
          {/* Leaflet Map Container */}
          <div className="w-full h-96 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
            <MapContainer
              center={[20, 0]}
              zoom={2}
              style={{ height: '100%', width: '100%' }}
              className="z-0"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              
              {/* Location Markers */}
              {travelLocations.map((location) => (
                <Marker
                  key={location.id}
                  position={location.coordinates}
                  icon={createCustomIcon(location.type)}
                  eventHandlers={{
                    click: () => handleLocationClick(location),
                  }}
                >
                  <Popup>
                    <div className="text-center">
                      <h4 className="font-bold text-gray-900 mb-1">
                        {location.name}
                      </h4>
                      <p className="text-blue-600 font-medium text-sm mb-1">
                        {location.country}
                      </p>
                      {location.description && (
                        <p className="text-gray-700 text-sm">
                          {location.description}
                        </p>
                      )}
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
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
                <div className={`w-3 h-3 rounded-full mr-3 ${
                  location.type === 'current' ? 'bg-green-500 animate-pulse' : 
                  location.type === 'lived' ? 'bg-blue-500' : 'bg-yellow-500'
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
