"use client"
import { Form } from "@/components/ui/form";
import { setInitialState } from "@/reducers/form-reducer";
import { editFormFields as formFields } from "@/constants/form-fields";
import { useParams } from 'next/navigation'
import users from "@/constants/users.json";
import { useMemo } from "react";

export default function Edit() {
    const params = useParams();
    const userData = useMemo(() => {
        return users.find((user) => user.id == params.id); // call api
    }, [params]);
    
    setInitialState(formFields, userData);

    const handleFormSubmit = (e) => {
        console.log(e)
    };

    return (
        <Form
            formFields={formFields}
            title={`Edit user`}
            handleFormSubmit={handleFormSubmit}
        >
        </Form>
    );
}
