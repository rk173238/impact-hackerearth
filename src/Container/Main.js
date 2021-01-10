// Main Component that handles different routing and 
//distribution of different data to different pages.

import React,{Component} from 'react'
import Particles from 'react-particles-js';
import './Main.css'
import { DataService } from '../Service';
import { Route, Switch ,withRouter} from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import CandidateDetails from './CandidateDetails/CandidateDetails';
import ShortedRejected from './ShortedRejected/ShortedRejected';

class Main extends Component{
    state={
      shortedList:{},
      toBeshown:[],
      data:'',
    };
    componentDidMount=()=>{
        //check localstorage if there are shorted list already
        let shortedList=JSON.parse(localStorage.getItem('shortedList'))
        if(shortedList) this.setState({shortedList:shortedList})
        
        //Fetch fresh data on mount
        DataService.fetchCandidates().then(res=>{
           console.log(res)
            let toBeshown=res.filter(d=>d.id===this.props.location.pathname.split('/')[1])[0]
            //feed psuedo random data 
            res.map(d=>{
                d['company']=generateCompany();
                d['experience']=generateExp();
                d['role']=generateRole();
            })
            this.setState({candidate:toBeshown,data:res})            
        })
    }
    //on click event on any row in homepage/shortelisted/rejected pages.
    showCandidate=(id)=>{
      this.props.history.push({pathname:id})
      let toBeshown=this.state.data.filter(d=>d.id===id)[0]
      this.setState({candidate:toBeshown})
    }
    //shortlist or reject candidate  and store to localstorage for future use
    shortlist=(short)=>{
      let shortedList=this.state.shortedList;
      let id=this.props.location.pathname.split('/')[1]
      shortedList[id]=short;
      localStorage.setItem('shortedList',JSON.stringify(shortedList))
      this.setState({shortedList:shortedList})
    }
    //route to shortlisted page
    showShortlisted=()=>{
      this.props.history.push({pathname:'shortlisted'})
    }
    //route to re]jected page
    showRejected=()=>{
      this.props.history.push({pathname:'rejected'})
    }
    render(){

        return(
            <div style={{height:'100%'}}>
                <Particles params={particlesConfig} className={"particlesContainer"}/>
                <div className={"content"}>
                    {this.state.data?
                    
                        <Switch>
                          
                          <Route path='/' exact render={()=>
                                            <HomePage  data={this.state.data} 
                                            showCandidate={this.showCandidate}
                                            showShortlisted={this.showShortlisted}
                                            showRejected={this.showRejected}
                                            ></HomePage>
                          }/>
                          <Route path='/shortlisted' render={()=>
                                            <ShortedRejected 
                                            shorted={true}
                                            data={this.state.data} 
                                            showCandidate={this.showCandidate}
                                            shortedList={this.state.shortedList} ></ShortedRejected>}>

                          </Route>
                          <Route path='/rejected' render={()=>
                                            <ShortedRejected 
                                            shorted={false}
                                            data={this.state.data} 
                                            showCandidate={this.showCandidate}
                                            shortedList={this.state.shortedList} ></ShortedRejected>}>

                          </Route>
                          <Route path='/:id' render={()=>
                                            <CandidateDetails 
                                            data={this.state.candidate} 
                                            shortlist={this.shortlist}
                                            shorted={this.state.shortedList[this.state.candidate.id]} ></CandidateDetails>}>

                          </Route>
                        </Switch>
                        :
                        <div>loading</div>
                    }
                   
                </div>
            
            </div>
        )
    }
}
export default withRouter(Main);
const generateCompany=()=>{
    return ['Wipro ','Hackerearth','Infosys','Google','Impact','Impact','Impact','Impact','OyoRooms','Swiggy'][Math.floor(Math.random() * 10)]
}
const generateExp=()=>{
    return Math.floor(Math.random() * 10);
}
const generateRole=()=>{
    return ['Enginner','Manager','QA','Admin','CEO'][Math.floor(Math.random() * 5)]
}
const particlesConfig = {
    "particles": {
      "number": {
        "value": 60,
        "density": {
          "enable": true,
          "value_area": 800
        }
      }},
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 10,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 80,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 300,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 2
      },
      "move": {
        "enable": true,
        "speed": 12,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        }
      },
    },
  }