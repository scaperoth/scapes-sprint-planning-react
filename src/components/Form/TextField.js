import React from 'react';
import PropTypes from 'prop-types';
import MuiTextField from '@material-ui/core/TextField';

const TextField = ({ name, label, autoComplete = name }) => (
  <MuiTextField
    variant="outlined"
    margin="normal"
    required
    fullWidth
    id={name}
    label={label}
    name={name}
    autoComplete={autoComplete}
    autoFocus
  />
);

TextField.defaultProps = {
  autoComplete: '',
};

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  autoComplete: PropTypes.string,
};

export default TextField;
