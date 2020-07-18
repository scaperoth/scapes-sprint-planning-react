import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

export const AlertContext = React.createContext({
  alert: null,
  addAlert: () => {},
  removeAlert: () => {},
});

const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState(null);

  const removeAlert = () => setAlert(null);

  const addAlert = (message, type) => setAlert({ message, type });

  const contextValue = {
    alert,
    addAlert: useCallback((message, type) => addAlert(message, type), []),
    removeAlert: useCallback(() => removeAlert(), []),
  };

  return (
    <AlertContext.Provider value={contextValue}>
      {children}
    </AlertContext.Provider>
  );
};

AlertProvider.defaultProps = {
  children: null,
};

AlertProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
    PropTypes.string,
  ]),
};

export default AlertProvider;
