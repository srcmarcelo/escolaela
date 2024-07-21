'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import {
  FaBars,
  FaBook,
  FaEnvelope,
  FaFileAlt,
  FaHome,
  FaTimes,
} from 'react-icons/fa';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { push } = useRouter();

  return (
    <header
      className={`fixed top-0 left-0 right-0 p-2 bg-gradient-to-r from-secondary to-primary shadow-lg z-50 sm:p-4`}
    >
      <div className='container mx-auto flex justify-between items-center text-white'>
        <div
          className='flex items-center cursor-pointer'
          onClick={() => push('/')}
        >
          {/* <Image height={40} width={40} alt='logo' src='/pet.ico' /> */}
          <div className='bg-white text-secondary p-2 rounded-full mr-2 shadow'>
            ELA
          </div>
          <h1 className='text-center text-xl font-bold md:text-2xl'>
            Educandário Ler e Aprender
          </h1>
        </div>
        <nav className='hidden md:flex space-x-4'>
          <button
            onClick={() => push('/')}
            className='flex items-center transition duration-300 hover:text-yellow-300'
          >
            <FaHome className='mr-1' /> Início
          </button>
          <button
            onClick={() => push('/matricula')}
            className='flex items-center transition duration-300 hover:text-yellow-300'
          >
            <FaBook className='mr-1' /> Matrícula
          </button>
          <button
            onClick={() => push('/trabalhe-conosco')}
            className='flex items-center transition duration-300 hover:text-yellow-300'
          >
            <FaFileAlt className='mr-1' /> Trabalhe conosco
          </button>
          <a
            href='#contact'
            className='flex items-center transition duration-300 hover:text-yellow-300'
          >
            <FaEnvelope className='mr-1' /> Contato
          </a>
        </nav>
        <button
          className={`md:hidden focus:outline-none transition-transform duration-300 ${
            isMenuOpen ? 'rotate-180' : 'rotate-0'
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <FaTimes className='h-6 w-6 sm:h-8 sm:w-8' />
          ) : (
            <FaBars className='h-6 w-6 sm:h-8 sm:w-8' />
          )}
        </button>
      </div>
      {isMenuOpen && (
        <div className='md:hidden mt-2 space-y-2 animate-slide-in text-white p-2'>
          <button
            onClick={() => {
              push('/');
              setIsMenuOpen(false);
            }}
            className='block w-full text-left px-4 py-2 transition duration-300 underline underline-offset-2 hover:bg-blue-600'
          >
            Início
          </button>
          <button
            onClick={() => {
              push('/matricula');
              setIsMenuOpen(false);
            }}
            className='block w-full text-left px-4 py-2 transition duration-300 underline underline-offset-2 hover:bg-blue-600'
          >
            Matrícula
          </button>
          <button
            onClick={() => {
              push('/trabalhe-conosco');
              setIsMenuOpen(false);
            }}
            className='block w-full text-left px-4 py-2 transition duration-300 underline underline-offset-2 hover:bg-blue-600'
          >
            Trabalhe conosco
          </button>
          <a
            href='#contact'
            onClick={() => setIsMenuOpen(false)}
            className='block w-full text-left px-4 py-2 transition duration-300 underline underline-offset-2 hover:bg-blue-600'
          >
            Contato
          </a>
        </div>
      )}
    </header>
  );
}
