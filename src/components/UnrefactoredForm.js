import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import styled from 'styled-components';
import {v4 as uuid} from 'uuid'
import api from '../service/api';

const ContainerForm = styled.div`
  margin-top: 72px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  width: 100%;
  margin-top: 24px;
`;

export class UnrefactoredForm extends React.Component {
  state = {
    id: uuid(),
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: ''
  }

  _save = async () => {  
    if(!this._requiredFieldsFilled())   {
      alert('Todos os campos devem ser preenchidos')
    } else {
      await api.post('/form', this.state)
    }

  }

  _handleChanges = (field, value) => {
    switch (field) {
      case 'firstName':
        this.setState({firstName:value})
        break;
      case 'lastName':
        this.setState({lastName:value})
        break;
      case 'email':
        this.setState({email:value})
        break;
      case 'phone':
        this.setState({phone:value})
        break;
      case 'password':
        this.setState({password:value})
        break;
      default:
        break;
    }
  }

  _requiredFieldsFilled = () => {
    if(this.state.firstName === '')
      return false;
    else if(this.state.lastName === '')
      return false;
    else if(this.state.email === '')
      return false;
    else if(this.state.phone === '')
      return false;
    else if(this.state.password === '')
      return false;
    else {
      return true;
    }
  }

  render() {
    return (
      <Container component="main" maxWidth="xs">
        <ContainerForm>
          <Avatar>
            <SentimentVeryDissatisfiedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
              Unrefactored Form
          </Typography>
          <Form 
            onSubmit={this._save}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="Nome"
                  autoFocus
                  onChange={(e) => {
                    this._handleChanges('firstName', e.target.value)}
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Sobrenome"
                  name="lastName"
                  autoComplete="lname"
                  onChange={(e) => {
                    this._handleChanges('lastName', e.target.value)}
                  }
                />
              </Grid>
              <Grid item xs={12} sm={false}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => {
                    this._handleChanges('email', e.target.value)}
                  }
                />
              </Grid>
              <Grid item xs={12} sm={false}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="phone"
                  label="Fone"
                  name="phone"
                  autoComplete="phone"
                  onChange={(e) => {
                    this._handleChanges('phone', e.target.value)}
                  }
                />
              </Grid>
              <Grid item xs={12} sm={false}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Senha"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={(e) => {
                    this._handleChanges('password', e.target.value)}
                  }
                />
              </Grid>
            </Grid>
            <Box mt={3}>  
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              mt={3}
            >
              Cadastrar
            </Button>
            </Box>
          </Form>
        </ContainerForm>
      </Container>
    )
  }

}