import Link from "next/link"
export function Header({ title }) {
    return (
        <>
            <header className="">
                <p className="text-center text-2xl">
                    {title}
                </p>
            </header>
        </>
    )
}