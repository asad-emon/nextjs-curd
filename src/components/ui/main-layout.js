import { Header } from "./header"
import { Navigation } from "./navigation"
export function MainLayout ({children}) {
    return (
        <>
            <main>
                <div className="bg-gray-50 dark:bg-gray-700 flex justify-between lg:px-36 px-10 py-5">
                    <Header/>
                    <Navigation/>
                </div>
                <div className="sm:container mx-auto mt-10">
                    {children}
                </div>
            </main>
        </>
    )
}