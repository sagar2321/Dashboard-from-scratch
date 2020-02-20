import React, { Component } from 'react';
import Dashboard from './Dashboard';
import JobDetails from './JobDetails';
import AllInfo from './AllInfo';
import Profile from './Profile';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import '../App.css';
import Box from '@material-ui/core/Box';
import Grid from "@material-ui/core/Grid";
import Fab from '@material-ui/core/Fab';
import Badge from '@material-ui/core/Badge';
import { Router, Switch, Route } from "react-router-dom";

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { PowerSettingsNew,ArrowDropDown, ThreeSixty } from '@material-ui/icons';
import Icon from '@material-ui/core/Icon';
import Divider from '@material-ui/core/Divider';
import Chart from './Chart';
import Table from './Table';
import Main from './Main';






export class StepForm extends React.Component {
    state = {
        step: 1,

        // step 1
      

    }
    showStep() {
         
      

        this.setState=({step:1});
    
         if(this.state.step === 1)
             return (<Dashboard 
                 
             />);
         if(this.state.step === 2)
             return (<Profile 
                 
             />);
         if(this.state.step === 3)
             return (<AllInfo 
                
             />);
     }
    

        
    render(){
        const { step } = this.state;
        
        const value=0;
        
       

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

        return(
            <div className="App">
            <AppBar position="static">
              <Toolbar>
                {/* <IconButton edge="start" color="inherit" aria-label="menu"> */}
                <img src='' width={100} height={100} mode='fit'/>
                {/* </IconButton> */}
                {/* <Typography variant="h6" className={classes.title}>
                  News
                </Typography> */}
                <div style={navbarItem}>
                  <Tabs>
                 <Tab label="Dashboard" onclick={() => this.setState=({step:1})}/>
                 <Tab label="Profile" onclick={() => this.setState=({step:1})} />
                 <Tab label="Membership"  />
                 <Tab label="Setting"  />
                 <Tab label="Support" />
              </Tabs>
                </div>
                <IconButton>
                <Badge style={notification}  badgeContent={1} color="primary">
               
                <Icon className="fa fa-bell" color="secondary" />
                
            </Badge>
            </IconButton>
            <IconButton>
                <PowerSettingsNew color="action"/>
                </IconButton>
              </Toolbar>
            </AppBar>
            </div>
        );
    }
}

export default StepForm;