import GlassPane from "@/components/GlassPane";
import Sidebar from "@/components/Sidebar";
import "@/styles/globals.css";
// import { Inter } from "@next/font/google";

// const inter = Inter({
//   variable: "--font-inter",
// });

export default function DashboardRootLayout({ children }) {
  return (
    <html lang="en" className="">
      <head />
      <body className="h-screen w-screen candy-mesh p-6">
        <GlassPane className="w-full h-full flex items-center">
          <Sidebar />
          {children}
        </GlassPane>
      </body>
    </html>
  );
}
