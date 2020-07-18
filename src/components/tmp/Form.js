import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

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

const PlanningSessionForm = ({ defaultValues, loading, handleSubmit }) => {
  const [formLoading, setFormLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [formFields, setFormFields] = useState(defaultValues);
  const classes = useStyles();

  useEffect(() => {
    setFormLoading(loading);
  }, [loading]);

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
    validateForm(newFields);
    setFormFields(newFields);
  };

  const submit = async e => {
    e.preventDefault();
    setFormErrors({});
    if (!validateForm(formFields)) {
      return;
    }
    setFormLoading(true);
    try {
      await handleSubmit(formFields);
    } catch (err) {
      setFormErrors({ global: err.message });
      setFormLoading(false);
    }
  };

  return (
    <form className={classes.form} noValidate onSubmit={submit}>
      {formErrors.global && (
        <Grid item xs={12}>
          <Typography className={classes.error}>{formErrors.global}</Typography>
        </Grid>
      )}
      <Grid container className={classes.root} spacing={1}>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            name="name"
            label="Name"
            type="text"
            autoComplete="name"
            autoFocus
            onChange={onChange}
            disabled={formLoading}
            value={formFields.name}
            helperText={formErrors.name}
            error={!!formErrors.name}
          />
        </Grid>
      </Grid>
      <div className={classes.wrapper}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={formLoading}
          className={classes.submit}
          onClick={submit}
        >
          Save
        </Button>
        {formLoading && (
          <CircularProgress size={24} className={classes.buttonProgress} />
        )}
      </div>
    </form>
  );
};

PlanningSessionForm.defaultProps = {
  defaultValues: {
    name: '',
  },
  loading: false,
};

PlanningSessionForm.propTypes = {
  defaultValues: PropTypes.shape({
    name: PropTypes.string,
  }),
  handleSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};

export default PlanningSessionForm;
