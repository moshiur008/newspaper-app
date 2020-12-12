import logo from './../../newspaper.png';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
  }));

const Header = () => {

    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="100%">
                <p style={{ backgroundColor: '#fff', textAlign:'center' }}><a href="/"><img src={logo} alt=""/></a></p>
                <Typography style={{ backgroundColor: '#000', textAlign:'center', padding:'10px 0px', color:'#fff', fontSize:'18px' }}className={classes.root}>
                <Link style={{ color:'#fff', textDecoration:'none'}} href="/">
                    Home
                </Link>
                <Link style={{ color:'#fff', textDecoration:'none'}} href="/posts">
                    Posts
                </Link>
            </Typography>
            </Container>

            
        </React.Fragment>
    );
};

export default Header;