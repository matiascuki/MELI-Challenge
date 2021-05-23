import React, {useState} from 'react';

import {makeStyles, Paper, Grid, Container, TextField, Button} from '@material-ui/core';
import listSellerItems from '../components/getItems';

const useStyles = makeStyles({
    logo: {
        maxWidth: 160,
    },
    paperStyle: {
        padding : 20,
        height: 280,
        margin: "20px auto",
        marginTop: '30vh'
    },
    btnStyle: {
        marginTop: '15px '  
    }
});

const SearchOnMe = () => {
    const classes = useStyles();
    const [ids, setIds] = useState() 

    const onChangeHandler = e => {
        setIds(e.target.value);
      };

    const handleClick = (e) => {
        e.preventDefault();
        var idsArray = ids.split(" ")
        idsArray.forEach(id => {
            console.log(id + typeof (id));
            
          });

    }   

    return (
        <form>
            <Grid container>
                <Paper elevation={10} className={classes.paperStyle}>
                    <Grid align='center'>
                            <img src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.14.5/mercadolibre/logo__large_plus.png" 
                            className={classes.logo} alt="logo"></img> 
                        <h2>Buscar en Mercado Libre</h2>
                    </Grid>
                        <TextField label='User ID' placeholder='Enter UserID' onChange={onChangeHandler} fullWidth required/>
                        <Button type='submit' color='primary' variant="contained" className={classes.btnStyle} onClick={handleClick} fullWidth>Search</Button>
                </Paper>
            </Grid>
        </form>
    );
};

export default SearchOnMe;