import {
    Grid
} from '@material-ui/core';
import {TaskCard} from '../cards/TaskCard';

export function TopTasksGrid() {
    return (
        <>
                            <Grid container item xs>
                    <TaskCard
                        status="IN PROGRESS"
                        name="Build a Website"
                        hours="15"
                        goal="Jan 1st, 2021"
                    />
                    </Grid>
                    <Grid container item xs>
                    <TaskCard
                        status="IN PROGRESS"
                        name="Build a Website"
                        hours="15"
                        goal="Jan 1st, 2021"
                    />
                    </Grid>
                    <Grid container item xs>
                    <TaskCard
                        status="IN PROGRESS"
                        name="Build a Website"
                        hours="15"
                        goal="Jan 1st, 2021"
                    />
                    </Grid>
        </>
    )
}