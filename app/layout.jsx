import "./globals.css";

export const metadata = {
  title: "Homes Food Products | Purity by Hand. Tradition by Heart.",
  description:
    "Homes Food Products brings hand-rolled Gujarati khakhra, snacks, healthy cookies, cakes, and festive orders made with purity and tradition.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
