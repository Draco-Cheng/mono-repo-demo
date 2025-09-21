import "./globals.css";
import Menu from "../components/templates/Menu";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frontend App',
  description: 'Mono repo frontend application',
  icons: {
    icon: '/favicon.ico',
  },
};

// Minimal layout for the frontend app with a top menu
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Menu />
        {children}
      </body>
    </html>
  );
}
