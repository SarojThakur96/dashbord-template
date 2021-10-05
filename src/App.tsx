import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashbord from "./pages/Dashbord/Dashbord";
import Map from "./pages/Map/Map";

function App() {
  return (
    // <div
    // //  style={{
    // //    display:'inline',

    // //  }}
    // >
    <>
      <Header />
     <div
      style={{
        display:'flex',
      }}
     >
      <Router>
      <Sidebar />
        <Switch>
          <Route path="/map">
            <Map />
          </Route>
          {/* <Route path="/dashboard">
             <Dashbord />
           </Route> */}
           <Route exact path="/">
            <Dashbord />
          </Route>
        </Switch>
      </Router>

      </div>
      
    </>

    // </div>
  );
}

export default App;
