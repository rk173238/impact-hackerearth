//Return 1 card out of three depending on the parameter like image,personal details or professional details

import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './RowCard.css'

export default function MediaControlCard(props) {

  return (
    <Card className="root">
        {props.media?
            <CardMedia
                className="cover"
                src={props.image}
                component={'img'}
            />
            :
            <div className="details">
                {props.personal?
                    <CardContent className="content" >
                        <Typography component="h6" variant="h6">
                            {'Name :'} {props.name}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            {'ID:'} {props.id}
                        </Typography>
                    </CardContent>  
                    :
                    <CardContent className="content" >
                        <Typography component="h6" variant="h6">
                            {'Company:'+props.company}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            {'Experience:'+props.experience+' years'}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            {'Role: '+props.role}
                        </Typography>
                    </CardContent>  
                }
            </div>            
        
        }
        
    </Card>
  );
}
