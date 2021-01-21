import React from 'react';

import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardHeader, Paper, Typography, Grid, Divider } from '@material-ui/core';

import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import CheckIcon from '@material-ui/icons/Check';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(3),
    },

    SeleccionSituacionRiesgo : {
        backgroundColor : '#f5f5f5',
        
    }
  },
}));

const SituacionRiesgoCard =() => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);


  return (
      <>
      <CardHeader title="Situación de Riesgo" />
    <Divider />
          <Grid container  direction="row" justify="center" alignItems="center" >
    <Grid item={true} xs={12} sm={4} md={4}  >
            <Alert severity="error"><Typography variant="h5" >Alto</Typography></Alert>
        </Grid>
 
    <Grid item={true} xs={12} sm={4} md={4}  >
            <Alert severity="warning"><Typography variant="h5" >Medio</Typography></Alert>
    </Grid>
    <Grid item={true} xs={12} sm={4} md={4} className={classes.SeleccionSituacionRiesgo} >
    <Card >
        <CardContent>
           
            <Alert severity="info"><Typography variant="h5" >Bajo</Typography></Alert>
            <Typography variant="h4" style={{background: '#f5f5f5'}} align="center">< CheckIcon /> </Typography>

        </CardContent>
        
    </Card>
    </Grid>
     
    
    </Grid>
    </>
    
  );
}
export default SituacionRiesgoCard;
