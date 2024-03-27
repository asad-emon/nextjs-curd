import { Header } from "./header"
import { Navigation } from "./navigation"
import { FormProvider } from "@/contexts/form-context";
import reducer, { initialState } from "@/reducers/form";
export function MainLayout ({children}) {
    return (
        <FormProvider initialState={initialState} reducer={reducer}>
            <main>
                <div className="bg-gray-50 dark:bg-gray-700 flex justify-between lg:px-36 px-10 py-5">
                    <Header/>
                    <Navigation/>
                </div>
                <div className="sm:container mx-auto mt-10">
                    {children}
                </div>
            </main>
        </FormProvider>
    )
}