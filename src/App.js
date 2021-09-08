import Navbar from './components/Navbar';
import Container from './components/Container';
import Footer from './components/Footer';
import Productpage from './components/Productpage';

import {
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import ProductPage from './components/Productpage';

function App() {
  return (
    <>
    <Navbar/>
    <Container/>
    <Productpage/>
    <Footer/ >
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/" component=""/>
          <Route exact path="/about" component=""/>
          
        </Switch> 
    </>    
  );
}

export default App;
