import CurrentDate from '../CurrentDate/CurrentDate'; 
import Searchbar from '../SearchBar/SearchBar';
import PropTypes from 'prop-types';

const Header = (props) => {
    const {heading, hasSearch = false} = props;
    const handleSearch = (query) => {
        console.log('Performing search for:', query);
    }
  return (
    <>
        <div className="flex justify-between">
            <div className="flex flex-col p-3">
                <div className="font-barlow text-4xl text-white">
                    {heading}
                </div>
                <div className="mt-2">
                    <CurrentDate />
                </div>
            </div>
            {
                hasSearch && 
                <div className='p-3'>
                    <Searchbar onSearch={handleSearch}/>
                </div>
            }
            
        </div>
    </>
  );
};

Header.propTypes = {
    heading: PropTypes.string,
    hasSearch: PropTypes.bool
}

export default Header;
