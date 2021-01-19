import React from 'react';
import ReactDOM from 'react-dom';
import clsx from 'clsx';
import { TextField, Grid, Button, Avatar, Paper, Typography, makeStyles, CssBaseline, Card, CardContent, Box, Container, Divider } from '@material-ui/core';
import SearchRounded, { Height } from '@material-ui/icons/SearchRounded';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';
import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';


import Graficos from '../Graficos/Graficos';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
        width: '100%',
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
        color: 'white',
        '&:hover': {
            backgroundColor: '#02bf67',
            color: 'white',
        },
    },

    ButtonDanger: {
        backgroundColor: '#bf0215',
        color: 'white',
        '&:hover': {
            backgroundColor: '#b53541',
            color: 'white',
        },
    },


}));


const InformeRessult = () => {
    const classes = useStyles();


    return (
        <>

            <Grid component="main" >
                <CssBaseline />
                <Card>
                    <CardContent>
                        <Grid item xs={6} sm={6} xl={6} md={6} component={Paper} elevation={0} className={classes.paper} square>
                            <Typography component="h1" variant="h3" color="primary"> {/*el component es para que lo tome como un h1 */}
                    COMERCIALIZADORA AIS SPA
                    </Typography>
                            <Typography varient="p">Rut: 76.540.287-5</Typography>
                            <Typography varient="p">Rubro: VTA POR MAYOR DE ART DE PERF COSMETICO Y PROD LIMP</Typography>
                            <Typography varient="p">Teléfonos: 938669776 - 938669789 </Typography>
                        </Grid>
                        <Grid container direction="row" >

                            <Grid item={true} xs={12} md={6}  >

                                <CardContent>

                                    <Typography align="center">Indicadores de Riesgo</Typography>

                                    <Typography variant="h4" align="center">999</Typography>


                                </CardContent>

                            </Grid>
                            <Grid item={true} xs={12} md={6} >

                                <CardContent>
                                    <Typography align="center"> Tamaño de la Empresa</Typography>
                                    <Typography variant="h4" align="center">Grande</Typography>
                                </CardContent>

                            </Grid>

                        </Grid>
                        <Box
                            mt={3}
                            mb={1}
                        >


                            <Grid
                                container
                                direction="row"
                                borderBottom={2}
                            >
                                <Grid item={true} xs={12} md={3} elevation={1} >

                                    <CardContent >
                                        <div align="center">
                                            <Typography align="center">Registro de Quiebra</Typography>
                                        </div>
                                        <br />
                                        <div align="center">
                                            <Fab
                                                aria-label="save"
                                                className={classes.ButtonDanger}
                                                align="center"
                                            >
                                                <ClearIcon /><Typography variant="h5" align="center" ></Typography>
                                            </Fab>
                                        </div>
                                    </CardContent>

                                </Grid>

                                <Grid item={true} xs={12} md={3} elevation={1}>

                                    <CardContent>
                                        <div align="center">
                                            <Typography align="center">Participación en Sociedades</Typography>
                                        </div>

                                        <br />
                                        <div align="center">
                                            <Fab
                                                aria-label="save"
                                                className={classes.buttonSuccess}
                                                align="center"
                                            >
                                                <CheckIcon /><Typography variant="h5" align="center" > </Typography>
                                            </Fab>
                                        </div>
                                    </CardContent>

                                </Grid>
                                <Grid item={true} xs={12} md={3} elevation={1} >

                                    <CardContent>
                                        <div align="center">
                                            <Typography align="center">Registra Propiedades</Typography>

                                        </div>
                                        <br />
                                        <div align="center">
                                            <Fab
                                                aria-label="save"
                                                className={classes.buttonSuccess}
                                                align="center"
                                            >
                                                <CheckIcon /><Typography variant="h5" align="center" > 5</Typography>
                                            </Fab>
                                        </div>

                                    </CardContent>

                                </Grid>
                                <Grid item={true} xs={12} md={3} elevation={1}  >

                                    <CardContent>
                                        <div align="center">
                                            <Typography align="center">Presenta Boletin Laboral</Typography>
                                        </div>
                                        <br />

                                        <div align="center">
                                            <Fab
                                                aria-label="save"
                                                className={classes.buttonSuccess}
                                                align="center"
                                            >
                                                <CheckIcon />
                                            </Fab>
                                        </div>


                                    </CardContent>

                                </Grid>
                            </Grid>


                        </Box>
                    </CardContent>

                </Card>




            </Grid>

            <Grid component="main" my={15} className={classes.root}>
                <CssBaseline />
                <Card>
                    <CardContent>
                        <Graficos />
                    </CardContent>
                </Card>
            </Grid>









        </>
    )
}
export default InformeRessult;