"use client"
import { Form } from "@/components/ui/form";
import { setInitialState } from "@/reducers/form-reducer";
import { editFormFields as formFields } from "@/constants/form-fields";
import api from '@/lib/api-client';
import { useMemo } from "react";


export default function Edit({ params: { id } }) {
    const userData = useMemo(async()=>{
        const response = await api.getUserById(id);
        if(response.status == "ok") {
            console.log(response);
            return response.data;
        }
    },[id])
    
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
