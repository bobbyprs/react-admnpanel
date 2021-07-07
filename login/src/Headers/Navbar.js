import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'
import {Image} from 'react-bootstrap'


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  }));
  

function Navbar() {
    const classes = useStyles();
   
    return (
        <div>
             <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
           <Image src='https://www.kyvorgenomics.com/images/logo_1.png' style={{width:"100px",height:"60px",margin:'auto',padding:"auto"}}/>
          </IconButton>
          <Typography variant="h6" color="inherit">
          {/* <Link style={{paddingRight:'10px',color:'white',textDecoration:'none'}} to='/'>Login</Link> */}

          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  </div>
    )
}

export default Navbar
