//show both page shortlisted as well as rejected based on coming props

import React,{Component} from 'react'
import CandidateList from '../CandidateList/CandidateList';
class ShortedRejected extends Component{    
    filterData=()=>{
        let data=this.props.data.filter(d=>
            this.props.shortedList[d.id]===this.props.shorted
        )
        return data;
    }
    render(){
        return(
            <div>
                 <CandidateList 
                    data={this.filterData(this.props.data)} 
                    showCandidate={this.props.showCandidate}
                    showShortlisted={this.props.showShortlisted}
                    showRejected={this.props.showRejected}></CandidateList>
            </div>
        )
    }
}
export default ShortedRejected