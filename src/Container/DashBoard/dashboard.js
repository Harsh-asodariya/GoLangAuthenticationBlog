import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useParams } from 'react-router-dom';
import {withRouter} from 'react-router'
import Navbar from '../Navbar/navbar';

const useStyles = makeStyles((theme) => ({
    info:{
      marginTop:100
    }
  }));

const Dashboard = () => {
const classes = useStyles();
  const type=useParams();
  return (
      <>
      <Navbar />  
      <Typography variant="h5" className={classes.info}>
        Welcome {type.type}
      </Typography>
</>
  );
}

export default withRouter(Dashboard)