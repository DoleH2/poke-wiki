import { useCallback, useMemo, useState } from "react";
import SearchPokemon from "../listPokemonPage/SearchPokemon";
import { useGetListPokemonMainQuery } from "../../redux/reducers/apiFetch";

const BoxSearchCompare = () => {
    const [filterData, setFilterData] = useState([]);
    const { data, error, status } = useGetListPokemonMainQuery({ limit: 2000, offset: 0 });
    const [searchCompare, setSearchCompare] = useState('');

    const handleFilterData = useCallback((data, search) => {
        if (search === "") {
            setFilterData([]);
            return
        }
        const listSearch = data.results.filter((item) => item.name.includes(search.toLowerCase()));
        setFilterData(listSearch.slice(0, 5));
        return
    }, [])
    useMemo(() => handleFilterData(data, searchCompare), [searchCompare]);
    const handleChangeSearch = (value) => {
        clearTimeout(handleChangeSearch.idOfTimeout);
        handleChangeSearch.idOfTimeout = setTimeout(() => {
            if (status === "fulfilled") {
                setSearchCompare(value);
            }
        }, 1000)
    }
    return (
        <SearchPokemon
            filterSearch={filterData}
            defaultValue={searchCompare}
            onChange={(value) => handleChangeSearch(value)}
            style={{ width: '350px' }}
        />
    )
}
export default BoxSearchCompare;