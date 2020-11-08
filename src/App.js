import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import {LandingPage} from './components/landing/LandingPage';
import {BannerNavigationComponent} from './components/BannerNavigationComponent';
import { Dashboard } from './components/dashboard/Dashboard';
import { MyTracks } from './components/tracks/MyTracks';

// Not needed - but leave for now for reference
// import logo from './logo.svg';
// import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
          <BannerNavigationComponent/>
          <main>
            {// A switch is used for looking through Route component children
            // It will render the first one it sees that matches the current URL
            // If URL matches, render a specific React component
            }
            <Switch>
              <Route path="/dashboard">
                <Dashboard/>
              </Route>

              <Route path="/mytracks/:id">
                <MyTracks/>
              </Route>

              <Route path="/mytracks">
                <MyTracks/>
              </Route>

              <Route exact path="/">
                <LandingPage/>
              </Route>
            </Switch>
          </main>
      </div>
    </Router>
  );
}

export default App;
