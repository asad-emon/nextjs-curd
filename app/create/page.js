"use client"
import { Form } from "@/components/ui/form";
import { createFormFields as formFields } from "@/constants/form-fields";
import api from '@/lib/api-client';
import { useRouter } from 'next/navigation'
import { FormProvider, setInitialState } from "@/contexts/form-context";

export default function Create() {
  const router = useRouter();

  setInitialState(formFields, { activeStatus: false });

  const handleFormSubmit = async (e) => {
    console.log(e);
    return
    const response = await api.postUser(e);
    if (response.status == 200) {
      setInitialState(formFields, { activeStatus: false });
      alert('User created');
    }
  };

  return (
    <FormProvider>
      <Form
        formFields={formFields}
        title={`Create new user`}
        handleFormSubmit={handleFormSubmit}
      >
      </Form>
    </FormProvider>
  )
}
