//Contain 3 grid :-image,personal details and professional details(random data)

import React,{Component} from 'react'
import Grid from '@material-ui/core/Grid';
import './SingleRow.css'
import RowCard from './RowCard/RowCard'
class GridCard extends Component{

    
    render(){
        
        return(
            <div>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={2} className={"grid"}>
                        <RowCard media={true} image={this.props.image}></RowCard>
                    </Grid>
                    <Grid item xs={12} sm={5} className={"grid"}>
                        <RowCard 
                            personal={true} 
                            name={this.props.data.name} 
                            id={this.props.data.id}/>
                    </Grid>
                    <Grid item xs={12} sm={5} className={"grid"}>
                        <RowCard 
                            personal={false}
                            company={this.props.data.company} 
                            experience={this.props.data.experience}
                            role={this.props.data.role}/>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
export default GridCard;

