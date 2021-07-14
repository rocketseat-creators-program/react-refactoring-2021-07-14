import React from 'react';
import {useForm} from 'react-hook-form'
import {useConfigForm} from '../../hooks/ConfigForm'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {GenericTextField} from '../GenericTextField';
import api from '../../service/api';

export function GenericForm(props){

    const {configForm} = useConfigForm()
    const {register, handleSubmit} = useForm();
    
    configForm.map(conf => conf.register = {...register(conf.name)});

    const onSubmit = handleSubmit(data => api.post('/form', data)
        .then(window.location.reload())
    );

    return(
        <form 
          onSubmit={onSubmit}
          className={props.classNameForm} 
        >
          <Grid container spacing={2}>
            <GenericTextField
              config={configForm} 
            />
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={props.classNameButton}
          >
            Cadastrar
          </Button>
        </form>
    )
}