export default function Join() {
    return (
        <div className="text-center">
            <div className="py-4">
                <div className="uppercase mx-auto max-w-48 font-semibold border rounded-lg">
                    <p className="p-1 text-flagRed bg-white rounded-t-lg">
                        Wyjdź z domu
                    </p>
                    <p className="p-1 bg-flagRed text-white rounded-b-lg">
                        Zostań Strzelcem
                    </p>
                </div>
            </div>
            <div>
                <p className="font-semibold py-1">
                    Czekamy na Ciebie w siedzibie Jednostki Strzeleckiej 2021!
                </p>
                <p>przy ul. Jagiellońskiej 6 w Rzeszowie,</p>
                <p>w każdy wtorek w godzinach 16.30 – 19.00,</p>
                <p>
                    tel. <a href="telto:+48607995335">607 995 335</a>,{' '}
                    <a href="telto:+48505034988">505 034 988</a>
                </p>
            </div>
        </div>
    );
}
