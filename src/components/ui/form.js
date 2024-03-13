import { Input } from "@/components/ui/input";
import { useReducer } from "react";

const reducer = (state, action) => {
    switch (action.type) {
      case 'INPUT_CHANGE':
        return { ...state, [action.fieldName]: action.payload };
      default:
        return state;
    }
};
export function Form({ children, title, formFields, handleFormSubmit }) {
    let initialValue = {}
    formFields.forEach(element => {
        initialValue[element.name] = ''        
    });

    const [state, dispatch] = useReducer(reducer, initialValue);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        dispatch({ type: 'INPUT_CHANGE', fieldName: name, payload: (e.target.type=='checkbox') ? e.target.checked : value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleFormSubmit(state)
    };
    return (
        <>
            <div className="mx-auto w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white">{title}</h5>
                    {formFields.map((field, index) => (
                        <div key={index}>
                        <Input
                            label={field.label}
                            type={field.type}
                            name={field.name}
                            value={state[field.name]}
                            placeholder={field.placeholder}
                            required={field.required}
                            onChange={handleInputChange}
                        />
                        </div>
                    ))}
                        {children}
                    <button type="submit" className="w-full text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit application</button>
                </form>
            </div>
        </>
    );
}
