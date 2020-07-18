import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const SuccessMessage = ({ message, open }) => {
  const [openMessage, setOpen] = useState(true);

  useEffect(() => {
    setOpen(open);
  }, [open]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={openMessage}
      autoHideDuration={3000}
      onClose={handleClose}
    >
      <MuiAlert elevation={6} variant="filled" severity="success">
        {message}
      </MuiAlert>
    </Snackbar>
  );
};

SuccessMessage.defaultProps = {
  open: true,
};

SuccessMessage.propTypes = {
  message: PropTypes.string.isRequired,
  open: PropTypes.bool,
};

export default SuccessMessage;
