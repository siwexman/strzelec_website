import { ReactNode } from 'react';
import * as motion from 'motion/react-client';

export default function InfoButton({
    icon,
    children,
    isOpen,
    handleClick,
}: {
    icon: ReactNode;
    children: ReactNode;
    isOpen: boolean;
    handleClick: () => void;
}) {
    return (
        <div className="flex rounded-full bg-slate-100 w-fit">
            <motion.div
                whileHover={{ scale: 1.1 }}
                onClick={handleClick}
                className="rounded-full bg-slate-300 p-6 after:content-none cursor-pointer"
            >
                {icon}
            </motion.div>
            <motion.div
                animate={{
                    maxWidth: isOpen ? '300px' : '0px',
                    padding: isOpen ? '0 1rem' : '0px',
                    opacity: isOpen ? 100 : 0,
                }}
                className="overflow-hidden my-auto whitespace-nowrap"
            >
                {children}
            </motion.div>
        </div>
    );
}
