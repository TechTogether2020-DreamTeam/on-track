import {
    Grid,
    List,
    ListItem,
    LinearProgress,
    Card,
    CardContent,
    Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {TaskCard} from '../cards/TaskCard';
import {ProgressCard} from '../cards/ProgressCard';

export function TasksProgressList() {
    const useStyles = makeStyles((theme) => ({
        list: {
          width: '100%',
        //   maxWidth: 360,
          position: 'relative',
          overflow: 'auto',
          maxHeight: 500,
        },
        itemProgress: {
            width: '60%',
        }
      }));

      const classes = useStyles();

    return (
        <>
        <h2>Task Progress</h2>
        <List className={classes.list}>
            <ListItem class={classes.itemProgress}>
                <ProgressCard
                    name="Build a Website"
                    progress={50}
                    numberCompleted={3}
                    numberTotal={6}
                />
            </ListItem>
            <ListItem class={classes.itemProgress}>
                <ProgressCard
                    name="Build a Website"
                    progress={50}
                    numberCompleted={3}
                    numberTotal={6}
                />
            </ListItem>
            <ListItem class={classes.itemProgress}>
                <ProgressCard
                    name="Build a Website"
                    progress={50}
                    numberCompleted={3}
                    numberTotal={6}
                />
            </ListItem>
        </List>
        </>
    )
}