import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import {ComponentForTesting} from './components/ComponentForTesting';
import {
  Home
} from './components/Home';
import {BannerNavigation, Navigation} from './components/BannerNavigation';

// Not needed - but leave for now for reference
// import logo from './logo.svg';
// import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
          <BannerNavigation/>

        {// A switch is used for looking through Route component children
        // It will render the first one it sees that matches the current URL
        // If URL matches, render a specific React component
        }
        <Switch>
          <Route path="/testscreen">
            <ComponentForTesting/>
          </Route>

          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
