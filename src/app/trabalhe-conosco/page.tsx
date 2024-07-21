'use client';

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FaWhatsapp } from 'react-icons/fa';

interface FormData {
  name: string;
  role: string;
  experience: string;
  address: string;
}

const MatriculaPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const { name, role, experience, address } = data;
    const message = `Olá! Meu nome é *${name}* e tenho *${experience}* de experiencia em *${role}*. Meu endereço é *${address}*.`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=5581993171853&text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <main className='flex flex-col justify-center items-center flex-1 px-8 min-h-screen bg-gray-100 mb-8'>
      <h1 className='text-3xl font-bold mb-4 sm:text-4xl'>Trabalhe conosco</h1>
      <p className='text-base text-gray-700 mb-8 text-center sm:text-lg'>
        Preencha o formulário abaixo para iniciar uma conversa. Envie na mesma
        conversa o currículo. Analisaremos com atenção!
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='bg-white p-6 rounded-lg shadow-lg w-full max-w-sm'
      >
        <div className='mb-2 sm:mb-4'>
          <label className='block text-gray-700'>Seu nome</label>
          <input
            {...register('name', { required: true })}
            className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200'
            type='text'
          />
          {errors.name && (
            <span className='text-red-500'>Este campo é obrigatório</span>
          )}
        </div>
        <div className='mb-2 sm:mb-4'>
          <label className='block text-gray-700'>Função</label>
          <input
            {...register('role', { required: true })}
            className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200'
            type='text'
          />
          {errors.role && (
            <span className='text-red-500'>Este campo é obrigatório</span>
          )}
        </div>
        <div className='mb-2 sm:mb-4'>
          <label className='block text-gray-700'>Tempo de experiência</label>
          <input
            {...register('experience', { required: true })}
            className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200'
            type='text'
          />
          {errors.experience && (
            <span className='text-red-500'>Este campo é obrigatório</span>
          )}
        </div>
        <div className='mb-2 sm:mb-4'>
          <label className='block text-gray-700'>Endereço</label>
          <input
            {...register('address', { required: true })}
            className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200'
            type='text'
          />
          {errors.address && (
            <span className='text-red-500'>Este campo é obrigatório</span>
          )}
        </div>
        <button
          type='submit'
          className='w-full px-4 py-2 mt-4 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400 flex items-center justify-center'
        >
          <FaWhatsapp className='mr-2' /> Enviar via WhatsApp
        </button>
      </form>
    </main>
  );
};

export default MatriculaPage;
