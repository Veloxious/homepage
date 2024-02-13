import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { fontSans } from "./font";
import "./globals.css";

export const metadata: Metadata = {
  title: "My app",
  description: "Testing Next 14 + shadcn/ui",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
