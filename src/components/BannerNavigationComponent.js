import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';

import './BannerNavigationComponent.css';

export function BannerNavigationComponent() {
    return (
        <div className="banner-container">
          <Link to="/">onTrack</Link>
          <div className="banner-buttons">
              <div className="banner-button-login">
                  <button>log in</button>
              </div>
              <div className="banner-button-signup">
                  <button>sign up</button>
              </div>
          </div>
        </div>
    )
}