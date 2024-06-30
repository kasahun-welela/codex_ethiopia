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
    <div style={{ position: 'relative' }}>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: '600px', width: '100%' }}>
        <TileLayer
          attribution=""
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={customIcon}>
          <Popup>
            Our Office . <br /> Located Here.
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
