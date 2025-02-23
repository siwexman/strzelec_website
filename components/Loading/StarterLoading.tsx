'use client';

import { motion } from 'framer-motion';
import { Sigmar } from 'next/font/google';

import img from '@/assets/logo_zs_strzelec.png';
import Image from 'next/image';

const sigmar = Sigmar({
    subsets: ['latin'],
    weight: ['400'],
});

export default function StarterLoading() {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="relative">
                <Image
                    className="mx-auto"
                    src={img.src}
                    alt="Logo Strzelec"
                    width={200}
                    height={200}
                />
                <motion.div
                    className={`${sigmar.className} absolute -z-10 text-nowrap top-1/2 text-center px-4 text-xl`}
                    initial={{ x: -10, y: '-50%', opacity: 0 }}
                    animate={{ x: 100, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <p>Związek Strzelecki &apos;Strzelec&apos;</p>
                    <p>Józefa Piłsudksiego</p>
                </motion.div>
            </div>
        </div>
    );
}
