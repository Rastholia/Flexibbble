import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import './global.css'

export const metadata = {
  title: "Flexibbble",
  description: "showcase and remarkable developers projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
