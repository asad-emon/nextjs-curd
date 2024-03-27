import { MainLayout } from "@/components/ui/main-layout";
import { Form } from "@/components/ui/form";
import { setInitialState } from "@/reducers/form";
import { editFormFields as formFields } from "@/constants/form-fields";
import { useRouter } from 'next/router'
import users from "@/constants/users.json";
import { useMemo } from "react";

export default function Edit() {
    const router = useRouter()

    const userData = useMemo(() => {
        return users.find((user) => user.id == router.query.id); // call api
    }, [router]);

    setInitialState(formFields, userData);

    const handleFormSubmit = (e) => {
        console.log(e)
    };

    return (
        <MainLayout>
            <Form
                formFields={formFields}
                title={`Edit user`}
                handleFormSubmit={handleFormSubmit}
            >
            </Form>
        </MainLayout>
    );
}
