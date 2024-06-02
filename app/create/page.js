"use client"
import { Form } from "@/components/ui/form";
import { setInitialState } from "@/reducers/form-reducer";
import { createFormFields as formFields } from "@/constants/form-fields";
import api from '@/lib/api-client';

export default function Create() {

  setInitialState(formFields);

  const handleFormSubmit = async (e) => {
    const response = await api.postUser(e);
  };

  return (
    <Form
      formFields={formFields}
      title={`Create new user`}
      handleFormSubmit={handleFormSubmit}
    >
    </Form>
  )
}
