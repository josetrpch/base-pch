import React from 'react'
import  ImagenLoading from '../../assets/imagenes/loading.gif';
import {
    Card,
    CardContent,
    makeStyles,
    Paper

  } from '@material-ui/core';


  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(3),
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(10)
      },
      
    },
  }));
const ImagenesLoading = () => {
    const classes = useStyles();
    return (
        <div>   
            
            <div className={classes.root}>
                
                <img src={ImagenLoading}/>

            </div>

        </div>
    )
}

export default ImagenesLoading;
