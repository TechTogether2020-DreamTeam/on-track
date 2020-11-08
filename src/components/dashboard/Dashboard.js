import React, { useState, useEffect } from 'react';
import {
    Grid,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
      DrawerNavigation,
} from '../DrawerNavigation';
import {TasksList} from './TasksList';
import {TopTasksGrid} from './TopTasksGrid';
import {TasksProgressList} from './TasksProgressList';
  import './Dashboard.css';

  const useStyles = makeStyles((theme) => ({
    list: {
      width: '100%',
    //   maxWidth: 360,
      position: 'relative',
      overflow: 'auto',
      maxHeight: 500,
    },
  }));
  
export function Dashboard() {
const classes = useStyles();

    return (
        <div className="dashboard-container">
            <DrawerNavigation/>
            <div className="dashboard-contents">
                <header className="dashboard-header">
                    <h1>Dashboard</h1>
                </header>
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                  spacing={5}
                >
                    <TopTasksGrid/>
                </Grid>

                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                  spacing={3}
                >
                    <Grid container item xs>
                        <TasksList/>
                    </Grid>
                
                    <Grid container item xs>
                        <TasksProgressList/>
                    </Grid>
                    </Grid>
                
            </div>
        </div>
    )
}