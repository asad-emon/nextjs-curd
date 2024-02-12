import { useReducer } from "react";
import { MainLayout } from "@/components/ui/main-layout";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";


const reducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      return { ...state, [action.fieldName]: action.payload };
    default:
      return state;
  }
};

export default function Create() {

  const initialState = { 
    label:'', 
    type:'', 
    name:'', 
    required: false, 
    placeholder:''
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  
  const formData = [
    { label:'Name', type:'text', name:'name', required: false, placeholder:'John', value:state.name },
    { label:'Profile picture', type:'file', name:'profile_picture', required: true, placeholder:'', value:state.profile_picture },
    { label:'Phone number', type:'tel', name:'phone_number', required: false, placeholder:'0088', value:state.phone_number },
    { label:'Description', type:'text', name:'description', required: true, placeholder:'My name is John', value:state.description },
    { label:'Birth date', type:'date', name:'birthdate', required: true, placeholder:'2000-0-0', value:state.birthdate },
    { label:'Active status', type:'checkbox', name:'active_status', required: false, placeholder:'', value:state.active_status },
]

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'INPUT_CHANGE', fieldName: name, payload: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state)
  };

  return (
    <MainLayout>
      <Form
        title={`Create new user`}
        handleSubmit={handleSubmit}
      >
      {formData.map((field, index) => (
        <div key={index}>
          <Input
            label={field.label}
            type={field.type}
            name={field.name}
            value={field.value}
            placeholder={field.placeholder}
            required={field.required}
            onChange={handleInputChange}
          />
        </div>
      ))}
      </Form>
    </MainLayout>
  );
}
