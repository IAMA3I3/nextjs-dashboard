import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import { StateProvider } from "@/context/StateContext";
import Topbar from "@/components/layout/Topbar";
import Footer from "@/components/layout/Footer";
import { DashboardProvider } from "@/context/DashboardProvider";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "A modern admin dashboard focused on frontend architecture, state management, and data visualization. Built with a scalable layout, reusable components, real-time task management, and dynamic charts driven entirely by application state.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StateProvider>
        <DashboardProvider>
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen overflow-hidden cursor-default`}
          >
            <div className="flex h-screen">
              <Sidebar />
              <div className="flex-1 flex flex-col overflow-hidden">
                <Topbar />
                <main className="flex-1 overflow-y-auto p-6">
                  {children}
                </main>
              </div>
            </div>
            <Footer />
            <Toaster position="bottom-right" />
          </body>
        </DashboardProvider>
      </StateProvider>
    </html>
  );
}
