import "./App.css";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import iphone from "./assets/iphone.png";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Art1 from "./articulos/Art1"
import { FooterContainer } from './containers/footer'

function App() {
  return (
    <div className="App">
      <Router>
      
        <Navbar />
        <Switch>
         
          <Route path="/" exact component={Home} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/Art1" exact component={Art1} />

        </Switch>
       
       <FooterContainer />
      </Router>
      
    </div>
  );
}

export default App;
