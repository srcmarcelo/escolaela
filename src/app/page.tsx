import ActionButtons from '@/components/ActionButtons';
import InstagramEmbedPic from '@/components/InstagramEmbedPic';
import Image from 'next/image';
import { FaInstagram } from 'react-icons/fa';

export default function Home() {
  return (
    <main className='flex-1 py-4 px-8 bg-gray-100 sm:py-8'>
      <section className='flex flex-col justify-center items-center py-8 text-center min-h-screen md:flex-row'>
        <div className='flex flex-1 justify-center items-center'>
          <div className='relative w-80 h-80 mb-6 sm:w-96 sm:h-96'>
            <Image src='/logo.png' fill alt='Logo' />
          </div>
        </div>
        <div className='flex flex-1 flex-col justify-center items-center text-center'>
          <p className='text-base text-gray-700 mb-4 sm:text-2xl sm:mb-8'>
            Há mais de 20 anos formando cidadãos por meio de uma educação
            inclusiva e cristã.
          </p>
          <h2 className='w-full text-xl mb-8 font-bold text-gradient bg-gradient-to-r from-primary to-secondary text-transparent'>
            Educandário Ler e Aprender
          </h2>
          <ActionButtons />
        </div>
      </section>

      <section className='mb-12 flex flex-col justify-center items-center'>
        <h2 className='text-3xl font-bold mb-4 text-center'>Sobre nós</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 mb-8 gap-8'>
          <div className='bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105'>
            <h3 className='text-2xl font-bold mb-2'>
              Ensinamos do maternal ao 5⁰ ano
            </h3>
            <p className='text-gray-700'>Aqui seu filho aprende!</p>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105'>
            <h3 className='text-2xl font-bold mb-2'>
              Aulas de inglês, libras, judô e ballet
            </h3>
            <p className='text-gray-700'>Tudo para seu filho se desenvolver</p>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105'>
            <h3 className='text-2xl font-bold mb-2'>
              Profissionais especializadas em educação especial
            </h3>
            <p className='text-gray-700'>Educamos com muito amor e inclusão</p>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105'>
            <h3 className='text-2xl font-bold mb-2'>Princípios cristãos</h3>
            <p className='text-gray-700'>
              Ensinamos a importância da palavra do Senhor desde cedo
            </p>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <InstagramEmbedPic linkCode='C8KzGwapAGR' />
          <InstagramEmbedPic linkCode='C48ChcXuo_u' />
          <InstagramEmbedPic linkCode='C3qiIX4u3MR' />
        </div>
      </section>

      <section className='mb-12 flex flex-col justify-center items-center'>
        <h2 className='text-3xl font-bold mb-4 text-center'>
          Nossa infraestrutura
        </h2>
        <div className='relative w-full max-w-screen-md h-auto mb-6'>
          <Image
            src='/escolaela.jpg'
            width={1080}
            height={586}
            layout='responsive'
            alt='Faxada'
          />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105'>
            <h3 className='text-2xl font-bold mb-2'>Equipamentos</h3>
            <p className='text-gray-700'>
              Banda larga de alta velocidade, smart TVs e muitos recursos
              multimídia pra uma melhor qualidade das aulas.
            </p>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105'>
            <h3 className='text-2xl font-bold mb-2'>
              Ambiente inclusivo e adaptado
            </h3>
            <p className='text-gray-700'>
              Na nossa escola todas as criânças especiais se sentem em casa.
            </p>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105'>
            <h3 className='text-2xl font-bold mb-2'>Ambiente Seguro</h3>
            <p className='text-gray-700'>
              A segurança é nossa prioridade. Proporcionamos um ambiente seguro
              e acolhedor para todas as crianças.
            </p>
          </div>
        </div>
      </section>

      {/* Address Section */}
      <section className='mb-12'>
        <h2 className='text-3xl font-bold mb-4 text-center'>Nosso Endereço</h2>
        <p className='text-lg text-center mb-4 text-gray-700'>
          R. Equador, 596 - Cajueiro Seco, Jaboatão dos Guararapes - PE,
          54330-323
        </p>
        <div className='h-64 shadow-lg rounded-lg overflow-hidden'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15797.217640586048!2d-34.932604!3d-8.172056!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7aae1bd1519eb13%3A0xfb5915191bdb35d5!2sEducand%C3%A1rio%20Ler%20e%20Aprender!5e0!3m2!1spt-BR!2sbr!4v1721599042359!5m2!1spt-BR!2sbr'
            width='100%'
            height='100%'
            style={{ border: 0 }}
            allowFullScreen={true}
            aria-hidden='false'
            tabIndex={0}
          ></iframe>
        </div>
      </section>

      {/* Instagram Section */}
      <section className='mb-12'>
        <h2 className='text-3xl font-bold mb-4 text-center'>
          Siga-nos no Instagram
        </h2>
        <div className='flex justify-center mb-4'>
          <a
            href='https://www.instagram.com/educandariolereaprender'
            target='_blank'
            rel='noopener noreferrer'
            className='flex flex-col items-center text-blue-600 hover:underline'
          >
            <FaInstagram className='w-12 h-12 mb-2' />
            <span>@educandariolereaprender</span>
          </a>
        </div>
      </section>

      <section className='mb-8'>
        <h2 className='text-3xl font-bold mb-4 text-center'>
          Horário de Funcionamento
        </h2>
        <div className='bg-white space-y-2 p-6 rounded-lg shadow-lg text-center'>
          <div>
            <p className='text-lg text-gray-700'>Segunda a Sexta:</p>
            <p>07:30 - 17:30</p>
          </div>
          <div>
            <p className='text-lg text-gray-700'>
              Finais de semana e feriados:
            </p>
            <p>Fechado</p>
          </div>
        </div>
      </section>
    </main>
  );
}
