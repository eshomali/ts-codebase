import React from 'react';
import {Card, CardContent, CardActions, Button, Typography, makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

interface Props {
  
}

export const Resume: React.FC = () => {
  const classes = useStyles();
  //const bull = <span className={classes.bullet}>•</span>;
  return (
   
    <div>
      <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Comerica Bank
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          &nbsp;Engineer III
        </Typography>
        <Typography variant="body2" component="p">
          Full Stack JavaScript
          CI/CD
          AWS
        </Typography>
      </CardContent>
    </Card>
    </div>
  );
};
