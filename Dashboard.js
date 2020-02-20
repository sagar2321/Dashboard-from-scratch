import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import '../App.css';
import Box from '@material-ui/core/Box';
import Grid from "@material-ui/core/Grid";
import Fab from '@material-ui/core/Fab';
import Badge from '@material-ui/core/Badge';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { PowerSettingsNew,ArrowDropDown } from '@material-ui/icons';
import Icon from '@material-ui/core/Icon';
import Divider from '@material-ui/core/Divider';
import Chart from './Chart';
import Table from './Table';
import Main from './Main';




class Dashboard extends Component{
  constructor(){
    super();
    
    }
  

  


  componentDidMount=()=>{
    
  }

   

  

  

  render(){
    const navbarItem={
      marginLeft:"40%"
    }
    const icon={
      color:"#ff0000"
    }
    const style = {
      minWidth: 300,
      minHeight:75
   }
   const button2={
    marginTop:"10%"
    
  }
  const notification={
    marginRight:"3%"
  }
  const verticalTab={

    marginTop:"10%"
  }
  return (
    
    <div className="App">
     
      <div>
      <Main />
      <Grid container spacing={1}>
                <Grid item xs={12} sm={3}>


             
                <div >
                
                
        <Fab  style={style} variant="extended" color="primary"  >Scan OCT</Fab>
       
                </div>
                

                <div style={button2}>
                <Fab style={style} variant="extended" color="primary">OCT Layer Segmentation</Fab>
                </div>
                </Grid>
                <Grid item xs={2} sm={1}>
                <Divider orientation="vertical" /> 
                </Grid>
                <Grid item xs={12} sm={4}>
               
                <Grid container spacing={1}>
              
                <Grid item xs={12} sm={4}>
                <Paper elevation={3}>
                          <Card  variant="outlined">
                          <CardContent  >
                            <Typography  color="textSecondary" gutterBottom>
                              Total OCT Scans:
                            </Typography>
                            <Typography  variant="h2" component="h2" color="secondary">
                            8
                            </Typography>
                  
                          </CardContent>
                          <CardActions>
                          <Fab color="primary"  variant="extended" >
                                    <Icon  className="fa fa-download"  style={{ paddingRight: "3%" }}/>
                                    View Downloads
                                  </Fab>
                          </CardActions>
                        </Card>
                        </Paper>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                        <Paper elevation={3}>
                           <Card  variant="outlined">
                          <CardContent>
                            <Typography  color="textSecondary" gutterBottom>
                              Total Layers Scans:
                            </Typography>
                            <Typography  variant="h2" component="h2" color="secondary">
                            8
                            </Typography>
                      
                          </CardContent>
                          <CardActions>
                          <Fab color="primary"  variant="extended" >
                                    <Icon  className="fa fa-download"  style={{ paddingRight: "3%" }}/>
                                    View Downloads
                                  </Fab>
                          </CardActions>
                        </Card>
                        </Paper>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                        <Paper elevation={3}>
                         <Card  variant="outlined">
                          <CardContent>
                            <Typography  color="textSecondary" gutterBottom>
                              Remaining Scans:
                            </Typography>
                            <Typography variant="h2" component="h2" color="secondary">
                            8
                            </Typography>
                 
                          </CardContent>
                          <CardActions>
                          <Fab color="primary"  variant="extended" >
                                    <Icon  className="fa fa-list" style={{ paddingRight: "3%" }}/>
                                    View Your Plans
                                  </Fab>
                          </CardActions>
                        </Card>
                        </Paper>
                        </Grid>
                </Grid>
                </Grid>
                {/* <Divider orientation="vertical" /> */}
                <Grid item xs={12} sm={1}>
                <Divider orientation="vertical" /> 
                
                </Grid>
           </Grid>
           <Grid style={verticalTab} container spacing={1}>
                <Grid item xs={12} sm={6}>
                <Paper elevation={3}>
                <Container maxWidth="sm" maxHeight="sm">
                  <Chart/>
                  
           </Container>
           </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
          <Paper elevation={3}>
          <Container maxWidth="sm" maxHeight="sm">
          <Table/>
          </Container>
          </Paper>
          </Grid>
          </Grid>

      
      
      </div>
  </div>
    

  
  );
        }
    }


export default Dashboard;
