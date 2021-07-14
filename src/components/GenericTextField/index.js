import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

export function GenericTextField(props){

    const configList = [...props.config]
       
    return (
        <>
            {
            configList.map((cfg) => (
                
                <Grid item xs={cfg.xs} sm={cfg.sm} key={cfg.id}>
                    <TextField
                        key={cfg.id}
                        id={cfg.id}
                        label={cfg.label}
                        autoComplete={cfg.autoComplete}
                        name={cfg.name}
                        type={cfg.type}
                        {...cfg.register}
                        variant="outlined"
                        required
                        fullWidth
                        autoFocus
                    />
                </Grid>
                ))
            }
        </>
    )
}
