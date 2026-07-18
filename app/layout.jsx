import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://homesfoodproducts.com"),
  title: "Homes Food Products | Purity by Hand. Tradition by Heart.",
  description:
    "Homes Food Products brings hand-rolled Gujarati khakhra, snacks, healthy cookies, cakes, and festive orders made with purity and tradition.",
  keywords: ["Gujarati snacks", "Hand-rolled khakhra", "Homemade snacks", "Healthy cookies", "Custom cakes", "Jain-friendly snacks", "Homes Food Products"],
  openGraph: {
    title: "Homes Food Products",
    description: "Authentic Gujarati Taste. Purity by Hand. Tradition by Heart.",
    url: "https://homesfoodproducts.com",
    siteName: "Homes Food Products",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
