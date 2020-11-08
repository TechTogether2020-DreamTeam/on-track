import React, { useState, useEffect } from 'react';
import {
    Grid
} from '@material-ui/core';
import {TrackCard} from '../cards/TrackCard';

// mock data as json
import * as track1 from '../../data/mocks/tracks/track1.json';
import * as track2 from '../../data/mocks/tracks/track2.json';
import * as track3 from '../../data/mocks/tracks/track3.json';

export function TracksGrid() {
    const [tracks, setTracks] = useState();

    useEffect (() => {
        // console.log(Object.keys(tracks))
        }, [])

    return (
        <>
        {/*Figure out how to loop through once we have firebase connected. (Couldn't figure out how to loop with JSON without converting to a JS object)*/}
            {/* {
                tracks && Object.keys(tracks).map((trackValue, index) => {
                    return (
                        <Grid key={index} container item xs>
                        <TaskCard
                            key={index}
                            status={trackValue.status.toUpperCase()}
                            name={trackValue.name}
                            hours={trackValue.timeInvested}
                            goal={trackValue.completionGoal}
                        />
                    </Grid>
                    )
                }

                )
            } */}
                <Grid container item xs>
                    <TrackCard
                        status={track1.status.toUpperCase()}
                        name={track1.name}
                        hours={track1.timeInvested}
                        goal={track1.completionGoal}
                    />
                    </Grid>
                    <Grid container item xs>
                    <TrackCard
                        status={track2.status.toUpperCase()}
                        name={track2.name}
                        hours={track2.timeInvested}
                        goal={track2.completionGoal}
                    />
                    </Grid>
                    <Grid container item xs>
                    <TrackCard
                        status={track3.status.toUpperCase()}
                        name={track3.name}
                        hours={track3.timeInvested}
                        goal={track3.completionGoal}
                    />
                    </Grid>
        </>
    )
}