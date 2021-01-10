//List the candidate and handle search candidate 
import { Button, IconButton, TextField } from '@material-ui/core'
import React,{Component} from 'react'
import CandidateList from '../CandidateList/CandidateList'
import BlurCircularIcon from '@material-ui/icons/BlurCircular';
class HomePage extends Component{
    state={
        search:"",
    }
    filterData=(data)=>{
        if(this.state.search.trim()==="") return data;
        return data.filter(d=>(d.name.toLowerCase()).includes((this.state.search.toLowerCase())));;
    }
    //being called on every character change in the search text feilds
    handleSearch=(event)=>{
        this.setState({search:event.target.value})
    }
    //reset the text feilds
    resetSearch=(event)=>{
        this.setState({search:''})
    }
    resetSession=()=>{
        localStorage.clear();
        alert("Session Reseted")
        window.location.reload()
    }
    render(){
        return(
            <div>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                    <TextField value={this.state.search} color='secondary' label="Search" type="search" variant="filled" onChange={this.handleSearch}/>
                    <Button variant="contained" color="primary" onClick={this.resetSearch} style={{height:'30px',margin:'auto'}}>Reset Search</Button>
                    
                    {/* reset the session and clear the localstorage */}
                    <IconButton color="secondary" onClick={this.resetSession}>
                        <BlurCircularIcon></BlurCircularIcon>
                    </IconButton>
                    <Button 
                            variant="contained" 
                            color="primary" 
                            onClick={this.props.showShortlisted} 
                            style={{height:'30px',margin:'auto'}}>{'Shortlisted'}</Button>
                    
                    <Button 
                        variant="contained" 
                        color="secondary" 
                        onClick={this.props.showRejected} 
                        style={{height:'30px',margin:'auto'}}>{'Rejected'}</Button>
                </div>
                <CandidateList 
                    data={this.filterData(this.props.data)} 
                    showCandidate={this.props.showCandidate}
                    showShortlisted={this.props.showShortlisted}
                    showRejected={this.props.showRejected}></CandidateList>
            </div>
            
        )
    }
}
export default HomePage