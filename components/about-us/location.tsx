"use client";
import React, { useState, useEffect } from "react";
import Map from "../map";

const Location = () => {
  const [userLocation, setUserLocation] = useState<any>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error obtaining user location", error);
        }
      );
    }
  }, []);

  return (
    <div>
      <h1>Welcome to Our Restaurant</h1>
      <p>Find us at:</p>
      <Map userLocation={userLocation} />
    </div>
  );
};

export default Location;
