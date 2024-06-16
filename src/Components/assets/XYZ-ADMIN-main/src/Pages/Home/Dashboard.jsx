import "./Dashboard.scss"
import SideBar from "../../Components/sidebar/SideBar.jsx"
import Navbar from "../../Components/Navbar/Navbar.jsx"
import WelcomeWidget from "../../Components/widget/Welcomewidget.jsx"
import BarGraph from "../../Components/graphs/Bargraphs.jsx"
import DonutChart from "../../Components/graphs/Donutchart.jsx" // Make sure the path is correct

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
