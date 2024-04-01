"use client"
import { Form } from "@/components/ui/form";
import { setInitialState } from "@/reducers/form-reducer";
import { createFormFields as formFields } from "@/constants/form-fields";
import api from '@/lib/api-client';
import { useRouter } from 'next/navigation'

export default function Create() {
  const router = useRouter();

  setInitialState(formFields, {activeStatus: false});

  const handleFormSubmit = async (e) => {
    const response = await api.postUser(e);
    if (response.status == "ok") {
      alert(response.message);
      router.push('/')
    }
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
