import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import * as Routes from '../../constants/routes';

const useStyles = makeStyles(theme => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const LoginForm = () => {
  const [formFields, setFormFields] = useState({
    email: '',
    password: '',
  });
  const classes = useStyles();

  const onChange = e => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const submit = e => {
    e.preventDefault();
  };

  return (
    <form className={classes.form} noValidate onSubmit={submit}>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
        onChange={onChange}
        value={formFields.email}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        onChange={onChange}
        value={formFields.password}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Sign In
      </Button>
      <Grid container>
        <Grid item xs>
          <Link href={Routes.PASSWORD_FORGET} variant="body2">
            Forgot password?
          </Link>
        </Grid>
        <Grid item>
          <Link href={Routes.SIGNUP} variant="body2">
            {"Don't have an account? Sign Up"}
          </Link>
        </Grid>
      </Grid>
    </form>
  );
};

export default LoginForm;
