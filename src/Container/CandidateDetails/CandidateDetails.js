import React,{Component} from 'react'
import { withRouter } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './CandidateDetails.css'
import { Button } from '@material-ui/core';

class CandidateDetails extends Component{


    render(){
        return(
            <div style={{height:650}}>
            <Card className="card">
                <CardMedia
                    // className={'imgcard'}
                    style={{width:'300px',height:'300px',marginTop:50}}
                    src={this.props.data.Image}
                    component={'img'}
                />
                {/* <img src={this.props.data.Image} style={{width:'400px',height:'400px'}}> */}
                {/* </img> */}
                <div className="candidateDetails" >
                        <CardContent className="content" >
                            <Typography component="h6" variant="h6">
                                {'Name :'} {this.props.data.name}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                {'ID:'} {this.props.data.id}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                {'Company:'} {this.props.data.company}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                {'Experience:'} {this.props.data.experience+" Years"}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                {'Role:'} {this.props.data.role}
                            </Typography>
                        </CardContent>  
                </div> 
            </Card>
                <div className='buttons'>
                <Button 
                    variant="contained" 
                    disabled={this.props.shorted===true}
                    color="primary" 
                    onClick={()=>this.props.shortlist(true)} 
                    style={{height:'30px',margin:'auto'}}>{this.props.shorted===true?'Shortlisted':'Shortlist'}</Button>
                <Button 
                    variant="contained" 
                    disabled={this.props.shorted===false}
                    color="secondary" 
                    onClick={()=>this.props.shortlist(false)} 
                    style={{height:'30px',margin:'auto'}}>{this.props.shorted===false?'Rejected':'Reject'}</Button>
                </div>  
            </div>
        )
    }
}
export default withRouter(CandidateDetails);