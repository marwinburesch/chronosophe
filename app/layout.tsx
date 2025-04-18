import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@days-old/components/ThemeProvider";

const author = localFont({
  src: [
    { path: "../public/fonts/Author-Variable.woff2", style: "normal" },
    {
      path: "../public/fonts/Author-VariableItalic.woff2",
      style: "italic",
    },
  ],
  variable: "--font-author",
});

const jetbrainsMono = localFont({
  src: [
    { path: "../public/fonts/JetBrainsMono-Variable.woff2", style: "mono" },
  ],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "chronosophe",
  description: "How many days old are you?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${author.variable} ${jetbrainsMono.variable} antialiased font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
