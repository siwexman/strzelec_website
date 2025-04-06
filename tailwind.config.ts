import { heroui } from '@heroui/theme';
import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@heroui/theme/dist/components/pagination.js',
    ],
    theme: {
        extend: {
            backgroundColor: {
                black05: 'rgba(0, 0, 0, 0.5)',
                flagRed: 'rgba(220, 20, 60, 1)',
            },
            maxWidth: {
                maxWidth: '1434px',
                maxWidthSm: '1024px',
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            colors: {
                flagRed: 'rgba(220, 20, 60, 1)',
            },
        },
    },
    plugins: [require('tailwindcss-animate'), heroui()],
};
export default config;
