"use client"
import { Form } from "@/components/ui/form";
import { setInitialState } from "@/reducers/form";
import { createFormFields as formFields } from "@/constants/form-fields";

export default function Create() {

  setInitialState(formFields);

  const handleFormSubmit = (e) => {
    console.log(e)
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
