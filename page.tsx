import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SPOWAA OS 2.0",
  description: "Sistema operativo comercial SPOWAA",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="es"><body>{children}</body></html>;
}
