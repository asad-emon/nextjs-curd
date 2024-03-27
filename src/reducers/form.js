export const initialState = {}

export const setInitialState = (formFields, values = {}) => {
    formFields.forEach(field => {
        initialState[field.name] = values[field.name] ?? "";
    });
}

const reducer = (state, action) => {
    switch (action.type) {
      case 'INPUT_CHANGE':
        return { ...state, [action.fieldName]: action.payload };
      default:
        return state;
    }
};

export default reducer;