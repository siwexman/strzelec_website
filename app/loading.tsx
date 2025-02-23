'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import logoImg from '@/assets/logo_zs_strzelec.png';

export default function Loading() {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 1 }}
            >
                <Image
                    priority
                    src={logoImg}
                    alt="Logo Strzelec"
                    width={200}
                    height={200}
                />
            </motion.div>
        </div>
    );
}
