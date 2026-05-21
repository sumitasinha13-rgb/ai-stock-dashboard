export const metadata = {
  title: "AI Stock Dashboard",
  description: "AI Stock Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
