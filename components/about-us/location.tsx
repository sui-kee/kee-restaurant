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
    <div className=" flex flex-col gap-3">
      <div className=" flex gap-2 items-center justify-start uppercase text-sm sm:text-3xl font-bold">
        <h1>we are always on the same ground</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
          />
        </svg>
      </div>
      <Map userLocation={userLocation} />
    </div>
  );
};

export default Location;
