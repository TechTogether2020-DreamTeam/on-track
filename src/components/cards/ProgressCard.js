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

export function ProgressCard({name, progress, numberCompleted, numberTotal}) {
    const useStyles = makeStyles((theme) => ({
        itemProgress: {
            width: '60%',
        }
      }));

      const classes = useStyles();
    return (
        <Card>
        <CardContent>
            <div style={{display: 'flex', flexDirection:'row', justifyContent:'space-between'}}>
            <Typography className="card-task-status" gutterBottom>
            {name}
            </Typography>
            <Typography className="card-task-status" gutterBottom>
            {numberCompleted}/{numberTotal} completed
            </Typography>
                    </div>
            <LinearProgress variant="determinate" value={progress}/>
        </CardContent>
    </Card>
    )
}