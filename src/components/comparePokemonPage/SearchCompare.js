import { Suspense, lazy } from 'react';
import { useForm } from 'react-hook-form';

const OptionSearch = lazy(() => import('./OptionSearch'));

const SearchCompare = ({ filterSearch, defaultValue, onChange, ...rest }) => {
    const { register } = useForm();
    return (
        <div className="frame-input-search position-relative">
            <input autoComplete="off"
                {...rest}
                className="form-control"
                defaultValue={defaultValue}
                {...register("search", {
                    onChange: (e) => onChange(e.target.value)
                })}
            />
            <div className="frame-option-search position-absolute bg-white w-100 rounded" style={{ top: '100%' }}>
                {
                    filterSearch.map((pokemonSearch, idx) => (
                        <Suspense key={idx}>
                            <OptionSearch dataPokemon={pokemonSearch} />
                        </Suspense>
                    ))
                }
            </div>
        </div>
    )
}

export default SearchPokemon;