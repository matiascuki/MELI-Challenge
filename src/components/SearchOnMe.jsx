import React from 'react';
import {makeStyles, Paper, Grid, Container, TextField, Button} from '@material-ui/core';
import getItems from './component'

const useStyles = makeStyles({
    logo: {
        maxWidth: 160,
    },
    paperStyle: {
        padding : 20,
        height: '30vh',
        width: 280,
        margin: "20px auto",
        marginTop: '30vh'
    },
    btnStyle: {
        margin:'1.5rem 0',   
    }
});

const SearchOnMe = () => {
    const classes = useStyles();

    return (
        <form>
            <Grid container>
                <Paper elevation={10} className={classes.paperStyle}>
                    <Grid align='center'>
                            <img src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.14.5/mercadolibre/logo__large_plus.png" 
                            className={classes.logo} alt="logo"></img> 
                        <h2>Buscar en Mercado Libre</h2>
                    </Grid>
                        <TextField label='User ID' placeholder='Enter UserID' fullWidth required/>
                        <TextField label='Site ID' placeholder='Enter SiteID' defaultValue='MLA' fullWidth required/>
                        <Button type='submit' color='primary' variant="contained" className={classes.btnStyle} onClick={} fullWidth>Search</Button>
                </Paper>
            </Grid>
        </form>
    );
};

export default SearchOnMe;