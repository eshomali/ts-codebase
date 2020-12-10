import React from 'react';
import {Card, CardContent, Accordion, AccordionSummary, AccordionDetails, Theme, Typography, makeStyles} from '@material-ui/core';

const useStylesCard = makeStyles({
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

const useStylesAccordian = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

interface Props {
  
}

export const Resume: React.FC = () => {
  const classesCard = useStylesCard();
  const classesAcc = useStylesAccordian();
  //const bull = <span className={classes.bullet}>•</span>;
  return (
   
    <div className="displayResume">
      <Card className={classesCard.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Comerica Bank
          </Typography>
          <Typography className={classesCard.pos} color="textSecondary">
            &nbsp;Engineer III
          </Typography>
          <Accordion>
            <AccordionSummary
              expandIcon={''}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classesAcc.heading}>Summary</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                . did well I suppose
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={'<ExpandMoreIcon />'}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classesAcc.heading}>Skills</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                . cats
              </Typography>
            </AccordionDetails>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};
