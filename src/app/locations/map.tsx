"use client";

import { FC, useEffect, useState } from "react";
import { APIProvider, Map, Marker, useMap } from "@vis.gl/react-google-maps";

import { ILocation, mapDefaultCenter, mapDefaultZoom } from "./data";
import { StyledMap } from "./styled";

const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "";

interface IRecenterProps {
  location: ILocation | null;
}

const Recenter: FC<IRecenterProps> = ({ location }) => {
  const map = useMap();

  useEffect(() => {
    if (!map || !location) {
      return;
    }

    map.panTo({ lat: location.lat, lng: location.lng });
    map.setZoom(8);
  }, [map, location]);

  return null;
};

export interface ILocationsMapProps {
  selectedId: string | null;
  onSelect: (id: string) => void;
  locations: ILocation[];
}

export const LocationsMap: FC<ILocationsMapProps> = ({ selectedId, onSelect, locations }) => {
  const selected = locations.find(location => location.id === selectedId) ?? null;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!GOOGLE_MAPS_API_KEY || !mounted) {
    return <StyledMap />;
  }

  return (
    <StyledMap>
      <APIProvider apiKey={GOOGLE_MAPS_API_KEY}>
        <Map
          defaultCenter={mapDefaultCenter}
          defaultZoom={mapDefaultZoom}
          gestureHandling="greedy"
          disableDefaultUI={false}
          style={{ width: "100%", height: "100%" }}
        >
          <Recenter location={selected} />
          {locations.map(location => (
            <Marker
              key={location.id}
              position={{ lat: location.lat, lng: location.lng }}
              title={`${location.name}, ${location.country}`}
              onClick={() => onSelect(location.id)}
            />
          ))}
        </Map>
      </APIProvider>
    </StyledMap>
  );
};
