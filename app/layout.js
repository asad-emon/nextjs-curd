import { Inter } from "next/font/google";
import "./globals.css";
import { MainLayout } from "@/components/ui/main-layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next.js CURD Application",
  description: "Simple curd application made by next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <MainLayout>
              {children}
          </MainLayout>
      </body>
    </html>
  );
}
