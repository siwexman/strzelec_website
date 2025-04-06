import { DownloadIcon } from 'lucide-react';
import Link from 'next/link';

export default function VolounteerPage() {
    return (
        <div className="max-w-maxWidthSm mx-auto py-6 px-2">
            <h3 className="text-center">
                Oferta pracy dla wolontariuszy Związku Strzeleckiego „Strzelec”
                JP w Rzeszowie
            </h3>
            <div className="p-2">
                <div className="py-4">
                    <p>
                        Związek Strzelecki „Strzelec” Józefa Piłsudskiego
                        Rzeszowie jest patriotycznym stowarzyszeniem młodzieży,
                        kontynuującym program i{'\u00A0'}metody działania
                        „Strzelca” istniejącego w{'\u00A0'}Polsce w{'\u00A0'}
                        okresie międzywojennym. Zadaniem „Strzelca” jest
                        rozbudzanie i{'\u00A0'}hartowanie wśród młodzieży ducha
                        narodowego, karności, dzielności moralnej i{'\u00A0'}
                        fizycznej oraz szerzenie wiedzy wojskowej.
                    </p>
                </div>
                <div>
                    <h4 className="font-semibold">Kogo szukamy?</h4>
                    <ul className="list-disc list-inside">
                        <li className="px-2">
                            <b>Fajnych ludzi</b>, którzy mają inicjatywę i są
                            kreatywni
                        </li>
                        <li className="px-2">
                            <b>Lokalnych działaczy</b>, którzy mają odwagę i
                            siłę, by bezinteresownie poświęcić swój czas w
                            rozwijaniu zainteresowań oraz spędzaniu wolnego
                            czasu przez dzieci i młodzież strzelecką
                        </li>
                        <li className="px-2">
                            <b>Dynamicznych, odważnych, otwartych ludzi</b>,
                            którzy – bez względu na swój wiek – chcą się
                            rozwijać oraz wykorzystywać swoją energię i talenty
                            do działania, które ma wielki sens i daje ogromną
                            satysfakcję oraz radości
                        </li>
                    </ul>
                </div>
                <div className="font-semibold py-4">
                    <h4 className="">Kogo potrzebujemy?</h4>
                    <ul className="list-disc list-inside">
                        <li className="px-2">
                            Osób do pracy administracyjno-biurowej, która wymaga
                            systematyczności i odpowiedzialności
                        </li>
                        <li className="px-2">
                            Osób do pracy jako dziennikarze, którzy będą
                            opisywać szeroką bieżącą działalność „Strzelca”
                        </li>
                        <li className="px-2">
                            Osób, które będą pomagać przy organizacji różnych
                            przedsięwzięć
                        </li>
                    </ul>
                </div>
                <div className="py-4">
                    <h4 className="font-semibold">Uczymy</h4>
                    <ul className="list-disc list-inside">
                        <li className="px-2">Zarządzania czasem</li>
                        <li className="px-2">Skutecznej komunikacji</li>
                        <li className="px-2">Osiągania założonych celów</li>
                        <li className="px-2">Budowania relacji</li>
                        <li className="px-2">Pracy projektowej</li>
                    </ul>
                </div>
                <div className="py-4">
                    <h4 className="font-semibold">Co zyskasz?</h4>
                    <ul className="list-disc list-inside">
                        <li className="px-2">
                            <b>WPŁYW</b> - Twoje zaangażowanie będzie miało sens
                            oraz da Ci ogromną satysfakcję i radość
                        </li>
                        <li className="px-2">
                            <b>ROZWÓJ</b> - Zdobędziesz unikalne doświadczenie i
                            poszerzysz swoje kompetencje
                        </li>
                        <li className="px-2">
                            <b>KONTAKTY</b> - Poznasz wyjątkowych ludzi i
                            zbudujesz wartościowe relacje zawodowe i osobiste
                        </li>
                    </ul>
                </div>
                <div className="py-4">
                    <h4 className="font-semibold">Czego oczekujemy?</h4>
                    <ul className="list-disc list-inside">
                        <li className="px-2">
                            Zaangażowania i odpowiedzialności za powierzone
                            zadania
                        </li>
                    </ul>
                </div>

                <div className="py-2">
                    <p className="py-2 text-lg">
                        Zgłoś się do Związku Strzeleckiego „Strzelec” Józefa
                        Piłsudskiego w Rzeszowie
                    </p>
                    <div className="py-4">
                        <Link
                            href={'/assets/ANKIETA_WOLONTARIUSZA.pdf'}
                            target="_blank"
                            className="font-semibold text-xl"
                        >
                            <p className="flex gap-4">
                                Pobierz ankietę wolontariusza <DownloadIcon />
                            </p>
                        </Link>
                    </div>
                    <div className="py-2">
                        <p>Kontakt</p>
                        <p>
                            e-mail:{' '}
                            <a href="mailto:strzelec.rzeszow@op.pl">
                                strzelec.rzeszow@op.pl
                            </a>
                        </p>
                        <p>
                            tel.: <a href="telto:+48604594636">604 594 636</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
