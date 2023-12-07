import PropTypes from 'prop-types';
import React, { useState } from 'react';
import {SearchIcon} from '../../assets/svgs';

const Searchbar = ({onSearch}) => {
    const [keyword, setKeyword] = useState('');

    const handleInputChange = (event) => {
        setKeyword(event.target.value);
    };

    const handleSearch = () => {
        onSearch(keyword);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          handleSearch();
        }
    };
    return (
        <div className='flex border rounded me-3'>
            <div className='flex justify-center items-center p-1'>
                <SearchIcon className="w-[20px] h-[20px]"/>
            </div>
            <input
                className='p-1 bg-dark-line outline-none focus:outline-none text-white'
                type="text"
                placeholder="Search..."
                value={keyword}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
            />
            {/* <button onClick={handleSearch}>Search</button> */}
        </div>
    );
};
export default Searchbar;