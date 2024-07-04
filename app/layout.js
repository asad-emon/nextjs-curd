import { Inter } from "next/font/google";
import "./globals.css";
import { MainLayout } from "@/components/ui/main-layout";
import { FormProvider } from "@/contexts/form-context";
import reducer, { initialState } from "@/reducers/form-reducer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next.js CURD Application",
  description: "Simple curd application made by next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FormProvider initialState={initialState} reducer={reducer}>
          <MainLayout>
              {children}
          </MainLayout>
        </FormProvider>
      </body>
    </html>
  );
}
