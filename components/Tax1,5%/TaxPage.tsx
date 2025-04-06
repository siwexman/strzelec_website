import Image from 'next/image';

import imgTax from '@/assets/przekaz-podatek.jpeg';

export default function TaxPage() {
    return (
        <div className="max-w-maxWidthSm mx-auto py-4 px-2">
            <h2 className="text-center py-2">
                Podaruj 1,5% podatku Orlętom i Strzelcom!
            </h2>
            <div className="text-center md:text-left">
                <p className="p-2 text-gray-500 italic">
                    Towarzystwo Przyjaciół Związku Strzeleckiego „Strzelec” w
                    {'\u00A0'}Rzeszowie zwraca się z{'\u00A0'}prośbą o{'\u00A0'}
                    przekazanie 1,5% podatku naszym Orlętom i{'\u00A0'}
                    Strzelcom, wpisując w{'\u00A0'}zeznaniu podatkowym PIT nasz
                    numer KRS: 0000283993.
                </p>
                <div className="h-px w-full bg-slate-400"></div>
                <div className="px-2 py-4">
                    <div className="grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-2 py-2">
                        <p>
                            Celem Towarzystwa jest pomoc w prowadzeniu
                            całorocznej pracy wychowawczej i{'\u00A0'}
                            szkoleniowej dzieci, młodzieży skupionej w Związku
                            Strzeleckim „Strzelec” Józefa Piłsudskiego, który
                            jest patriotycznym stowarzyszeniem młodzieży
                            polskiej - kontynuatorem „Strzelca” istniejącego w
                            okresie międzywojennym. Zadaniem „Strzelca” jest
                            rozbudzanie i{'\u00A0'}hartowanie wśród młodzieży
                            ducha patriotycznego, karności, dzielności moralnej
                            i{'\u00A0'}fizycznej oraz szerzenie wiedzy
                            wojskowej.
                        </p>
                        <div className="relative mx-auto w-full h-full">
                            <Image
                                src={imgTax}
                                alt="Przekaż 1,5% podatku"
                                fill
                                sizes="50wv"
                                className="object-contain"
                            />
                        </div>
                    </div>
                    <p>
                        Zadania te realizowane są poprzez czynny udział w
                        {'\u00A0'}obchodach rocznic narodowych, organizację
                        obozów, rajdów, szkolenia wojskowego oraz prowadzenie
                        świetlic środowiskowych. Pieniądze otrzymane z{'\u00A0'}
                        wpłat jednego procentu podatku będą przeznaczone na
                        zajęcia wychowawcze, edukacyjne, zakup sprzętu, zawody
                        sportowe i{'\u00A0'}wojskowe oraz wyjazdy związane z
                        dziedzictwem narodowym dla dzieci i{'\u00A0'}młodzieży
                        skupionej w{'\u00A0'}Związku Strzeleckiego Strzelec
                        Józefa Piłsudskiego
                    </p>
                </div>
            </div>
        </div>
    );
}
