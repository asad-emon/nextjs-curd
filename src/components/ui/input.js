export function Input({ label, type, name, required, placeholder, value , onChange}) {
    const snakeToCamel = str => str.toLowerCase().replace(/(_\w)/g, m => m.toUpperCase().substr(1));
    return (
        <>
        {
            type === 'checkbox'? (
                <div className="flex items-start">
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input 
                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" 
                                id={snakeToCamel(name)} 
                                type={type} 
                                name={name} 
                                value={value} 
                                onChange={onChange}
                            />
                        </div>
                        <label htmlFor={snakeToCamel(name)} className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</label>
                    </div>
                </div>
            ) : (
                <div>
                    <label htmlFor={snakeToCamel(name)} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
                    <input 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                        id={snakeToCamel(name)} 
                        type={type} 
                        name={name} 
                        value={value} 
                        placeholder={placeholder} 
                        required={required} 
                        onChange={onChange} 
                    />
                </div>
            )
        }
        </>
    );
}
