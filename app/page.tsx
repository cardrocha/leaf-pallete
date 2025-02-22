'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-[#000000] to-[#143811] p-4 md:p-8 lg:p-12'>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className='text-center flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4'
      >
        <Image
          src='/logo.png'
          alt='Leaf Palette Logo'
          width={180}
          height={180}
          priority
        />
        <div>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mt-4 md:mt-0 text-[#059212]'>
            Leaf Palette
          </h1>
          <p className='mt-2 md:mt-4 text-lg md:text-xl lg:text-2xl text-gray-400'>
            Estamos preparando algo incrível. Fique atento!
          </p>
        </div>
      </motion.div>
    </main>
  );
}
