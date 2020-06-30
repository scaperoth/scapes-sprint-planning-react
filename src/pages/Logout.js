import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logout } from '../state/actions/auth.actions';
import * as Routes from '../constants/routes';

const Logout = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logout()).finally(() => {
      history.push(Routes.HOME);
    });
  }, [dispatch, history]);

  return <div />;
};

export default Logout;
