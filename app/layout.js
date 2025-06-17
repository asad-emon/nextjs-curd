import { Inter } from "next/font/google";
import "./globals.css";
import { MainLayout } from "@/components/layout/main-layout";
import GlobalContextProvider from "@/contexts/global-context";
import Alert from "@/components/plugin/alert";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next.js CURD Application",
  description: "Simple curd application made by next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalContextProvider>
          <Alert />
          <MainLayout>
            {children}
          </MainLayout>
        </GlobalContextProvider>
      </body>
    </html>
  );
}
