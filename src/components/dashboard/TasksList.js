import {
    Grid,
    List,
    ListItem,
} from '@material-ui/core';

import {TaskCard} from '../cards/TaskCard';

import { makeStyles } from '@material-ui/core/styles';

// mock data as json
import * as track1 from '../../data/mocks/tracks/track1.json';
import * as track2 from '../../data/mocks/tracks/track2.json';
import * as track3 from '../../data/mocks/tracks/track3.json';

export function TasksList() {
    const useStyles = makeStyles((theme) => ({
        list: {
          width: '100%',
        //   maxWidth: 360,
          position: 'relative',
          overflow: 'auto',
          maxHeight: 500,
        },
      }));

    const classes = useStyles();
    return (
        <>
        <h2>Tasks</h2>
        <List className={classes.list}>
            <ListItem>
            <TaskCard
                id="1"
                name={track1.createdTasks[1].name}
                timeRemaining={track1.createdTasks[1].timerSaved}
                hasStartButton
            />
            </ListItem>
            <ListItem>
            <TaskCard
                id="2"
                name={track1.createdTasks[2].name}
                timeRemaining={track1.createdTasks[2].timerSaved}
                hasStartButton
            />
            </ListItem>
            <ListItem>
            <TaskCard
                 id="3"
                 name={track2.createdTasks[3].name}
                 timeRemaining={track2.createdTasks[3].timerSaved}
                 hasStartButton
            />
            </ListItem>
        </List>
        </>
    )
}