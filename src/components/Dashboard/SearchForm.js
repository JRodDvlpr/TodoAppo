import React, {useState} from 'react';

const SearchInput = () => {

    const [search, setSearch] = useState('')

    const handleChange = (e) => {
        setSearch(e.target.value )

    }
    return (
        <div>
            <input placeholder="Search" onChange={handleChange} type="text" name="search" value={search} />
        </div>
    )
}

export default SearchInput;