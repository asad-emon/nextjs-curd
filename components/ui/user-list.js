export function UserList ({children}) {
    return (
        <ul className="bg-white rounded-lg shadow overflow-hidden max-w-lg mx-auto dark:bg-gray-800 dark:border-gray-700">
            {children}
        </ul>
    ) 
}