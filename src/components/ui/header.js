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

Header.defaultProps = {
    title: "Next.js CURD Application",
  };