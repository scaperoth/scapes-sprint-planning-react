import React, { useEffect, useState } from 'react';
import MuiSnackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import useAlert from '../../common/hooks/useAlert';

const Snackbar = () => {
  const [open, setOpen] = useState();
  const { alert, removeAlert } = useAlert(true);

  useEffect(() => {
    setOpen(!!alert);
  }, [alert]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    removeAlert();
    setOpen(false);
  };

  return (
    alert && (
      <MuiSnackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <MuiAlert elevation={6} variant="filled" severity={alert.type}>
          {alert.message}
        </MuiAlert>
      </MuiSnackbar>
    )
  );
};

export default Snackbar;
