import type { Metadata } from "next";
import "@radix-ui/themes/styles.css";
import { Flex, Theme } from "@radix-ui/themes";
import { AuthInitializer } from '@/app/_domain/auth/components/AuthInitializer';

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
        <Theme>
          <AuthInitializer />
          {children}
        </Theme>
      </body>
    </html>
  );
}
