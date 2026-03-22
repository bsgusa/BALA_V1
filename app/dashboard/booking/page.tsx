import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const BookingPage = () => {
    const mapContainerStyle = {
        height: "400px",
        width: "800px"
    };

    const center = {
        lat: -3.745,
        lng: -38.523
    };

    return (
        <div>
            <h1>Ride/Trip Booking Interface</h1>
            <LoadScript googleMapsApiKey="YOUR_API_KEY">
                <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    center={center}
                    zoom={10}>
                    <Marker position={center} />
                </GoogleMap>
            </LoadScript>
        </div>
    );
};

export default BookingPage;
