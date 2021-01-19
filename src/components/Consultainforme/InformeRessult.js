import React from 'react';
import ReactDOM from 'react-dom';
import clsx from 'clsx';
import { TextField, Grid, Button, Avatar, Paper, Typography, makeStyles, CssBaseline, Card, CardContent, Box, Container, Divider } from '@material-ui/core';
import SearchRounded, { Height } from '@material-ui/icons/SearchRounded';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';
import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/Check';

import TimelineIcon from '@material-ui/icons/Timeline';
import   Graficos  from '../Graficos/Graficos';

const useStyles = makeStyles((theme) => ({
    root: {

        backgroundColor: theme.palette.background.dark,
        minHeight: '100%',
        paddingBottom: theme.spacing(3),
        paddingTop: theme.spacing(3)

    },
    palette: {
        primary: {
            main: '#303f9f',
            color: 'white'
        },
        secondary: {
            main: '#ff001e',
            backgroundColor: '#ff001e'
        },
    },

    paper: {
        margin: theme.spacing(5, 4),
        width: '100%',
        display: 'flex',
        flexDirection: 'column',


    },
    avatar: {
        margin: theme.spacing(2),
        backgroundColor: theme.palette.primary.main,
    },

    indicadores: {
        padding: '60px',
        alignContent: 'center',

    },
    buttonSuccess: {
        backgroundColor: '#04ba65',
        '&:hover': {
          backgroundColor: '#05fc89',
        },
      },


}));


const InformeRessult = () => {
    const classes = useStyles();


    return (
        <>
            <Container fixed  maxWidth='xl'>
            <Grid item className={classes.root}
                    align="right">
                        <Box >
                            <Button
                                color="secondary"
                                size="large"
                                type="submit"
                                variant="contained" >
                                Más información
                             </Button>

                        </Box>
                    </Grid>
                <Card>
                <Grid item={true}   xs={12} md={12} 
                        direction="row"
                        justify="space-evenly"
                    >  

                        <CardContent>
                            <Typography variant="p">Indentificación</Typography>
                            <Typography varient="p">Rut: 76.540.287-5</Typography>
                            <Typography variant="h5" color="primary">COMERCIALIZADORA AIS SPA </Typography> 
                            <Typography varient="p">Rubro: VTA POR MAYOR DE ART DE PERF COSMETICO Y PROD LIMP</Typography>

                            <Typography varient="p">Teléfonos: 938669776 - 938669789 </Typography>
                          
                         

                           

                        </CardContent>


                    </Grid>

                </Card>
                                        <Box
                                        mt={3}
                                        mb={1}
                                        >
                                     <Grid container direction="row" >

                                    <Grid item={true}   xs={12} md={4}  > 
                                    <Card >
                                        <CardContent>
                                        
                                            <Typography align="center">Indicadores de Riesgo</Typography>
                                            
                                            <Typography variant="h4" align="center">999</Typography>
                                            
                                            
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item={true}   xs={12} md={4} > 
                                    <Card >
                                        <CardContent>
                                            <Typography align="center"> Tamaño de la Empresa</Typography>
                                            <Typography variant="h4" align="center">Grande</Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item={true}   xs={12} md={4} > 
                                    <Card >
                                        <CardContent>
                                            <Typography align="center">Registro de Quiebra</Typography>
                                            <Typography variant="h4" align="center">No</Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                </Grid>
                                </Box>
                                <Box
                                        mt={3}
                                        mb={1}
                                        >
                                <Grid
                                container
                                direction="row"
                            >
                                 <Grid item={true}   xs={12} md={4} > 
                                    <Card >
                                        <CardContent>
                                            <Typography align="center">Participación en Sociedades</Typography>
                                            <Typography variant="h4" align="center">No</Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item={true} xs={12} md={4} > 
                                    <Card >
                                        <CardContent>
                                            <Typography align="center">Registra Propiedades</Typography>
                                            <Typography variant="h4" align="center">Si | 2</Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item={true} xs={12} md={4} > 
                                    <Card >
                                        <CardContent>
                                            <Typography align="center">Presenta Boletin Laboral</Typography>
                                            <Typography variant="h4" align="center">Si </Typography>
                                            <div className="center">
                                            <Fab 
                                            aria-label="save"
                                            className="buttonSuccess"
                                            align="center"
                                            >
                                             <CheckIcon />
                                            </Fab>
                                            </div>
                                      

                                        </CardContent>
                                    </Card>
                                </Grid>


                            </Grid>
                            </Box>


                            <Graficos/>


            </Container>





        </>
    )
}
export default InformeRessult;