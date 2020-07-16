import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import * as Routes from '../../constants/routes';
import { createPlanningSession } from '../../state/actions/planning-session.actions';
import AuthUserContext from '../Context/AuthUserContext';
import TextField from './TextField';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  wrapper: {
    margin: theme.spacing(1, 0),
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

const PlanningSessionCreateForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [formFields, setFormFields] = useState({
    name: '',
  });
  const classes = useStyles();

  const validateName = ({ name }) => {
    if (!name) {
      return 'A name is required.';
    }
    return false;
  };

  const validateVelocity = ({ velocity }) => {
    const isValidVelocity = !Number.isNaN(Number(velocity));
    if (velocity && !isValidVelocity) {
      return 'Velocity must be a number';
    }
    return false;
  };

  const validateForm = fieldsToValidate => {
    const [name, velocity] = [
      validateName(fieldsToValidate),
      validateVelocity(fieldsToValidate),
    ];
    setFormErrors({ name, velocity });
    return [name, velocity].every(field => !field);
  };

  const onChange = e => {
    const { name, value } = e.target;
    const newFields = { ...formFields, [name]: value };
    setFormFields(newFields);
  };

  const submit = async (e, authUser) => {
    e.preventDefault();
    setFormErrors({});
    if (!validateForm(formFields)) {
      return;
    }
    setLoading(true);
    try {
      await dispatch(createPlanningSession(authUser.uid, formFields));
      history.push(Routes.SESSIONS);
    } catch (err) {
      setFormErrors({ global: err.message });
      setLoading(false);
    }
  };

  return (
    <AuthUserContext.Consumer>
      {({ authUser }) => (
        <form
          className={classes.form}
          noValidate
          onSubmit={e => submit(e, authUser)}
        >
          {formErrors.global && (
            <Grid item xs={12}>
              <Typography className={classes.error}>
                {formErrors.global}
              </Typography>
            </Grid>
          )}
          <Grid container className={classes.root} spacing={1}>
            <Grid item xs={12}>
              <TextField
                required
                label="Name"
                name="name"
                autoFocus
                onChange={onChange}
                disabled={loading}
                value={formFields.name}
                helperText={formErrors.name}
              />
            </Grid>
          </Grid>
          <div className={classes.wrapper}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={loading}
              className={classes.submit}
              onClick={e => submit(e, authUser, false)}
            >
              Save
            </Button>
            {loading && (
              <CircularProgress size={24} className={classes.buttonProgress} />
            )}
          </div>
        </form>
      )}
    </AuthUserContext.Consumer>
  );
};

export default PlanningSessionCreateForm;
