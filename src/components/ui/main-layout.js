import { Header } from "./header"
import { Navigation } from "./navigation"
export function MainLayout ({children}) {
    const pageNavigation = {
        url : `/create`,
        text : `Create New User`
    }
    return (
        <>
            <main className="sm:container mx-auto">
                <div className="flex justify-between m-10">
                    <Header
                        title={`pageTitle`}
                    />
                    <Navigation
                        navigation={pageNavigation}
                    />
                </div>
                {children}
            </main>
        </>
    )
}