import Image from "next/image"
import {useState, useEffect} from 'react'
import ReactMapGl, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";




export default function EventMap({ evt }) {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [loading, setLoading] = useState(true);
  const [viewport, setViewport] = useState({
    latitude: 40.712772,
    longitude: -73.935242,
    width: "100%",
    height: "300px",
    mapStyle: "mapbox://styles/mapbox/streets-v11",

    zoom: 9,
  });
 
   useEffect(() => {
     const requestOptions = {
       method: "GET",
     };
     fetch(
       `https://api.geoapify.com/v1/geocode/search?text=${evt.address}&apiKey=${process.env.NEXT_PUBLIC_GEOAPIFY_API_KEY}`,
       requestOptions
     )
       .then((response) => response.json())
       .then((result) => {
         const lng = result.features[0].bbox[0];
         const lat = result.features[0].bbox[1];
         setLat(lat);
         setLng(lng);
         setViewport({ ...viewport, latitude: lat, longitude: lng });
         setLoading(false);
       })
       .catch((error) => console.log("error", error));
       console.log(lat, lng);
   }, []);

   if (loading) return false;

   console.log(lat, lng)
   return (
     <ReactMapGl
       {...viewport}
       mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
       onViewportChange={(vp) => setViewport(vp)}
       style={{overflow:"visible", height:"500px", width:"100%",}}
     >
       <Marker key={evt.id} latitude={lat} longitude={lng}>
         <Image src="/images/pin.svg" width={30} height={30} />
       </Marker>
     </ReactMapGl>
   );
}


