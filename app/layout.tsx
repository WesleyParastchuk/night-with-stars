import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pietra, minha princesa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="w-dvw h-dvh">{children}</body>
    </html>
  );
}
