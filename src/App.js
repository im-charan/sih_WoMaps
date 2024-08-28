import './style.css';
import 'leaflet/dist/leaflet.css'

import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import {divIcon, Icon} from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster'
import L from 'leaflet'

import Tracking from './pages/tracking'
import Report from './pages/report'
import SoS from './pages/sos'
import Situations from './pages/situations'
import Settings from './pages/settings'

function App() {
  const markers = [
    {
      geocode : [13.14, 80.13],
      popup : 'Hehehe testing 1'
    },
    {
      geocode : [13.052, 80.213],
      popup : 'Hehehe testing 2'
    }
  ];

  const customIcon = new Icon({
    iconUrl: require('./img/marker-black.png'),
    iconSize: [30,30]
  });

  const createCustomClustericon = (cluster) => {
     return new divIcon({
      html: `<div class='cluster-icon'>${cluster.getChildCount()}</div>`,
      className: 'custom-marker-cluster',
      iconSize: new L.point(30, 30, true)
     });
  }
  
  return (
    <div>
    {/* <Router>
            <Navbar />
            <Routes>
                <Route path="/tracking" element={<Tracking />} />
                <Route
                    path="/situations"
                    element={<Situations/>}
                />
                <Route
                    path="/report"
                    element={<Report />}
                />
                <Route path="/sos" element={<SoS />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </Router> */}

    <MapContainer center = {[13.08, 80.27]} zoom={10} scrollWheelZoom={true}>
      
      <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />

      
      <MarkerClusterGroup
      chunkedLoading
      iconCreateFunction={createCustomClustericon}
      >
        {markers.map((marker) => (
          <Marker position={marker.geocode} icon={customIcon}>
            <Popup>
              {marker.popup}
            </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>

    </MapContainer>
    </div>
  );
}

export default App;
