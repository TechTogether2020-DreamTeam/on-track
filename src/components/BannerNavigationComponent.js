import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from 'react-router-dom';

import {
  Button,
} from '@material-ui/core';

import './BannerNavigationComponent.css';

export function BannerNavigationComponent() {
    return (
        <div className="banner-container">
          <Link to="/">onTrack</Link>
          <div className="banner-buttons">
              <div className="banner-button-login">
                  <Button variant="contained">log in</Button>
              </div>
              <div className="banner-button-signup">
                  <Button variant="contained">sign up</Button>
              </div>
          </div>
        </div>
    )
}