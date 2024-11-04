'use client';
import { partners } from '@/store/data/partners';
import PartnersLoop from './PartnersLoop';

export default function PartnersSection() {
    return (
        <section className="py-4">
            <div className="text-center py-8">
                <h2>Nasi Patroni</h2>
            </div>
            <div className="w-full inline-flex flex-nowrap pb-4">
                <PartnersLoop images={partners} />
            </div>
        </section>
    );
}
