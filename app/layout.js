import Navbar from 'components/layout/header';
import { Suspense } from 'react';
import './globals.css';

const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000';

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Todd's Shopify Test Site",
    template: `%s | Todd's Shopify Test Site`
  },
  robots: {
    follow: true,
    index: true
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-neutral-50 text-black selection:bg-teal-300">
        <Navbar />
        <Suspense>
          <main>{children}</main>
        </Suspense>
      </body>
    </html>
  );
}
