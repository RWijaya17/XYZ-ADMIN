import "./Dashboard.scss";
import SideBar from "../../Components/sidebar/SideBar.jsx";
// import Header from "../../Components/sidebar/Header.jsx"
import Navbar from "../../Components/Navbar/Navbar.jsx";
import Widget from "../../Components/Widget/Widget.jsx";


function Dashboard() {
  return (
    <div className="home">
      <SideBar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <div className="welcome-box">
            <div className="date">  Saturday 23 March 2024</div>
            <div className="welcome-message"> Welcome, Sir John Doe!</div>
            <div className="notification">
                There are 2 new delivered shipments that must be reviewed. Please go to the Shipment section so you may handle them.
            </div>
          </div>
          <div className="centra">Centra</div>
          <div className="map-container">
            {/* Google Maps component goes here */}
            <div id="map"></div>
        </div>
      </div>
    </div>
  </div>

)
}

export default Dashboard;
