import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    toolbar: {
      minHeight: 60
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  }));