import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Snow Step",
  description: "Snow Step is a platform for creating and sharing recorded steps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
