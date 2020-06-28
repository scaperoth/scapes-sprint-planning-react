import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import * as Routes from '../../constants/routes';
import { login } from '../../state/actions/auth.actions';

const useStyles = makeStyles(theme => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  buttonProgress: {
    color: theme.palette.secondary,
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: theme.spacing(-1),
    marginLeft: theme.spacing(-1),
  },
  error: {
    color: theme.palette.error.main,
  },
}));

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [error, setError] = useState();
  const [formFields, setFormFields] = useState({
    email: '',
    password: '',
  });
  const classes = useStyles();

  const onChange = e => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const parseError = err => {
    const { message } = err;
    if (message.toLowerCase().includes('email')) {
      setFormErrors({ email: 'Invalid email address' });
    } else if (message.toLowerCase().includes('password')) {
      setFormErrors({ password: message });
    } else {
      setError(err.message);
    }
  };

  const submit = async e => {
    e.preventDefault();
    setError();
    setFormErrors({});

    setLoading(true);
    const { payload } = login(formFields);
    try {
      await payload;
    } catch (err) {
      parseError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className={classes.form} noValidate onSubmit={submit}>
      {error && (
        <Grid item xs={12}>
          <Typography className={classes.error}>{error}</Typography>
        </Grid>
      )}
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
        disabled={loading}
        value={formFields.email}
        helperText={formErrors.email}
        error={!!formErrors.email}
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
        disabled={loading}
        value={formFields.password}
        helperText={formErrors.password}
        error={!!formErrors.password}
      />

      <div className={classes.wrapper}>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          disabled={loading}
          className={classes.submit}
        >
          Sign In
        </Button>
        {loading && (
          <CircularProgress size={24} className={classes.buttonProgress} />
        )}
      </div>
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
