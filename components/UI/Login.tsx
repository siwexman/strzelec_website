export default function Login() {
    return (
        <div>
            <h3 className="text-2xl text-center py-2">Panel administracyjny</h3>
            <div className="py-2">
                <div className="flex flex-col p-2 gap-2">
                    <label htmlFor="login">Login:</label>
                    <input id="login" className="border-2 rounded p-1" />
                </div>
                <div className="flex flex-col p-2 gap-2">
                    <label htmlFor="password">Password:</label>
                    <input id="password" className="border-2 rounded p-1" />
                </div>
                <div className="w-full flex justify-end px-2 py-2">
                    <button className="bg-green-800 rounded-md p-2 text-white">
                        Zaloguj
                    </button>
                </div>
            </div>
        </div>
    );
}
