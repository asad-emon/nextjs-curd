"use client"
import { Input } from "@/components/ui/input";
import { useFormContext } from "@/contexts/form-context";

export function Form({ children, title, formFields, handleFormSubmit }) {
    const [state, dispatch] = useFormContext();

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
            <div className="mx-auto w-full max-w-sm sm:max-w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form className="flex flex-col justify-center space-y-6" onSubmit={handleSubmit}>
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white">{title}</h5>
                    <div className="md:columns-2">
                        {formFields.map((field, index) => (
                            <div className="mb-4" key={index}>
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
                    </div>
                        {children}
                    <button type="submit" className="mx-auto sm:w-2/3 lg:w-1/3 w-full text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit application</button>
                </form>
            </div>
        </>
    );
}
