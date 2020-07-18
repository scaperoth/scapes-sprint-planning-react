import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const Copyright = () => (
  <Typography variant="body2" color="textSecondary">
    {'Copyright © '}
    <Link color="inherit" href="https://github.com/scaperoth">
      github.com/scaperoth
    </Link>{' '}
    {new Date().getFullYear()}.
  </Typography>
);

export default Copyright;