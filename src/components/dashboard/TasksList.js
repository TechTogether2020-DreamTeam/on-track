import {
    Grid,
    List,
    ListItem,
} from '@material-ui/core';

import {TaskCard} from '../cards/TaskCard';

import { makeStyles } from '@material-ui/core/styles';

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
                status="IN PROGRESS"
                name="Build a Website"
                hours="15"
                goal="Jan 1st, 2021"
                hasStartButton
            />
            </ListItem>
            <ListItem>
            <TaskCard
                status="IN PROGRESS"
                name="Build a Website"
                hours="15"
                goal="Jan 1st, 2021"
                hasStartButton
            />
            </ListItem>
            <ListItem>
            <TaskCard
                status="IN PROGRESS"
                name="Build a Website"
                hours="15"
                goal="Jan 1st, 2021"
                hasStartButton
            />
            </ListItem>
        </List>
        </>
    )
}