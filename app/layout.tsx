import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SnowEd — Smart Student Scheduler",
  description:
    "SnowEd is a free, fully offline student scheduler app. Manage schedules, courses, notes, and research — all in one place.",
  keywords: ["student app", "scheduler", "notes", "offline"],
  openGraph: {
    title: "SnowEd — Smart Student Scheduler",
    description: "Free offline student scheduler with notes, Wikipedia research, and more.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
