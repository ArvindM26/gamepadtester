import type { Metadata } from "next";
import "../../index.css";

export const metadata: Metadata = {
  title: "Gamepad Tester",
  description: "The premium, professional-grade online controller tester.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
