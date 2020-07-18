import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { AuthService } from '../../state/services';
import { logout } from '../../state/actions/auth.actions';

export const AuthUserContext = React.createContext(null);

const AuthUserProvider = ({ children }) => {
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
      {children}
    </AuthUserContext.Provider>
  );
};

AuthUserProvider.defaultProps = {
  children: null,
};

AuthUserProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
    PropTypes.string,
  ]),
};

export default AuthUserProvider;
