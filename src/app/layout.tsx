import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Educandário Ler e Aprender',
  description: 'Educação infantil, hotelzinho e reforço',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR'>
      <body className={inter.className}>
        <div className='min-h-screen flex flex-col pt-14'>
          <Header />

          {children}

          <section className='mb-16 px-8' id='contact'>
            <h2 className='text-3xl font-bold mb-4 text-center'>Contato</h2>
            <div className='bg-white flex flex-col justify-center items-center p-6 rounded-lg shadow-lg text-center md:flex-row md:space-x-8'>
              <div className='text-base space-y-2'>
                <div>
                  <p className='text-gray-700'>Telefone:</p>
                  <p>(81) 99317-1853</p>
                </div>
                <div>
                  <p className='text-gray-700'>Email:</p>
                  <p>equipe.escolaela@gmail.com</p>
                </div>
                <div>
                  <p className='text-gray-700'>Instagram:</p>
                  <p>@educandariolereaprender</p>
                </div>
              </div>
              <div className='flex flex-col space-y-4 items-center justify-center'>
                <a
                  href='https://api.whatsapp.com/send?phone=5581993171853&text=Ol%C3%A1,%20gostaria%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20o%20Educand%C3%A1rio%20Ler%20e%20Aprender'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='mt-4 inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400'
                >
                  <FaWhatsapp className='mr-2' /> WhatsApp
                </a>
                <a
                  href='https://www.instagram.com/educandariolereaprender'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-pink-500 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-400'
                >
                  <FaInstagram className='mr-2' /> Instagram
                </a>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </body>
    </html>
  );
}
