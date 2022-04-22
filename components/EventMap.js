import Image from "next/image"
import {useState, useEffect} from 'react'
import ReactMapGl, { Marker } from "react-map-gl";
import Map from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Geocode from "react-geocode";



export default function EventMap({ evt }) {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [loading, setLoading] = useState(true);
  const [viewState, setViewState] = useState({
    latitude: 40.712772,
    longitude: -73.935242,
    width: "100",
    height: "500",
 

    zoom: 12,
  });
 
    useEffect(() => {
      // Get latitude & longitude from address.
      Geocode.fromAddress(evt.address).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;
          setLat(lat);
          setLng(lng);
          setViewState({ ...viewState, latitude: lat, longitude: lng });
          setLoading(false);
        },
        (error) => {
          console.error(error);
        }
      );
    }, []);

  Geocode.setApiKey(process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY);

   if (loading) return false;

   console.log(lat, lng)
   return (
     <Map
       {...viewState}
       onMove={(evt) => setViewState(evt.viewState)}
       mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
       style={{
         overflow: "visible",
         height: "500px",
         width: "100%",
       }}
       mapStyle="mapbox://styles/mapbox/streets-v9"
     >
       <Marker key={evt.id} latitude={lat} longitude={lng}>
         <Image src="/images/pin.svg" width={30} height={30} />
       </Marker>
     </Map>
   );
}


