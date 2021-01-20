
import React from 'react'
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardHeader, Paper, Typography, Grid, Divider } from '@material-ui/core';

import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import CheckIcon from '@material-ui/icons/Check';
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

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
const GrafCumplimiento = () => {
    const classes = useStyles();

    return (
      <>
      <CardHeader title="Cumplimiento" />
    <Divider />
    <Grid container  direction="row" justify="center" alignItems="center" >
    <Grid item={true} xs={12} md={4}  >
            <Alert severity="error"><Typography variant="h6" style={{color:'while'}}>-</Typography></Alert>
            <Typography variant="h6" style={{color:'while', background: '#f5f5f5'}} align="center">0 a 60</Typography>
    </Grid>
 
    <Grid item={true} xs={12} md={4} className={classes.SeleccionSituacionRiesgo} >
    <Card >
        <CardContent>
           
            <Alert severity="success"><Typography variant="h6" style={{color:'while'}}>97 cumplimiento</Typography></Alert>
            <Typography variant="h6" style={{color:'while', background: '#f5f5f5'}} align="center">70 a 100</Typography>

        </CardContent>
        
    </Card>
    </Grid>
     
    
    </Grid>
    </>
    )
}
export default GrafCumplimiento;