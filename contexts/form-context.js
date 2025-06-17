"use client"
import React, { createContext, useReducer, useContext, useState } from 'react';

export const initialState = {}

export const setInitialState = (formFields, values = {}) => {
    formFields.forEach(field => {
        initialState[field.name] = values[field.name] ?? "";
    });
}

const FormContext = createContext({
  state: {},
  dispatch: () => { },
});

const reducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      return { ...state, [action.fieldName]: action.payload };
    default:
      return state;
  }
};

export const FormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <FormContext.Provider value={{
      state,
      dispatch
    }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => useContext(FormContext);