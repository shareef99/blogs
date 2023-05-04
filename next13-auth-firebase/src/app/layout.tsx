import "./globals.css";

export const metadata = {
  title: "Auth with Next13, NextAuth, Firebase and TypeScript | Shareef",
  description:
    "A blog to show how to use NextAuth with Firebase and TypeScript in Next.js 13.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
