'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import Leaflet components with SSR disabled
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
);

const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
);

const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
);

const Popup = dynamic(() => import('react-leaflet').then((mod) => mod.Popup), {
  ssr: false,
});

// Dynamically import Leaflet CSS and L
let L: any = null;
let leafletCSSLoaded = false;

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
  const [selectedLocation, setSelectedLocation] =
    useState<TravelLocation | null>(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  useEffect(() => {
    // Load Leaflet L on client side
    if (!L) {
      import('leaflet').then((leaflet) => {
        L = leaflet.default;

        // Fix for default markers in react-leaflet
        delete (L.Icon.Default.prototype as any)._getIconUrl;
        L.Icon.Default.mergeOptions({
          iconRetinaUrl:
            'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
          iconUrl:
            'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
          shadowUrl:
            'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        });

        setIsMapLoaded(true);
      });
    } else {
      setIsMapLoaded(true);
    }
  }, []);

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
    <div className="w-full">

      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 lg:mb-10 text-blue-600 dark:text-blue-400 text-center">
        About Me
      </h2>
      <p className="text-base sm:text-lg text-center text-gray-700 dark:text-gray-300 mb-6 sm:mb-8">
        My journey around the world - places I've lived, studied, and visited.
      </p>

      {/* Interactive World Map */}
      <div className="relative bg-white dark:bg-[#232336] rounded-xl shadow-lg p-4 sm:p-6 w-full max-w-4xl mx-auto">
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

        {/* Leaflet Map Container */}
        <div
          className="mx-auto h-48 sm:h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700"
          style={{ width: '500px', maxWidth: '500px' }}
        >
          {isMapLoaded && L ? (
            <MapContainer
              center={[20, 0]}
              zoom={2}
              style={{ height: '100%', width: '500px' }}
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
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800">
              <div className="text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
                <p className="text-gray-600 dark:text-gray-400">
                  Loading map...
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
