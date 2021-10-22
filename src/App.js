import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Brand from './components/pages/Brand';
import Products from './components/pages/Products';
import ContactUs from './components/pages/ContactUs';
import Buy from './components/pages/Buy';
import Toyota from './components/pages/Toyota';
import Nissan from './components/pages/Nissan';
import Honda from './components/pages/Honda';
import Mazda from './components/pages/Mazda';



{/* using react-router-dom for physical functionality, switching from routes to each component */}
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/brands' component={Brand} />
        <Route path='/products' component={Products} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/buy' component={Buy} />
        <Route path='/toyota' component={Toyota} />
        <Route path='/nissan' component={Nissan} />
        <Route path='/honda' component={Honda} />
        <Route path='/mazda' component={Mazda} />
      </Switch>
    </Router>
  );
}

export default App;
