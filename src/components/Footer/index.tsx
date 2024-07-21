import React from 'react';

export default function Footer() {
  return (
    <footer className='bg-primary text-white p-4 text-center'>
      <p>
        &copy; {new Date().getFullYear()} Educandário Ler e Aprender. Todos os direitos
        reservados.
      </p>
    </footer>
  );
}
