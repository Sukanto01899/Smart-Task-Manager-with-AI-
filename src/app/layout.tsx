import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
 import { ToastContainer } from 'react-toastify';
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Smart Task Manager",
  description: "Smart Task Manager with AI Assistance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body
        className="antialiased"
      >
        {children}

        <ToastContainer/>
      </body>
    </html>
  );
}
