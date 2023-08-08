import React, { useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  useMap,
  CircleMarker,
  Marker,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export default function MapComponent({ longitude, latitude, zoom }) {
  function FlyMapTo({ center, zoom }) {
    const map = useMap();

    useEffect(() => {
      map.flyTo(center, zoom);
    });

    return null;
  }
  let myIcon = L.icon({
    iconUrl:
      'data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="24" height="24" viewBox="0 0 24 24"%3E%3Cg fill="%2367e8f9"   stroke-linecap="round"  stroke-linejoin="round" stroke-width="3"%3E%3Cpath d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"%2F%3E%3Ccircle cx="12" cy="10" r="3" fill="white" %2F%3E%3C%2Fg%3E%3C%2Fsvg%3E',
    iconAnchor: [10, 18],
  });

  return longitude && latitude ? (
    <MapContainer
      center={[latitude, longitude]}
      zoom={zoom}
      style={{ width: "100%", height: "100%" }}
      attributionControl={false}
      zoomControl={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      <CircleMarker
        center={[latitude, longitude]}
        pathOptions={{ color: "#67e8f9" }}
        radius={80}
      ></CircleMarker>
      <Marker position={[latitude, longitude]} icon={myIcon} />

      <FlyMapTo center={[latitude, longitude]} zoom={zoom} />
    </MapContainer>
  ) : null;
}
