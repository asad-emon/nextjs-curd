"use client"
import React, { createContext, useContext, useState } from 'react';

const GlobalContext = createContext({
    showAlert: () => { },
    closeAlert: () => { },
});

const GlobalContextProvider = ({ children }) => {
    const [alert, setAlert] = useState({
        open: false,
        message: 'Simple Message',
        severity: 'info'
    });
    const showAlert = (message, severity) => {
        setAlert({ open: true, message, severity });
    }
    const closeAlert = () => {
        setAlert(prev => ({ ...prev, open: false }));
    }
    return (
        <GlobalContext.Provider value={{
            alert,
            showAlert,
            closeAlert,
        }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export function useGlobalContext() {
    return useContext(GlobalContext);
}
export default GlobalContextProvider;