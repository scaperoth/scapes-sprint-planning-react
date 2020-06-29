import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import * as Routes from '../../constants/routes';
import { registerUser, login } from '../../state/actions/auth.actions';

const useStyles = makeStyles(theme => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
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

const RegisterForm = ({ history }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [formErrors, setFormErrors] = useState({});
  const [formFields, setFormFields] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
  });
  const classes = useStyles();

  const validatePassword = ({ password, passwordConfirm }) => {
    if (password !== passwordConfirm) {
      return 'Passwords must match';
    }
    return false;
  };

  const validateEmail = ({ email }) => {
    const isValidEmail = /.+@.+\..+/.test(email);
    if (email && !isValidEmail) {
      return 'Please enter a valid email';
    }
    return false;
  };

  const validateForm = fieldsToValidate => {
    const [password, email] = [
      validatePassword(fieldsToValidate),
      validateEmail(fieldsToValidate),
    ];
    setFormErrors({ email, password });
  };

  const hasErrors = () =>
    Object.keys(formErrors).some(key => !!formErrors[key]);

  const onChange = e => {
    const { name, value } = e.target;
    setFormErrors({});
    const newValues = { ...formFields, [name]: value };
    setFormFields(newValues);
    validateForm(newValues);
  };

  const parseError = err => {
    if (!err.code) {
      setError(err.message);
      return;
    }

    const { message, code } = err;
    if (code.includes('email')) {
      setFormErrors({ email: message });
    } else if (code.includes('password')) {
      setFormErrors({ password: message });
    } else {
      setError(err.message);
    }
  };

  const submit = async e => {
    e.preventDefault();
    validateForm(formFields);
    if (hasErrors()) {
      setError('Please fix all form errors before continuing');
      return;
    }

    setLoading(true);
    const { payload } = registerUser(formFields);
    try {
      await payload;
      await login(formFields).payload;
      history.push(Routes.HOME);
    } catch (err) {
      // TODO: Handle this better with custom errors
      parseError(err);
      setLoading(false);
    }
  };

  return (
    <form className={classes.form} noValidate onSubmit={submit}>
      <Grid container spacing={2}>
        {error && (
          <Grid item xs={12}>
            <Typography className={classes.error}>{error}</Typography>
          </Grid>
        )}
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={onChange}
            disabled={loading}
            value={formFields.email}
            helperText={formErrors.email}
            error={!!formErrors.email}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
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
            helperText="6 Character Minimum"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            name="passwordConfirm"
            label="Password Confirm"
            type="password"
            id="passwordConfirm"
            autoComplete="current-password"
            onChange={onChange}
            disabled={loading}
            value={formFields.passwordConfirm}
            helperText={formErrors.password}
            error={!!formErrors.password}
          />
        </Grid>
      </Grid>
      <div className={classes.wrapper}>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          disabled={loading}
          className={classes.submit}
        >
          Sign Up
        </Button>
        {loading && (
          <CircularProgress size={24} className={classes.buttonProgress} />
        )}
      </div>
      <Grid container justify="flex-end">
        <Grid item>
          <Link href={Routes.LOGIN} variant="body2">
            Already have an account? Sign in
          </Link>
        </Grid>
      </Grid>
    </form>
  );
};

RegisterForm.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default withRouter(RegisterForm);
