import "./Dashboard.scss"
import SideBar from "../../Components/sidebar/SideBar.jsx"
import Navbar from "../../Components/Navbar/Navbar.jsx"
import WelcomeWidget from "../../Components/widget/Welcomewidget.jsx"
import BarGraph from "../../Components/graphs/Bargraphs.jsx"
import DonutChart from '../../Components/graphs/DonutChart.jsx'; // Path to your DonutChart component
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Polyline, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './Dashboard.scss';


// Sample markers data
const markers = [
  {
    geocode: [-3, 114.121014],
    icon: new L.Icon({
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
    }),
    popUp: 'Marker 1',
  },
  // Add more markers as needed
  {
    geocode: [-4.824280, 121.763249],
    icon: new L.Icon({
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
    }),
    popUp: 'Marker 2',
  },

  {
    geocode: [-8.272657, 123.223220],
    icon: new L.Icon({
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
    }),
    popUp: 'Marker 3',
  },

  {
  geocode: [-2.345678, 120.987654],
  icon: new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  }),
  popUp: 'Marker 4',
},
{
  geocode: [-8, 140.345678],
  icon: new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  }),
  popUp: 'Marker 5',
}

];

function Dashboard() {
  return (
    <div className="home">
        <SideBar/>
        <div className="homeContainer">
            <Navbar/>
            <div className="welcomewidget">
              <WelcomeWidget/>
            </div>
            <div className="centra">Centra</div>
            <div className="map-container">
            <MapContainer center={[-5.565210, 123.121014]} zoom={5.2} zoomControl={false} style={{ height: '210px', width: '1230px' }}>
              <TileLayer
                attribution="JawgLab"
                url="https://tile.jawg.io/e5d8beb2-b5e0-4ac4-bb0b-9b553e2f5acb/{z}/{x}/{y}{r}.png?access-token=DfaT20L6p2ckAELwn9yTxvLM6O6PAYil1yP7DbDPLdiZqXc8G1hhkai4HtTJCTLv"
              />
              {markers.map((marker, index) => (
                <Marker key={index} position={marker.geocode} icon={marker.icon}>
                  <Popup>{marker.popUp}</Popup>
                </Marker>
              ))}
            </MapContainer>
              <div id="map">
                {/* Google Maps component goes here */}
              </div>
            </div>
            <div className="charts-container">
              <div className="bar-graph-container">
                <BarGraph/>
              </div>
              <div className="donut-chart-container">
                <DonutChart percentage={50} />
                <DonutChart percentage={75} />
              </div>
              <div className="donut-chart-container1">
                <DonutChart percentage={90} />
                <DonutChart percentage={43} />
              </div>
            </div>
            <div className="charts">
            </div>
        </div>
    </div>
  )
}

export default Dashboard
