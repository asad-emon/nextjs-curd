import Link from "next/link"
import { useRouter } from 'next/router'
export function Navigation() {
    const router = useRouter();
    return (
        <>
            <nav>
                <ul className="flex flex-row font-bold mt-0 space-x-8 rtl:space-x-reverse text-sm">
                    <li className={`text-gray-900 dark:text-white hover:text-blue-500 ${router.pathname == '/' && 'text-indigo-600'}`}>
                        <Link
                            href="/"
                        >
                            Home
                        </Link>
                    </li>
                    <li className={`text-gray-900 dark:text-white hover:text-blue-500 ${router.pathname == '/create' && 'text-indigo-600'}`}>
                        <Link
                            href="/create"
                        >
                            Create user
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}