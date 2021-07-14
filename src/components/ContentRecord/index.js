import React, {useState, useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import FolderSharedIcon from '@material-ui/icons/FolderShared';
import Typography from '@material-ui/core/Typography';
import {useStyles} from './styles'
import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import api from '../../service/api';

export function ContentRecord() {
  
  const [records, setRecords] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    api.get('/form')
    .then(response => setRecords(response.data))
  },[]) 

  return (
    <>
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <FolderSharedIcon />
          </Avatar>
          <Typography 
            component="h1" 
            variant="h5"
            className={classes.title}
          >
            Content Record
          </Typography>
        </div>
      </Container>
      <TableContainer component={Paper}>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Nome</TableCell>
              <TableCell align="center">Sobrenome</TableCell>
              <TableCell align="center">E-mail</TableCell>
              <TableCell align="center">Fone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {records.map((record) => (
              <TableRow key={record.id}>
                <TableCell align="center">{record.firstName}</TableCell>
                <TableCell align="center">{record.lastName}</TableCell>
                <TableCell align="center">{record.email}</TableCell>
                <TableCell align="center">{record.phone}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}