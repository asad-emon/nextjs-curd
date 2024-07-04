"use client"
import { Form } from "@/components/ui/form";
import { setInitialState } from "@/reducers/form-reducer";
import { editFormFields as formFields } from "@/constants/form-fields";
import api from '@/lib/api-client';
import { useEffect } from "react";


export default function Edit({ params: { id } }) {
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await api.getUserById(id);
                if (response.status === "ok") {
                    setInitialState(formFields, response.data);
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
        <Form
            formFields={formFields}
            title={`Edit user`}
            handleFormSubmit={handleFormSubmit}
        >
        </Form>
    );
}
