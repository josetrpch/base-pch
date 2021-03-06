import React from 'react';

import { TextField, Grid, Button, Avatar, Paper, Typography, makeStyles, CssBaseline, Container,Breadcrumbs,Link} from '@material-ui/core'
import { useHistory } from 'react-router-dom';
import BuildIcon from '@material-ui/icons/Build';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({

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
        margin: theme.spacing(5, 1),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(0),
        backgroundColor: theme.palette.primary.main,
    },
    form: {
        width: '50%', // Fix IE 11 issue.
        marginTop: theme.spacing(0),
    },
    submit: {
        width: '100%',
        margin: theme.spacing(1, 0, 2),
        padding: theme.spacing(1),




    },
    cancel: {
        width: '100%',
        margin: theme.spacing(2, 0, 1),
        padding: theme.spacing(1),
        color: 'white',


    },
    textField: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        width: '100uh',
    },

}));

const FormInfoCom = () => {

    const ConsultaDatos = () => {

        history.push("/informeComercial-result");
    }

    const classes = useStyles();
    const history = useHistory();

    return (
        <div>
            <br />
            <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" href="/" >
                    Portal cheque
                </Link>
                <Link color="inherit" href="/informecomercial">
                    Informe comercial
                </Link>
                
            </Breadcrumbs>

            <Container container xs={12} sm={8} md={8} xl={8}
                direction="column"
                justify="center"
                alignItems="center"
                className={classes.paper}
            >
                <CssBaseline />
                
                <Grid container xs={12} sm={8} md={8} xl={8} component={Paper} elevation={3} zeroMinWidth>
                    <Grid item xs={12} sm={12} md={12} xl={12}
                        direction="column"
                        justify="center"
                        alignItems="center">


                        <Typography component="h1" variant="h4" style={{ textAlign: 'center', paddingTop: '5px' }} className={classes.paper} > {/*el component es para quelo tome como un h1 */}
                            <Avatar className={classes.avatar} variant="rounded">
                                <SearchIcon />
                            </Avatar>
                        Informe Comercial
                    </Typography>
                    </Grid>
                    <Grid container xs={12} sm={12} md={12} xl={12}
                        justify="space-around"
                        alignItems="center"
                    >


                        <form className={classes.form} noValidate autoComplete="off">

                            <TextField

                                type="text"
                                id="standar-error"
                                margin="normal"
                                fullWidth
                                name="NRut"
                                variant="outlined"
                                required
                                label="Rut"
                                autoFocus
                                inputProps={{ maxLength: 9 }}
                                helperText="Formato Requerido (264641799)"

                            />

                            <TextField

                                type="text"
                                id="standar-error"
                                margin="normal"
                                fullWidth
                                name="Nserie"
                                variant="outlined"
                                required
                                label="Serie"
                                autoFocus
                                inputProps={{ maxLength: 9 }}
                                helperText="Formato Requerido (601456988)"


                            />

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="secondary"
                                className={classes.submit}
                                onClick={ConsultaDatos}

                            >Informe Comercial
                    </Button>




                        </form>
                    </Grid>

                </Grid>

            </Container>
        </div>
    )
}
export default FormInfoCom;