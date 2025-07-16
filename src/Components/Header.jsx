import { Profile_Img } from "../lib/Images";
import { useState } from "react"

function Header() {
    const [search, setSearch] = useState('');
    const [searchResult, setSearchResult] = useState('');
    return (
        <div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div>
                    {/* <div className="text-xs text-gray-500">Page/Student Portal</div> */}
                    <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Ilearnova Admin</h1>
                </div>
                {/* Search bar and profile */}
                <div className="flex items-center gap-3 w-full md:w-auto">
                    <form
                        className="flex items-center bg-white border border-gray-300 rounded-full px-2 py-1 w-full max-w-xs"
                        onSubmit={e => {
                            e.preventDefault();
                            setSearchResult(search);
                        }}
                    >
                        <input
                            type="text"
                            placeholder="Search..."
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            className="bg-transparent outline-none px-2 py-1 flex-1 text-sm"
                        />
                        <button type="submit" className="text-gray-500 px-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
                            </svg>
                        </button>
                    </form>
                    {/* Profile */}
                    <div className="">
                        {/* <span className="hidden sm:block text-sm text-gray-700 font-medium">{adminName}</span> */}
                        <img
                            src={Profile_Img}
                            loading='lazy'
                            alt="Profile"
                            className="w-10 h-8 rounded-full border-2 object-center border-white shadow-lg object-cover"
                        />
                    </div>
                </div>
            </div>
            {/* Search Result (optional) */}
            {searchResult && (
                <div className="mb-4 text-sm text-gray-600">Search result for: <span className="font-semibold">{searchResult}</span></div>
            )}
        </div>
    )
}

export default Header