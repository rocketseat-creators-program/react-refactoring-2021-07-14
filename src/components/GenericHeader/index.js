import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';

export function GenericHeader(props){
    
    return(
            <>
            <Avatar className={props.className}>
                {props.icon === 'smile' ?
                    <SentimentSatisfiedAltIcon /> :
                    <SentimentVeryDissatisfiedIcon />
                }
            </Avatar>
            <Typography component="h1" variant="h5">
                {props.title}
            </Typography>
        </>
    )
}