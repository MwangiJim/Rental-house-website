import './App.css';

import Header from './component/Header';
import Home from './component/Home';
import Footer from './component/Footer';
import Rentals from './component/Rentals';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
      <Header />
       <Switch>
        <Route path = '/rentals'>
           <Rentals />
        </Route>
        <Route path = '/'>
          <Home />
         </Route>
       </Switch>
       <Footer />
    </Router>
    </div>
  );
}

export default App;
