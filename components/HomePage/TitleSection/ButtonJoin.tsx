import { motion } from 'framer-motion';
import { useModal } from '@/components/context/ModalContext';

export default function ButtonJoin() {
    const { handleOpen } = useModal();

    return (
        <div className="py-8 hidden md:inline-block">
            <motion.button
                onClick={() => handleOpen('join')}
                className="p-4 text-xl bg-black font-semibold rounded-lg border "
                whileHover={{
                    scale: 1.1,
                    backgroundColor: 'white',
                    color: 'black',
                }}
            >
                Zostań Strzelcem
            </motion.button>
        </div>
    );
}
