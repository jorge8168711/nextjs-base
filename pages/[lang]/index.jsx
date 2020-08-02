import React from 'react';
import Head from 'next/head';
import useTranslation from '../../hooks/useTranslation';
import LangSelector from '../../components/LangSelector';

const IndexPage = () => {
  const { translate, locale } = useTranslation();
  const translations = translate('home');

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-300'>
      <Head>
        <title>{translations && translations.title}</title>
        <meta
          name='description'
          content={translations && translations.title}
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='p-8 mb-8 bg-white rounded shadow'>
        <div className='p-2 bg-gray-200'>
          <LangSelector />

          <p className='font-bold'>
            Current Locale:
            {' '}
            {locale}
          </p>

          <p>{translations && translations.title}</p>
          <p>{translations && translations.description}</p>
        </div>

        <h1 className='my-4'>Next.js base project</h1>
        <ul>
          <li>- eslint config airbnb</li>
          <li>- prettier</li>
          <li>- tailwindcss</li>
          <li>- nprogress</li>
        </ul>
      </main>

      <footer>
        <a
          className='flex flex-col items-center'
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'>
          Powered by
          <img src='/vercel.svg' alt='Vercel Logo' className='w-16' />
        </a>
      </footer>
    </div>
  );
};

export default IndexPage;