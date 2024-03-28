"use client"
import React, { createContext, useReducer, useContext } from 'react';

const FormContext = createContext();

export const FormProvider = ({ reducer, initialState, children }) => {  
    return (
      <FormContext.Provider value={useReducer(reducer, initialState)}>
        {children}
      </FormContext.Provider>
    );
  };
  
export const useFormContext = () => useContext(FormContext);