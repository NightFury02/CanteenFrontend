import React from 'react';
import {SearchIcon} from '../../assets/svgs';

const Searchbar = ({handleSearch}) => {
    const [keyword, setKeyword] = React.useState('');

    const handleInputChange = (e) => {
        setKeyword(e.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          handleSearch(keyword !== null ? '' : keyword);
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
                onChange={(e) => handleInputChange(e)}
                onKeyDown={(e) => handleKeyDown(e)}
                aria-label="Search field"
            />
        </div>
    );
};
export default Searchbar;