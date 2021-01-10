//Take all list from props and list different rows on the given page
import React,{Component} from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import SingleRow from './SingleRow/SingleRow'
class CandidateList extends Component{
    render(){ 
        return(
            <div>
                <Table>
                    <TableHead>
                    </TableHead>
                    <TableBody>
                        {this.props.data.
                        map((data,i)=>(
                            <TableRow key={i}>
                                <TableCell onClick={()=>this.props.showCandidate(data.id)} style={{cursor:'pointer'}}>
                                    <SingleRow data={data} image={data.Image} showCandidate={this.props.showCandidate}></SingleRow>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                
            </div>
        )
    }
}
export default CandidateList;