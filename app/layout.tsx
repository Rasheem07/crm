import type { Metadata } from "next";
import "./globals.css";
import CRMLayout from "./crm-layout";

export const metadata: Metadata = {
  title: "CRM & Marketing - Alnubras",
  description: "CRM & Marketing module - Alnubras",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CRMLayout>{children}</CRMLayout>
      </body>
    </html>
  );
}
