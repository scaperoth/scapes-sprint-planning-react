import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const ErrorMessage = ({ error }) => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    setOpen(error !== false);
  }, [error]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <MuiAlert elevation={6} variant="filled" severity="error">
        {error.message}
      </MuiAlert>
    </Snackbar>
  );
};

ErrorMessage.propTypes = {
  error: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      message: PropTypes.string,
    }),
  ]).isRequired,
};

export default ErrorMessage;
