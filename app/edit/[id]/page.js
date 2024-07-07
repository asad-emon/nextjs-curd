"use client"
import { Form } from "@/components/ui/form";
import { editFormFields as formFields } from "@/constants/form-fields";
import api from '@/lib/api-client';
import { useEffect, useState } from "react";
import { FormProvider, setInitialState } from "@/contexts/form-context";


export default function Edit({ params: { id } }) {
    const [apiResponse, setApiResponse] = useState(false);
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await api.getUserById(id);
                if (response.status === "ok") {
                    setInitialState(formFields, response.data);
                    setApiResponse(true);
                }
            } catch (error) {
                console.error("Failed to fetch user data:", error);
            }
        };
        fetchUserData();
    }, [id]);


    const handleFormSubmit = (e) => {
        console.log(e)
    };

    return (
        apiResponse &&
        <FormProvider>
            <Form
                formFields={formFields}
                title={`Edit user`}
                handleFormSubmit={handleFormSubmit}
            >
            </Form>
        </FormProvider>

    );
}
