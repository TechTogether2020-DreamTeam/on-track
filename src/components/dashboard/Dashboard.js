import React, { useState, useEffect } from 'react';
  import {
      DrawerNavigation,
} from '../DrawerNavigation';
import {TaskCard} from '../TaskCard';
  import './Dashboard.css';
  
export function Dashboard() {
    return (
        <div className="dashboard-container">
            <DrawerNavigation/>
            <header className="dashboard-header">
                <h1>Dashboard</h1>
            </header>
            <TaskCard
                status="IN PROGRESS"
                name="Build a Website"
                hours="15"
                goal="Jan 1st, 2021"
                // hasStartButton
            />
            <main>
            </main>
        </div>
    )
}