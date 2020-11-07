import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';

export function BannerNavigation() {
    return (
        <>
            <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/testscreen">TestComponent</Link>
              </li>
            </ul>
          </nav>
        </>
    )
}