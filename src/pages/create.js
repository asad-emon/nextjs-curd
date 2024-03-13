import { MainLayout } from "@/components/ui/main-layout";
import { Form } from "@/components/ui/form";

export default function Create() {

  const formFields = [
    { label:'Name', type:'text', name:'username', required: false, placeholder:'John'},
    { label:'Profile picture', type:'file', name:'profile_picture', required: true, placeholder:''},
    { label:'Phone number', type:'tel', name:'phone_number', required: false, placeholder:'0088'},
    { label:'Description', type:'richtext', name:'description', required: true, placeholder:'My name is John'},
    { label:'Birth date', type:'date', name:'birthdate', required: true, placeholder:'2000-0-0'},
    { label:'Active status', type:'checkbox', name:'active_status', required: false, placeholder:''}
]

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
  );
}
