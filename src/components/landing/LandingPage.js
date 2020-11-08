import React, { useState, useEffect } from 'react';
// import {BannerNavigationComponent} from '../BannerNavigationComponent';
import logo from '../../logo.svg';
import './LandingPage.css';

export function LandingPage() {
    return (
        <div className="landing-page-container">
            <header className="landing-page-header">
                <h1 className="landing-page-title">onTrack</h1>
                <h2 className="landing-page-slogan">stay on track of all your tasks</h2>
                <p className="description">break big tracks into small tasks and accomplish tasks one by one to finish your track</p>
                <button>Get Started</button>
            </header>
            <div className="landing-page-image-wrapper">
                <img src={logo} className="landing-page-image" alt="landing page logo"/>
            </div>
        </div>
    )
}