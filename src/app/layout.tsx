import type { Metadata } from "next";
import "./globals.css";
import FlyonuiScript from "./components/FlyonuiScript";



export const metadata: Metadata = {
  title: "app taxes",
  description: "un site de test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className="bg-gray-100 text-gray-800"
      >
        {children}
        <FlyonuiScript />
      </body>
    </html>
  );
}
