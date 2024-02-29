import Link from "next/link";
import Head from "next/head";
export function Header({ title, url }) {
    return (
        <header className="">
            <Head><title>{title}</title></Head>
            <Link href={url} className="text-center text-2xl">
                {title}
            </Link>
        </header>
    )
}

Header.defaultProps = {
    title: "Next.js CURD Application",
    url: "/",
};