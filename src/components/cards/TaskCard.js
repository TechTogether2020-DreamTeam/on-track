import {
    Button,
    Card,
    CardContent,
    CardActions,
    Typography
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    card: {
      width: '100%',
    },
  }));

export function TaskCard({id, name, timeRemaining, hasStartButton}) {

    const classes = useStyles();

    return (
        <Card className={classes.card}>
        <CardContent>
            <Typography className="card-task-status" color="textSecondary" gutterBottom>
                {`#${id}`}
            </Typography>
            <Typography variant="h5" className="card-task-name" color="textPrimary" gutterBottom>
                {name}
            </Typography>
            <Typography className="card-task-hours" color="textSecondary" gutterBottom>
                {timeRemaining} minutes
            </Typography>
        </CardContent>
        <CardActions>
            {hasStartButton ? <Button>Start</Button> : null}
        </CardActions>     
    </Card>
    )
}