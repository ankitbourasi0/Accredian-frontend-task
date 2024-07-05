import React from 'react';
import { Button, Typography, Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    textAlign: 'center',
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

function HeroSection({ onReferNowClick }) {
  const classes = useStyles();

  return (
    <div className={classes.hero}>
      <Container maxWidth="sm">
        <div className={classes.heroContent}>
          <Typography component="h1" variant="h2" color="textPrimary" gutterBottom>
            Refer & Earn
          </Typography>
          <Typography variant="h5" color="textSecondary" paragraph>
            Refer your friends and earn exciting rewards!
          </Typography>
          <div className={classes.heroButtons}>
            <Button variant="contained" color="primary" onClick={onReferNowClick}>
              Refer Now
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default HeroSection;