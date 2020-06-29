import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import * as Routes from '../../constants/routes';
import { registerUser } from '../../state/actions/registration.actions';

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

const RegisterForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const loading = useSelector(state => state.registration.loading);
  const errors = useSelector(state => state.registration.errors);
  const [formErrors, setFormErrors] = useState({});
  const [formFields, setFormFields] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
  });
  const classes = useStyles();

  useEffect(() => {
    setFormErrors(errors);
  }, [errors]);

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

  const submit = async e => {
    e.preventDefault();
    validateForm(formFields);
    if (hasErrors()) {
      setFormErrors({
        ...formErrors,
        message: 'Please fix all form errors before continuing',
      });
      return;
    }
    dispatch(registerUser(formFields, history));
  };

  return (
    <form className={classes.form} noValidate onSubmit={submit}>
      <Grid container spacing={2}>
        {formErrors.global && (
          <Grid item xs={12}>
            <Typography className={classes.error}>
              {formErrors.global}
            </Typography>
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
          <Link component={RouterLink} to={Routes.LOGIN} variant="body2">
            Already have an account? Sign in
          </Link>
        </Grid>
      </Grid>
    </form>
  );
};

export default RegisterForm;
