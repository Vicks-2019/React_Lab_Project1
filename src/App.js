import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { TopBar } from "./components/TopBar";
import { Navbar } from "./components/Navbar";

// import {default as Footer} from './components/Footer/Footer';
// import { FooterBottom } from "./components/FooterBottom";
import { Contact } from "./components/Contact";
import { About } from "./components/About";
import { Home } from "./components/Home";
import { WellPackages } from "./components/WellPackages";
import { PackageDetails } from "./components/PackageDetails";
import { PackageTemplate } from "./components/PackageTemplate";
import { FAQs } from "./components/FAQs";
import { Footer } from "./components/Footer";
import mock from "./mock.json";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        <TopBar />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />

          <Route exact path="/about" render={() => <About {...mock.About} />} />
          <Route
            path="/healthpackages"
            render={() => <WellPackages {...mock.WellPackages} />}
          />
          <Route
            path="/healthpackages/:id"
            render={() => <WellPackages {...mock.WellPackages} />}
          />
          <Route
            path="/packagedetails/:id"
            render={(props) => (
              <PackageDetails packages={mock.PackageDetails} {...props} />
            )}
          />
          <Route
            path="/packagetemplate/:id"
            render={(props) => (
              <PackageTemplate packages={mock.PackageTemplate} {...props} />
            )}
          />
          <Route
            path="/contact"
            exact
            render={() => <Contact {...mock.Contact} />}
          />
          <Route path="/faqs" exact render={() => <FAQs {...mock.FAQs} />} />
        </Switch>

        {/* <FooterBottom /> */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
