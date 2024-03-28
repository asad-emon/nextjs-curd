import Link from "next/link";
import { usePathname } from 'next/navigation'

export function Header() {
    let title = "Next.js CURD Application";
    const pathname = usePathname();
    
    if (pathname == "/create") {
        title = "Create new user";
    }
    if ((/edit.*/).test(pathname)) {
        title = "Edit user";
    }

    return (
        <header className="">
            <Link href="/" className="text-center text-2xl">
                {title}
            </Link>
        </header>
    )
}
