
import { Metadata } from 'next';
import './global.css';
// import { Inter } from 'next/font/google';

// const inter = Inter();
export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
      {/* <body className={`${inter.className} antialiased`}>{children}</body> */}
    </html>
  );
}
