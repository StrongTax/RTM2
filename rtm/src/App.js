import "./App.css";
import Navbar from "./components/Navbar"

import Home from "./pages/Home";

import About from "./pages/About";
import Contact from "./pages/Contact";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { FooterContainer } from './containers/footer'

function App() {
  return (
    <div className="App">
      <Router>
      
        <Navbar />
        <Switch>
         
          <Route path="/" exact component={Home} />

          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />

   
        </Switch>
       
       <FooterContainer />
      </Router>
      
    </div>
  );
}

export default App;
