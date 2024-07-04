"use client"
import { Header } from "./header"
import { Navigation } from "./navigation"
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Error from "../../app/error";

export function MainLayout ({children}) {
    return (
        <main>
            <div className="bg-gray-50 dark:bg-gray-700 flex justify-between lg:px-36 px-10 py-5">
                <Header/>
                <Navigation/>
            </div>
            <ErrorBoundary fallback={<Error/>}>
                <div className="m-10">
                    {children}
                </div>
            </ErrorBoundary>
        </main>
    )
}