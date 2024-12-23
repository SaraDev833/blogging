import { Outfit } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer/Footer';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const outfit = Outfit({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
      <ToastContainer />
        <div >
          {children}
        </div>
      </body>
    </html>
  );
}
