import { 
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@material-ui/core';

import {
    Link
  } from 'react-router-dom';

import React, { useState, useEffect } from 'react';

export function DrawerNavigation() {
    return (
            <nav className="drawer-container">
                <Drawer
                    variant="permanent"
                    classes={{
                        paper: 'drawer-paper'
                    }}
                >
                    {/*This uses the react router link component to navigate us to the landing page when we click on the logo*/}
                    <Link to="/">onTrack</Link>
                    <Divider />
                    <h1>Menu</h1>
                    <List>
                        {['Dashboard', 'My Tracks', 'My Progress'].map((text, index) => (
                            <ListItem button key={text}>
                            <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
            </nav>
    )
}