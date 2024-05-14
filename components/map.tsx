import React from "react";
import {
  GoogleMap,
  LoadScript,
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

const Map = ({ userLocation }: any) => {
  const [directions, setDirections] = React.useState<any>(null);

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

  React.useEffect(() => {
    if (userLocation) {
      fetchDirections();
    }
  }, [userLocation]);

  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
        <Marker position={center} />
        {directions && <DirectionsRenderer directions={directions} />}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
