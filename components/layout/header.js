import Link from "next/link";
import { usePathname } from 'next/navigation'

export function Header() {
    let title = "nextfolio";
    const pathname = usePathname();
    
    if (pathname == "/create") {
        title = "Create new user";
    }
    if ((/edit.*/).test(pathname)) {
        title = "Edit user";
    }

    return (
        <header className="text-center sm:text-left">
            <Link href="/" className="text-lg sm:text-xl lg:text-2xl">
                {title}
            </Link>
        </header>
    )
}
