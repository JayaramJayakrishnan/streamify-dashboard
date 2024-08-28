import { GiMusicSpell } from "react-icons/gi";

const Layout = ({ children }) => {
    return (
        <div className="relative min-h-screen overflow-y-auto">
            <nav className="text-indigo-800 sticky top-0 border-b border-indigo-200 p-4">
                <div className="flex items-center gap-2 text-2xl">
                    <GiMusicSpell />
                    <h1 className=" text-lg font-semibold">Streamify</h1>
                </div>
            </nav>

            <div className="bg-[#FFFFFF] pb-6">
                <div className="max-w-6xl mx-auto px-4 py-5">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Layout