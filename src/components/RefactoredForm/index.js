import React from 'react';
import Container from '@material-ui/core/Container';
import {useConfigForm} from '../../hooks/ConfigForm';
import {useStyles} from './styles'
import {GenericHeader} from '../GenericHeader';
import {GenericForm} from '../GenericForm';
import {configTextField} from './config';

export function RefactoredForm() {

  const {config} = useConfigForm();
  config(configTextField);

  const classes = useStyles();

  return (
    <Container 
      component="main" 
      maxWidth="xs" 
      className={classes.paper}
    >
        <GenericHeader 
          className={classes.avatar}
          icon="smile"
          title="Refactored Form"
        />
        <GenericForm 
          classNameForm={classes.form}
          classNameButton={classes.submit}
        />
    </Container>
  );
}