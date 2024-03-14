import "@/styles/globals.css";
import { FormProvider } from "@/contexts/form-context";
import reducer, { initialState } from "@/reducers/form";

export default function App({ Component, pageProps }) {
  return (   
      <FormProvider initialState={initialState} reducer={reducer}>
          <Component {...pageProps} />;
      </FormProvider>
  )
}
