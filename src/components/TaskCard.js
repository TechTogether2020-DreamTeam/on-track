import {
    Button,
    Card,
    CardContent,
    CardActions,
    Typography
} from '@material-ui/core';

export function TaskCard({status, name, hours, goal, hasStartButton}) {
    return (
        <Card>
        <CardContent>
            <Typography className="card-task-status" color="textSecondary" gutterBottom>
                {status}
            </Typography>
            <Typography variant="h5" className="card-task-name" color="textPrimary" gutterBottom>
                {name}
            </Typography>
            <Typography className="card-task-hours" color="textSecondary" gutterBottom>
                Hours invested: {hours}
                <Typography className="card-task-goal">
                Completion Goal: {goal}
            </Typography>
            </Typography>
        </CardContent>
        <CardActions>
            {hasStartButton ? <Button>Start</Button> : null}
        </CardActions>     
    </Card>
    )
}