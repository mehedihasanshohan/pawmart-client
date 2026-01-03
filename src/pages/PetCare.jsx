// import React, { useRef } from "react";
// import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import { useLoaderData } from "react-router";
// import L from "leaflet";

// const PetCare = () => {
//   const position = [23.685, 90.3563];
//   const serviceCenters = useLoaderData();
//   const mapRef = useRef(null);

//   const handleSearch = (e) => {
//     e.preventDefault();
//     const location = e.target.location.value.toLowerCase();

//     const district = serviceCenters.find((c) =>
//       c.district.toLowerCase().includes(location));
//       if (district) {
//       const coord = [district.latitude, district.longitude];
//      //go to the location
//       mapRef.current.flyTo(coord, 14);
//     }
//   };

//   return (
//     <>
//       <div className="max-w-7xl mx-auto p-8 mt-4">
//         <div className="flex justify-center items-center">
//           <form onSubmit={handleSearch}>
//           <label className="input">
//             <svg
//               className="h-[1em] opacity-50"
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//             >
//               <g
//                 strokeLinejoin="round"
//                 strokeLinecap="round"
//                 strokeWidth="2.5"
//                 fill="none"
//                 stroke="currentColor"
//               >
//                 <circle cx="11" cy="11" r="8"></circle>
//                 <path d="m21 21-4.3-4.3"></path>
//               </g>
//             </svg>
//             <input type="search" name="location" required placeholder="Search" />
//           </label>
//         </form>
//         </div>
//       </div>
//       <div className="border w-full h-[600px]">
//         <MapContainer
//           center={position}
//           zoom={8}
//           scrollWheelZoom={false}
//           className="h-[600px]"
//           ref={mapRef}
//         >
//           <TileLayer
//             attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           />

//           {serviceCenters.map((center, index) => (
//             <Marker
//             key={index}
//             position={[center.latitude, center.longitude]}

//             >
//               <Popup>
//                 <strong>{center.district}</strong> <br />
//                 Service area: {center.covered_area.join(",")}
//               </Popup>
//             </Marker>
//           ))}
//         </MapContainer>
//       </div>
//     </>
//   );
// };

// export default PetCare;




import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";
import L from "leaflet";

import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const customIcon = new L.Icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const PetCare = () => {
  const position = [23.685, 90.3563];
  const serviceCenters = useLoaderData() || [];
  const mapRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const location = e.target.location.value.toLowerCase().trim();

    const district = serviceCenters.find((c) =>
      c.district.toLowerCase() === location || c.district.toLowerCase().includes(location)
    );

    if (district) {
      const coord = [district.latitude, district.longitude];
      if (mapRef.current) {
        mapRef.current.flyTo(coord, 14, {
          duration: 1.5
        });

        setTimeout(() => {
            mapRef.current.eachLayer((layer) => {
                if (layer instanceof L.Marker && layer.getLatLng().lat === district.latitude) {
                    layer.openPopup();
                }
            });
        }, 1600);
      }
    } else {
      alert("District not found in our records!");
    }
  };

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto p-8 mt-4">
        <div className="flex justify-center items-center">
          <form onSubmit={handleSearch}>
            <div className="flex items-center gap-2 border-2 border-primary
             p-2 rounded-lg shadow-lg bg-white">
              <svg className="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
              <input
                type="search"
                name="location"
                required
                placeholder="Search district (e.g. Dhaka)"
                className="outline-none w-64 text-black"
              />
              <button type="submit" className="btn btn-primary btn-sm">Locate</button>
            </div>
          </form>
        </div>
      </div>

      <div className="w-full h-[600px] mt-6 shadow-inner relative z-0">
        <MapContainer
          center={position}
          zoom={7}
          scrollWheelZoom={true}
          className="h-full w-full"
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {serviceCenters.map((center, index) => (
            <Marker
              key={index}
              position={[center.latitude, center.longitude]}
              icon={customIcon}
            >
              <Popup>
                <div className="p-1">
                  <h3 className="font-bold text-lg text-primary">{center.district} Care Center</h3>
                  <p className="text-sm"><b>Region:</b> {center.region}</p>
                  <p className="text-xs mt-1"><b>Areas Covered:</b> {center.covered_area.join(", ")}</p>
                  <div className={`badge mt-2 ${center.status === 'active' ? 'badge-success' : 'badge-error'} text-white`}>
                    {center.status}
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default PetCare;