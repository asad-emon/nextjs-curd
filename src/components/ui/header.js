import Link from "next/link";
import Head from "next/head";
import { useRouter } from 'next/router'

export function Header() {
    const router = useRouter();
    let title = "";
    
    switch (router.pathname) {
        case "/create":
            title = "Create new user";
            break;
        case "/edit":
            title = "Edit user";
            break;
        default:
            title = "Next.js CURD Application";
    }

    return (
        <header className="">
            <Head><title>{title}</title></Head>
            <Link href="/" className="text-center text-2xl">
                {title}
            </Link>
        </header>
    )
}
