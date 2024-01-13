import type { Metadata } from "next";
import "@/app/ui/globals.css";
import { poppins } from "@/app/ui/fonts";

export const metadata: Metadata = {
  title: {
    template: "%s | Victoria Scavetta",
    default: "Home | Victoria Scavetta",
  },
  description: "Personal portfolio showcasing Victoria Scavetta's skills.",
  // metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
