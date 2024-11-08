import './globals.css';
import Navbar from './components/Navbar'; // Path to Navbar
import { ReactNode } from 'react';

export const metadata = {
  title: 'Hussain\'s Portfolio',
  description: 'Professional Portfolio of Hussain Bin Faisal',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
