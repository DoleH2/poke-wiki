import { Navbar } from "./Navbar"
import { SearchFrame } from "./SearchFrame"

export const PokeWikiFrame = () => {
    return (
        <div className="container-fluid mx-auto position-relative p-0 m-0">
            <Navbar />
            <SearchFrame />
        </div>
    )
}