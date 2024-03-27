import { MainLayout } from "@/components/ui/main-layout";
import { Form } from "@/components/ui/form";
import { setInitialState } from "@/reducers/form";
import { createFormFields as formFields } from "@/constants/form-fields";

export default function Create() {

  setInitialState(formFields);

  const handleFormSubmit = (e) => {
    console.log(e)
  };

  return (
    <MainLayout>
        <Form
          formFields={formFields}
          title={`Create new user`}
          handleFormSubmit={handleFormSubmit}
        >
        </Form>
    </MainLayout>
  )
}
