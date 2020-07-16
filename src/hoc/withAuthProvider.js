import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AuthService } from '../state/services';
import AuthUserContext from '../components/Context/AuthUserContext';
import { logout } from '../state/actions/auth.actions';

const withAuthProvider = Component => props => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const [authUser, setAuthUser] = useState();
  useEffect(() => {
    AuthService.onAuthChanged(authenticatedUser => {
      if (authenticatedUser) {
        setAuthUser(authenticatedUser);
      } else {
        setAuthUser(null);
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <AuthUserContext.Provider value={{ authUser, auth }}>
      <Component {...props} />
    </AuthUserContext.Provider>
  );
};

export default withAuthProvider;
