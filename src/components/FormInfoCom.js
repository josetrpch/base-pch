import React, { useState } from 'react';
import { Link, Link as RouterLink, useHistory } from 'react-router-dom';

import { TextField, Grid, Button, Avatar, Paper, Typography, makeStyles, CssBaseline } from '@material-ui/core'

import SearchIcon from '@material-ui/icons/SearchRounded';
import { theme } from '.././themeConfig'

const useStyles = makeStyles((theme) => ({
    root: {
        height: '80vh',
    },
    paper: {
        margin: theme.spacing(5, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(2),
        backgroundColor: theme.palette.primary.main,
    },
    form: {
        width: '40%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        width: '100%',
        margin: theme.spacing(1, 0, 1),
        padding: theme.spacing(1),
        color: theme.palette.primary,
        

    },
    cancel: {
        width: '100%',
        margin: theme.spacing(2, 0, 1),
        padding: theme.spacing(1),
        color: theme.palette.secondary.main,

    },
    textField: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        width: '100uh',
    },

}));

const FormMultiplesRut = () => {
    const classes = useStyles();
    const history = useHistory();

    const [values, setValues] = useState({ });

    const hanledinputvalue = (e) => {
        setValues(e.target.value);
    }
    const ConsultaDatos = () => {
    
            history.push("/informeComercial-result");


    }


    return (
        <div>
            <Grid component="main" className={classes.root}>
                <CssBaseline />
                
                <Grid item xs={12} sm={12} xl={12} component={Paper} elevation={1} className={classes.paper} square>
                    <Avatar className={classes.avatar} variant="rounded">
                        <SearchIcon />
                    </Avatar>
                    <Typography component="h1" variant="h4"> {/*el component es para que lo tome como un h1 */}
                        Consulta Informe comercial
                    </Typography>

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
                            value={values.NRut}
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
                            value={values.NSerie}

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
                        <Button variant="primary" color="segondary" className={classes.cancel}>
                            Cancelar
                    </Button>


                    </form>
                </Grid>

            </Grid>



        </div>
    )
}
export default FormMultiplesRut;