'use client';

import React from 'react';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';

export default function ActionButtons() {
  const { push } = useRouter();

  return (
    <div className='flex flex-col space-y-4 sm:space-x-4 sm:flex-row sm:space-y-0'>
      <Button onClick={() => push('/matricula')} className='p-8'>
        Fazer matrícula
      </Button>
      <Button
        onClick={() =>
          window.open('https://painel-ela.vercel.app/painel', '_blank')
        }
        variant='outline'
        className='p-8'
      >
        Portal do professor
      </Button>
    </div>
  );
}
