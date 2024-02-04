import Link from "next/link"
export function Navigation({navigation}) {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <button 
                            role="button"
                            className="inline-flex justify-center items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                        >
                            <Link
                                href={navigation.url}
                            >
                                {navigation.text}
                            </Link>
                        </button>
                    </li>
                </ul>
            </nav>
        </>
    )
}