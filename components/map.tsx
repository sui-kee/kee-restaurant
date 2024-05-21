"use client";
import React, { useState, useEffect } from "react";
require("dotenv").config();
import {
  useLoadScript,
  GoogleMap,
  Marker,
  DirectionsRenderer,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 3.011342,
  lng: 101.4161319,
};

interface MapProps {
  userLocation: google.maps.LatLngLiteral | null;
}

const Map: React.FC<MapProps> = ({ userLocation }) => {
  const [directions, setDirections] =
    useState<google.maps.DirectionsResult | null>(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "22222222222222" || "",
  });
  //console.log("map api key:", process.env.GOOGLE_API_KEY);

  const fetchDirections = () => {
    if (userLocation) {
      const service = new google.maps.DirectionsService();
      service.route(
        {
          origin: userLocation,
          destination: center,
          travelMode: google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            setDirections(result);
          } else {
            console.error(`error fetching directions ${result}`);
          }
        }
      );
    }
  };

  useEffect(() => {
    if (isLoaded && userLocation) {
      fetchDirections();
    }
  }, [isLoaded, userLocation]);

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading Maps</div>;
  }

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
      <Marker position={center} />
      {directions && <DirectionsRenderer directions={directions} />}
    </GoogleMap>
  );
};

export default Map;
