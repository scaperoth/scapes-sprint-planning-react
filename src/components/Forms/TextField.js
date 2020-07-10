import React from 'react';
import PropTypes from 'prop-types';
import MuiTextField from '@material-ui/core/TextField';

const TextField = ({
  onChange,
  name,
  id,
  label,
  required,
  autoComplete,
  autoFocus,
  value,
  helperText,
  disabled,
  error,
  ...rest
}) => (
  <MuiTextField
    variant="outlined"
    margin="normal"
    required={required}
    fullWidth
    id={name || id}
    label={label}
    name={name}
    autoComplete={autoComplete || name}
    autoFocus={autoFocus}
    onChange={onChange}
    disabled={disabled}
    value={value}
    helperText={helperText}
    error={!!helperText || error}
    {...rest}
  />
);

TextField.defaultProps = {
  id: '',
  required: false,
  autoComplete: '',
  autoFocus: false,
  helperText: '',
  disabled: false,
  error: false,
  value: '',
};

TextField.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  autoComplete: PropTypes.string,
  autoFocus: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  helperText: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  disabled: PropTypes.bool,
  error: PropTypes.bool,
};

export default TextField;
