import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import MapStyle from "./MapStyle";
import { GiPositionMarker } from "react-icons/gi";
import "./Map.css";
import ProperitiesMap from "./allshopesmap/ProperitiesMap";

export default function MapRealEstate() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyB4BKEFBO4lumLbnegBTnDPJZvaaMIFFXg",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const center = useMemo(() => ({ lat: 47.359423, lng: -122.021071 }), []);
  let stores = [
    { latitude: 47.359423, longitude: -122.021071 },
    { latitude: 47.2052192687988, longitude: -121.988426208496 },
    { latitude: 47.6307081, longitude: -122.1434325 },
    { latitude: 47.3084488, longitude: -122.2140121 },
    { latitude: 47.5524695, longitude: -122.0425407 },
  ];
  //
  const displayMarkers = () => {
    // console.log("hello");
    return stores.map((store, index) => {
      // console.log(store.latitude);
      // console.log(store.longitude);
      return (
        <Marker
          key={index}
          id={index}
          icon={<GiPositionMarker />}
          position={{
            lat: store.latitude,
            lng: store.longitude,
          }}
          // onClick={() => console.log("You clicked me!")}
        />
      );
    });
  };

  return (
    <div className="maprealestate">
      <div className="row">
        <div className="col-4">
          <ProperitiesMap />
        </div>
        <div className="col-8 p-4">
          <GoogleMap
            zoom={10}
            center={center}
            options={{ styles: MapStyle.dark }}
            mapContainerClassName="map-container"
          >
            {displayMarkers()}
          </GoogleMap>
        </div>
      </div>
    </div>
  );
}
