"use client";
import React, { useEffect, useState } from "react";

// Utility function to check if the current time is between 6:00 AM and 1:30 PM
const isOpen = (): boolean => {
  const now = new Date();
  const currentHours = now.getHours();
  const currentMinutes = now.getMinutes();
  const openingTime = { hours: 6, minutes: 0 };
  const closingTime = { hours: 13, minutes: 30 };

  if (
    (currentHours > openingTime.hours ||
      (currentHours === openingTime.hours &&
        currentMinutes >= openingTime.minutes)) &&
    (currentHours < closingTime.hours ||
      (currentHours === closingTime.hours &&
        currentMinutes <= closingTime.minutes))
  ) {
    return true;
  }
  return false;
};

const OpenOrClosed: React.FC = () => {
  const [open, setOpen] = useState<boolean>(isOpen());

  useEffect(() => {
    const interval = setInterval(() => {
      setOpen(isOpen());
    }, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {open ? (
        <div className=" p-3 rounded-3xl text-white bg-green-500">Open</div>
      ) : (
        <div className=" p-3 rounded-3xl text-white bg-red-500">Closed</div>
      )}
    </div>
  );
};

export default OpenOrClosed;
