import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { renderToStaticMarkup } from 'react-dom/server';

// Convert the FaMapMarkerAlt icon to static markup
const iconMarkup = renderToStaticMarkup(<FaMapMarkerAlt style={{ color: 'red', fontSize: '24px' }} />);
const customIcon = L.divIcon({
  html: iconMarkup,
  className: '', // Remove any default classes to avoid conflicts
  iconSize: [24, 24],
  iconAnchor: [12, 24], // Point to the center bottom of the icon
  popupAnchor: [0, -24], // Adjust the popup position
});

const position: [number, number] = [9.014135, 38.753145]; // Updated coordinates

const MapComponent = () => {
  return (
    <div className="relative w-full h-64 sm:h-96 md:h-128 lg:h-[600px]">
      <MapContainer center={position} zoom={13} scrollWheelZoom={false} className="w-full h-full">
        <TileLayer
          attribution=""
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={customIcon}>
          <Popup>
           Our office  <br />located here.
          </Popup>
        </Marker>
      </MapContainer>
      <style>
        {`
          .leaflet-control-attribution {
            display: none;
          }
        `}
      </style>
    </div>
  );
};

export default MapComponent;
